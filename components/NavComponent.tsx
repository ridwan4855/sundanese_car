import React from "react";
import Image from "next/image";
import { NavCompProps } from "@/types";

export const NavComponent = ({
  title,
  isIcon,
  primaryIcon,
  secondIconExist,
  secondIcon,
  styles,
  handleClick,
  isScroll,
}: NavCompProps) => {
  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-around cursor-pointer ${styles}`}
    >
      {secondIconExist && (
        <Image
          alt={title || ""}
          width={20}
          height={20}
          src={secondIcon || ""}
          className="object-contain imgClass"
        />
      )}
      {isIcon ? (
        <Image
          alt={title || ""}
          width={isScroll ? 50 : 70}
          height={isScroll ? 50 : 50}
          // width={40}
          // height={40}
          src={primaryIcon || ""}
          className="object-contain"
        />
      ) : (
        <div className="">{title}</div>
      )}
    </div>
  );
};
