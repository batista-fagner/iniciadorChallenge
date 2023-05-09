"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { CardTransaction } from "../comopnents/cardTransaction";

export default function Transacticon() {
  const [filteredList, setfilteredList] = useState<any>();
  const [inputValue, setInputValue] = useState<string>('');

  const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:3004/transactions",
    fetcher
  );
  
  useEffect(() => {
    if (!inputValue) {
      setfilteredList(data);
      return;
    }

    if(!data) return;

    const filterSearch = data.filter((resultList: any) => {
      if (inputValue) {
        return (
          resultList.creditor.name
            .toLowerCase()
            .trim()
            .indexOf(inputValue.toLowerCase()) !== -1
        );
      }
    });

    setfilteredList(filterSearch.length > 0 ? filterSearch : filteredList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, data]);

  return (
    <main className="flex justify-center w-full">
      <CardTransaction
        dataTransactions={filteredList}
        setInputValue={setInputValue}
      />
    </main>
  );
}
