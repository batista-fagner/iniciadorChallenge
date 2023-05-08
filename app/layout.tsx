import "./globals.css";

export const metadata = {
  title: "Iniciador",
  description: "Credit transactions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" min-h-screen antialiased text-black bg-white dark:bg-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
