import ReduxProvider from "@/Redux/redux-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Product Page Generator",
  description: "Generated by Yassine Bouchama",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body dir="rtl" className={inter.className}>
        <div className=" text-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
          <span className="font-medium">Warning alert!</span>My free Server "API" will spin down with inactivity, which can delay requests by 50 seconds or more.</div>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
