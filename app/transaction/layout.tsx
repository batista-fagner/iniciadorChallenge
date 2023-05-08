import "../globals.css";

export const metadata = {
  title: "Iniciador",
  description: "Credit transactions",
};

export default function TransactionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="dark:bg-gray-950 w-full fixed h-16 flex items-center justify-center">
        <div>menu</div>
      </div>
      {children}
    </div>
  );
}
