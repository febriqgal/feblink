"use client";
import { Sosmed } from "@/type/sosmed";
import Image from "next/image";
import { useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Certification from "../../public/certification.svg";
import FpLogo from "../../public/fp.svg";
import Github from "../../public/github.svg";
import Instagram from "../../public/instagram.svg";
import Linkedin from "../../public/linkedin.svg";
import Tiktok from "../../public/tiktok.svg";
import Twitter from "../../public/twitter.svg";
import { ArrowIcon } from "./icon/arrow";
import SkeletonC from "./skeleton";

export default function CardC() {
  const sosmed: Sosmed[] = [
    {
      name: "My Personal Website",
      href: "https://febriqgalpurnama.com/",
      icon: FpLogo,
    },
    {
      name: "My Certification",
      href: "https://www.febriqgalpurnama.com/certification",
      icon: Certification,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/febriqgal/",
      icon: Linkedin,
    },
    { name: "Github", href: "https://github.com/febriqgal", icon: Github },
    {
      name: "Instagram",
      href: "https://www.instagram.com/febriqgal_/",
      icon: Instagram,
    },
    {
      name: "Tiktok",
      href: "https://www.tiktok.com/@febriqgal_",
      icon: Tiktok,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/febriqgal_",
      icon: Twitter,
    },
  ];
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  if (isLoading) {
    return (
      <div className="container grid w-full grid-cols-1 gap-4 px-8 text-[#0A4D68]">
        <SkeletonC />
        <SkeletonC />
        <SkeletonC />
        <SkeletonC />
      </div>
    );
  }
  return (
    <>
      <div className="container grid w-full grid-cols-1 gap-4 px-8 text-[#0A4D68]">
        {sosmed.map((e: Sosmed, i: number) => {
          return (
            <a
              target="_blank"
              key={i}
              href={e.href}
              className="relative w-full h-10 rounded-md group"
            >
              <span className="absolute inset-0 border-2 border-dashed rounded-md border-slate-50" />
              <div className="relative flex items-center h-full px-2 text-[#0a4d68] transition-transform transform -translate-x-2 -translate-y-2 bg-white border-2 rounded-md shadow-xl group-hover:duration-200 border-slate-50 backdrop-blur-lg group-hover:-translate-x-1 group-hover:-translate-y-1">
                <Image height={25} src={e.icon} alt="#" />
                <div className="flex items-center justify-between w-full ">
                  <h2 className="ml-2 text-sm font-medium">{e.name}</h2>
                  <ArrowIcon className="h-[20px] fill-[#0a4d68]" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}
