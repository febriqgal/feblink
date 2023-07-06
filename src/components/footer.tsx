import Link from "next/link";
import { FebprojectIcon } from "./icon/febproject";
export default function FooterC() {
  return (
    <footer className="flex flex-col items-center justify-center pt-4">
      <h1 className="text-xs font-light">From</h1>
      <Link target="_blank" href={"https://www.instagram.com/febproject_/"}>
        <FebprojectIcon className="h-[36px]" />
      </Link>
    </footer>
  );
}
