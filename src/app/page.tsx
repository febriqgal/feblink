import CardC from "@/components/card";
import FooterC from "@/components/footer";
import ModalC from "@/components/modal";
import { Metadata } from "next";
import Image from "next/image";
import Febriqgal from "../../public/febriqgal.jpg";

export const metadata: Metadata = {
  title: "Links - Febriqgal Purnama",
  description: "Finds everything created with one simple link",
};

export default function Home() {
  return (
    <div className="flex-col items-center justify-center min-h-screen py-8 space-y-4 text-center lg:w-[500px] lg:mx-auto">
      <div>
        <Image
          loading="lazy"
          className="mx-auto rounded-full shadow-2xl border-3"
          height={150}
          src={Febriqgal}
          alt="Febriqgal"
        />
        <h1 className="mt-4 text-xl font-bold">Febriqgal Purnama</h1>
        <h1 className="font-light">Software Engineer</h1>
      </div>
      <div className="pb-4">
        <ModalC />
      </div>
      <CardC />
      <FooterC />
    </div>
  );
}
