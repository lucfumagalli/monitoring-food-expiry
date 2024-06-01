import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../public/style.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monitoring food expiry date",
  description: "Track when food expire with batch number",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="tlight">
      <body className={inter.className}>

        <Nav />

        <main className="flex flex-col min-h-[calc(100vh-4rem-1px)]">
          <div className='flex-1 flex flex-col h-full'>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
