import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "IMDb Clobe",
  description: "This is the IMBd clobe website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
