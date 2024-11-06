import localFont from "next/font/local";
import "./globals.css";
import ConditionalHeader from "@/layout/conditionalHeader";

const switzer = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-switzer",
  weight: "100 900",
});

const nibPro = localFont({
  src: "./fonts/NibPro-Regular.woff2",
  variable: "--font-nib",
  weight: "400",
});

export const metadata = {
  title: "Samuli Susihukka – kuvataiteilija",
  description: "Kuvataiteilija",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${switzer.variable} ${nibPro.variable} antialiased font-[family-name:var(--font-switzer)] font-[666]`}
      >
        <ConditionalHeader />
        {children}
      </body>
    </html>
  );
}
