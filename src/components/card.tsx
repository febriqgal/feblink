"use client";
import Image from "next/image";
import FpLogo from "../../public/fp.svg";
import Github from "../../public/github.svg";
import Instagram from "../../public/instagram.svg";
import Linkedin from "../../public/linkedin.svg";
import Twitter from "../../public/twitter.svg";
import Tiktok from "../../public/tiktok.svg";
import Certification from "../../public/certification.svg";
import Arrow from "../../public/arrow.svg";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function CardC() {
  const sosmed: any = [
    {
      name: "Website",
      href: "https://febriqgalpurnama.com/",
      icon: FpLogo,
      link: "febriqgalpurnama.com",
    },
    {
      name: "My Certification ",
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
  return (
    <>
      <div className="container grid w-full grid-cols-1  gap-4 px-8 text-[#0A4D68]">
        {sosmed.map((e: any, i: string) => {
          return (
            <>
              {isLoading ? (
                <div
                  key={i}
                  className="relative w-full h-10 rounded-md shadow-xl group"
                >
                  <span className="absolute inset-0 border-2 border-dashed rounded-md border-slate-50" />
                  <Skeleton
                    direction="ltr"
                    borderRadius={6}
                    duration={3}
                    baseColor="#fff"
                    highlightColor="#64748b"
                    className="relative flex items-center h-full px-2 transition-transform transform -translate-x-2 -translate-y-2 group-hover:duration-200 border-slate-10 group-hover:-translate-x-1 group-hover:-translate-y-1"
                  ></Skeleton>
                </div>
              ) : (
                <a
                  target="_blank"
                  key={i}
                  href={e.href}
                  className="relative w-full h-10 rounded-md group"
                >
                  <span className="absolute inset-0 border-2 border-dashed rounded-md border-slate-50" />
                  <div className="relative flex items-center h-full px-4 transition-transform transform -translate-x-2 -translate-y-2 border-2 rounded-md group-hover:duration-200 bg-slate-50 border-slate-50 backdrop-blur-lg group-hover:-translate-x-1 group-hover:-translate-y-1">
                    <Image height={25} src={e.icon} alt="#" />
                    <div className="flex items-center justify-between w-full ">
                      <h2 className="ml-2 font-medium">{e.name}</h2>
                      <Image height={20} src={Arrow} alt="#" />
                    </div>
                  </div>
                </a>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}
