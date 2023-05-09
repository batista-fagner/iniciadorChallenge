"use client";

import { ChangeEvent, useState } from "react";
import { TransactionIformation } from "../../comopnents/transactionIformation";

export type TdataTransactions = {
  id: string;
  amount: string;
  creditor: { name: string; bank: { name: string; avatar: string } };
  debtor: { name: string; bank: { name: string; avatar: string } };
  description: string;
};

interface IDataTransactions {
  setInputValue: (value: string) => void
  dataTransactions: TdataTransactions[];
}

export const CardTransaction = ({ dataTransactions, setInputValue }: IDataTransactions) => {
  const [open, setOpen] = useState(false);
  const [dataTransaction, setDataTransaction] = useState<TdataTransactions>();

  const handleModal = (transaction: TdataTransactions) => {
    setOpen(true);
    setDataTransaction(transaction);
  };

  const getValueInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <div>
        <div className="flex p-10 pt-28 flex-col">
          <input
            type="search"
            placeholder="search for creditor name"
            onChange={(e) => getValueInput(e)}
            className="block w-60 px-2 mb-4 rounded-md border-0 py-1.5 bg-gray-900 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></input>
          <div className="grid grid-cols-4 gap-6">
            {dataTransactions &&
              dataTransactions.map((value: TdataTransactions, index) => (
                <div
                  key={value.id}
                  className="cursor-pointer"
                  onClick={() => handleModal(value)}
                >
                  <div className="bg-gradient-to-r from-sky-500 to-indigo-500 w-80 h-32 rounded">
                    <div className="p-2">
                      <div className=" flex justify-center  w-14 h-14 overflow-hidden rounded-full bg-slate-400">
                        <img
                          className="w-full"
                          src="http://placeimg.com/640/480/business"
                          alt="Sunset in the mountains"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col pl-3">
                      <div>
                        <span className=" pr-1 text-gray-950 font-semibold">
                          Creditor Name:
                        </span>
                        <span>{value.creditor.name.slice(0, 6)}...</span>
                      </div>
                      <div>
                        <span className="pr-1 text-gray-950 font-semibold">
                          Bank Name:
                        </span>
                        <span>{value.creditor.bank.name.slice(0, 20)}...</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {dataTransaction && (
          <TransactionIformation
            setOpen={setOpen}
            open={open}
            dataCardInfo={dataTransaction}
          />
        )}
      </div>
    </>
  );
};
