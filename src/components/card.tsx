import Image from "next/image";
import Link from "next/link";
import Instagram from "../../public/instagram.svg";
import Twitter from "../../public/twitter.svg";
import FpLogo from "../../public/fp.svg";
import Github from "../../public/github.svg";
export default function CardC() {
  const sosmed = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/febriqgal_/",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/febriqgal_",
      icon: Twitter,
    },
    { name: "Website", href: "https://febriqgalpurnama.com/", icon: FpLogo },
    { name: "Github", href: "https://github.com/febriqgal", icon: Github },
  ];
  return (
    <div className="container grid w-full grid-cols-1 gap-4 px-10 text-[#0A4D68]">
      {sosmed.map((e, i) => {
        return (
          <a key={i} href={e.href} className="relative w-full h-10 group">
            <span className="absolute inset-0 border-2 border-dashed rounded-md border-slate-50" />
            <div className="relative flex items-center h-full px-2 transition-transform transform -translate-x-2 -translate-y-2 border-2 rounded-md group-hover:duration-500 bg-slate-50 border-slate-50 group-hover:-translate-x-1 group-hover:-translate-y-1">
              <Image
                className="fill-slate-800"
                height={25}
                src={e.icon}
                alt="#"
              />
              <h2 className="ml-2 font-medium">{e.name}</h2>
            </div>
          </a>
        );
      })}
    </div>
  );
}
