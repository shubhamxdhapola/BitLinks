// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "BitLinks - Your trusted URL shortner",
  description: "Bitlinks helps you to shorten your URL's easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster  position="top-center" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
