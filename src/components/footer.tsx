import Image from "next/image";
import Fp from "../../public/febproject.svg";
import Link from "next/link";
export default function FooterC() {
  return (
    <footer className="flex flex-col items-center justify-center pt-4">
      <h1 className="text-xs font-light">From</h1>
      <Link target="_blank" href={"https://www.instagram.com/febproject_/"}>
        <Image height={40} src={Fp} alt="#" />
      </Link>
    </footer>
  );
}
