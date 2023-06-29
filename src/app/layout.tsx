import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Fp from "../../public/fp.svg";
import Image from "next/image";
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
    <html lang="en" className="text-slate-50 light">
      <body className={`${poppins.className} bg-[#0A4D68]`}>
        <Providers>
          <nav className="bg-slate-50 z-[9999] text-[#0A4D68] shadow-xl text-center py-4 outline-2 outline-white outline-dashed outline-offset-4 fixed w-full">
            <div className="flex justify-center">
              <Image height={40} src={Fp} className="mr-2" alt="Linkfeb" />
              <div className="text-start">
                <h1 className="text-xl font-bold">Linkfeb</h1>
                <h1 className="-mt-1 text-xs italic">
                  Finds everything created with one simple link
                </h1>
              </div>
            </div>
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
