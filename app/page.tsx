import { FooterPart } from "@/components/FooterPart";
import HeaderPart from "@/components/HeaderPart";
import { MainPart } from "@/components/MainPart";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeaderPart />
      <MainPart />
      <FooterPart />
    </>
  );
}
