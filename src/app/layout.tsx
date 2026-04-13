import type { Metadata } from "next";
import { Inter  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "BondTrack — Keep Your Connections Alive",
  description:
    "A smart friendship management app to track interactions, manage relationships, and stay connected with the people who matter.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
       <Navbar />
        {children}
       <Footer />
      </body>
    </html>
  );
}
