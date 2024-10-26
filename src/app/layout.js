import localFont from "next/font/local";
import "./globals.css";
import Header from "@/layout/header";

const switzer = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-switzer",
  weight: "100 900",
});

export const metadata = {
  title: "Samuli Susihukka – kuvataiteilija",
  description: "Kuvataiteilija",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${switzer.variable} antialiased font-[family-name:var(--font-switzer)] font-[666]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
