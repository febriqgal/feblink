import Image from "next/image";
import Fp from "../../public/logotrans.svg";
export default function FooterC() {
  return (
    <footer className="flex flex-col items-center justify-center space-x-0">
      <h1 className="text-xs font-light">Created by Febriqgal🔥</h1>
      <Image height={40} className="mt-4" src={Fp} alt="#" />
    </footer>
  );
}
