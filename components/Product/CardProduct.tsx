import Image from "next/image";
import React, { useState } from "react";
import clsx from "clsx";
import { CardProductProps } from "@/types";

export interface Product {
  carProduct: CardProductProps;
}

export const CardProduct = ({ carProduct }: Product) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={clsx(
        "relative w-full md:w-full overflow-hidden",
        carProduct.style
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="rounded-3xl aspect-[4/3]  text-white relative overflow-hidden">
        <Image
          src={carProduct.source}
          alt="roll royce Yellow"
          fill
          className={clsx(
            "object-cover absolute top-0 left-0 hover:-translate-y-1 transition-transform duration-300"
          )}
        ></Image>

        <div></div>
      </div>
      <div
        className={clsx(
          "absolute right-0 rounded-bl-3xl bg-[rgb(14,15,17)] aspect-[-1/1] transition-all duration-300",
          "flex justify-center items-start",
          isHovered && "top-0 p-2",
          !isHovered && "-top-12 p-0"
        )}
      >
        {/* untuk bagian atas */}
        <svg
          id="Layer_1"
          className={clsx(
            "w-10 h-10 lg:w-10 | lg:h-10 text-[rgb(14,15,17)] fill-current absolute -top-0.5 left-px transform-gpu -translate-x-full dark:text-grayDark-600"
          )}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          viewBox={clsx(isHovered && "0 0 100 100")}
          xmlSpace="preserve"
        >
          <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
        </svg>

        {/* untuk bagian samping */}
        <svg
          id="Layer_1"
          className="w-10 h-10 | lg:w-10 lg:h-10 text-[rgb(14,15,17)] fill-current absolute bottom-px -right-0.5 transform-gpu translate-y-full dark:text-grayDark-600"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          viewBox="0 0 100 100"
          xmlSpace="preserve"
        >
          <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
        </svg>

        {carProduct.typeCard.length > 0 ? (
          <div className="flex space-x-2 m-1">
            {carProduct.typeCard.map((data, index) => (
              <div
                key={index}
                className="rounded-full bg-[rgb(53,53,53)] text-white p-2 font-[10px]"
              >
                {data}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex space-x-1 m-1">
            <div className="rounded-full bg-slate-500 text-white p-2 font-[10px]">
              Robust
            </div>
            <div className="rounded-full bg-slate-500 text-white p-2 font-[10px]">
              Elegant
            </div>
            <div className="rounded-full bg-slate-500 text-white p-2 font-[10px]">
              Awesome
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
