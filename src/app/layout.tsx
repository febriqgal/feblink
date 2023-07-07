"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { useEffect } from "react";
const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleContextmenu = (e: any) => {
      e.preventDefault();

      console.log("sssssss");
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
  return (
    <html lang="en" className="text-slate-50 light scroll-smooth">
      <body className={`${poppins.className} bg-[#0A4D68]`}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
