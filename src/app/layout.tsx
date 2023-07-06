import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
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
