
import { Inter  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { InteractionHistoryProvider } from "@/context/InteractionHistoryContext";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})


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
        <InteractionHistoryProvider>

       <Navbar />
        {children}
       <Footer />
        </InteractionHistoryProvider>

        <Toaster position="top-center" />
      </body>
    </html>
  );
}
