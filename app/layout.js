import Toaster from "@/components/Toaster";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "BitLinks - Your Trusted URL Shortner",
  description: "Bitlinks helps you to shorten your URL's easily.",
  icons : {
    icon : '/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-theme="black">
        <Toaster />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
