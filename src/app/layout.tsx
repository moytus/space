import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "moytus.dev",
  description: "moy's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow bg-gray-100">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
