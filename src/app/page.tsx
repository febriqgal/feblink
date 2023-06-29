import CardC from "@/components/card";
import Image from "next/image";
import Febriqgal from "../../public/febriqgal.jpg";
import FooterC from "@/components/footer";
import FpLogo from "../../public/fplogo.svg";
export const metadata = {
  title: "Link - Febriqgal Purnama",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main className="flex-col items-center justify-center min-h-screen py-10 space-y-8 text-center lg:w-[500px] lg:mx-auto">
      <div>
        <Image
          className="mx-auto rounded-full outline-2 outline-white outline-dashed outline-offset-4 "
          height={200}
          src={Febriqgal}
          alt="Febriqgal"
        />
        <h1 className="mt-4 text-xl font-bold">Febriqgal Purnama</h1>
        <h1 className="">Software Engineer</h1>
      </div>
      <CardC />
      <FooterC />
    </main>
  );
}
