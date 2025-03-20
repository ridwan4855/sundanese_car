"use client";

import React, { useState } from "react";
import { Element } from "react-scroll";
import { listCars, whyUsList } from "@/utils";
import Image from "next/image";
import { play_fair } from "@/public/font";
import clsx from "clsx";
import { CardProduct } from "./Product/CardProduct";
import { Header } from "./Product/Header";

export const Products = () => {
  const isCarsEmpty =
    !Array.isArray(listCars) || listCars.length < 1 || !listCars;

  const [isHovered, setIsHovered] = useState(false);

  const WhyComponent = ({
    style,
    type,
    description,
    link,
  }: {
    style: string;
    type: string;
    description: string;
    link: string;
  }) => (
    // <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow">
    //   <div
    //     className={`w-16 h-16  flex items-center justify-center rounded-full mb-4 ${style}`}
    //   >
    //     <i className="fas fa-tachometer-alt text-2xl"></i>
    //   </div>
    //   <h4 className="text-lg font-semibold text-gray-800 mb-2">
    //     {type}
    //     {/* High Performance */}
    //   </h4>
    //   <p className="text-gray-600 text-sm text-center">
    //     {description}
    //     {/* Our cars are built for speed, reliability, and smooth rides. */}
    //   </p>
    // </div>

    <div className="relative bg-[rgb(241,210,151)] shadow-2xl p-6 flex flex-col  hover:shadow-2xl transition-shadow h-[300px] z-10 border border-[rgb(235,203,144)]">
      <div className="relative z-10">
        <h4 className="text-2xl text-gray-800 mb-2 font-bold">
          {type}
          {/* High Performance */}
        </h4>

        <div className="w-full flex justify-center">
          <div className="relative w-[150px] h-[150px]">
            <Image
              alt={type}
              // width={130}
              // height={130}
              src={link}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p className="text-gray-600 text-sm text-center">
          {description}
          {/* Our cars are built for speed, reliability, and smooth rides. */}
        </p>
      </div>
    </div>
  );

  const ProductComponent = ({
    elm,
    style,
    font,
  }: {
    elm: {
      merk: string;
      year: string;
      unit: string;
      countSell: string;
      from: string;
      linkImage: string;
      description: string;
      varianImages: {
        color: string;
        hex: string;
        linkImage: string;
        isActive: boolean;
      }[];
    };
    style: string;
    font?: string;
  }) => (
    <div
      className={clsx(
        `${style}`,
        "flex-none rounded-xl shadow-md hover:shadow-xl transition-shadow  p-4 relative overflow-hidden"
      )}
    >
      <div className="relative w-full h-[200px]">
        <Image
          alt={elm.merk}
          width={300}
          height={200}
          src={elm.linkImage}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      {/* <div className="flex flex-col justify-between items-center mt-4"> */}
      <div className=" font-medium text-lg">{elm.merk}</div>
      <p className={clsx("text-sm", `${font}`)}>
        {elm.description ||
          "High-performance and reliable car for all occasions."}
      </p>
      <div className="flex justify-end flex-col">
        <div className="flex justify-end bottom-0 right-4 space-x-3">
          {elm.varianImages.map((eachColor, index) => (
            <div
              key={index}
              className={clsx(
                `rounded-3xl w-[30px] h-[30px] cursor-pointer border border-black`
              )}
              style={{ backgroundColor: eachColor.hex }}
              onClick={() => {
                console.log(elm);
                elm.linkImage = eachColor.linkImage;
                console.log(elm);
              }}
            ></div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  );

  return (
    <Element name="Our Product" className="relative w-full   pb-[80px] ">
      {/* Primary Product List Section */}
      {/* <div className="w-full bg-[rgb(29,30,34)]"> */}
      <div className="container flex items-center mx-auto max-sm:flex-col ">
        <div className="flex-[0_0_20%] h-[100px]  max-sm:text-[30px] sm:text-[30px] md:text-[30px] lg:text-[40px] font-bold">
          <h1 className="">Our Best</h1>
          <h1 className="italic">Selling</h1>
        </div>
        {!isCarsEmpty ? (
          <div className=" p-8 relative w-[80%] max-sm:w-[100%]">
            {/* shadow */}
            <div
              className={clsx(
                "relative before:absolute before:bg-gradient-to-r before:left-0 before:top-0 before:h-[100%] before:w-[20px] before:from-[rgb(14,15,17)] before:to-transparent before:content-[''] before:pointer-events-none before:z-30",
                "after:absolute after:bg-gradient-to-l after:right-0 after:top-0 after:h-[100%] after:w-[20px] after:from-[rgb(14,15,17)] after:to-transparent after:content-[''] after:pointer-events-none after:z-30"
              )}
            >
              <div
                className={clsx(
                  "flex overflow-x-auto space-x-4 py-4 scrollable-container "
                )}
              >
                {listCars?.slice(0, 5).map((elm) => (
                  <ProductComponent
                    elm={elm}
                    key={elm.merk}
                    style="bg-[rgb(129,146,146)] w-[300px] max-sm:w-[250px]"
                    font="text-white"
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="container text-center text-gray-700 text-2xl py-20">
            No Data Found
          </div>
        )}
      </div>
      {/* </div> */}

      {/* Additional Product List Without Overflow Hidden */}
      <div className="relative  flex flex-wrap container | lg:space-x-14 | md:space-x-8 | max-sm:space-y-10 | sm:space-x-6 mb-24">
        <div className="relative w-[47%] | max-sm:w-full">
          <Header headProps={{topPart:"Our Work",botPart:"Take a Look At Our Project",styleTop:"hidden max-sm:block justify-center",styleBot:"text-5xl max-w-sm | xl:max-w-md | 4xl:max-w-lg"}}/>
          <CardProduct
            carProduct={{
              source: "/icon/product/roll-royce.jpg",
              typeCard: ["Awesome", "Elegant", "Branding"],
              style:"",
              merk:"Red Roll Royce",
              detail:"Red Roll Royce Giving You Brave Vibes"
            }}
          />

          <CardProduct
            carProduct={{
              source: "/icon/product/tanduk.jpg",
              typeCard: ["Exclusive"],
              merk:"Roll Royce Logo",
              detail:"Known as The Exclusive One"
            }}
          />
          <Header headProps={{topPart:"Our Work",botPart:"We Do The Best On Every Detail",styleTop:"block max-sm:hidden justify-center mt-28",styleBot:"text-5xl max-w-sm | xl:max-w-md | 4xl:max-w-lg"}}/>
        </div>
        <div className="relative w-[47%] | max-sm:w-full">
          <Header headProps={{topPart:"Our Work",botPart:"Take a Look At Our Project",styleTop:"block max-sm:hidden justify-center",styleBot:"text-5xl max-w-sm | xl:max-w-md | 4xl:max-w-lg"}}/>
          <CardProduct
            carProduct={{
              source: "/icon/product/roll-royce-ceper.jpg",
              typeCard: ["Elegant", "Branding"],
              merk:"Old Roll Royce",
              detail:"The Old Roll Royce is Still One Of The Best"
            }}
          />

          <CardProduct
            carProduct={{
              source: "/icon/product/roll-royce-white.jpg",
              typeCard: ["Elegant", "Clean Look"],
              merk:"Roll Royce Bodas",
              detail:"White Roll Royce clean Look"
            }}
          />

          <Header headProps={{topPart:"Our Work",botPart:"We Do The Best On Every Detail",styleTop:"hidden max-sm:block justify-center",styleBot:"text-5xl max-w-sm | xl:max-w-md | 4xl:max-w-lg"}}/>
        </div>
      </div>

      <div className="mx-auto bg-gradient-to-r from-white via-gray-100 to-gray-200 shadow-lg">
        {/* <h3 className="text-center text-[36px] font-semibold text-gray-800 mb-8 tracking-wide">
          Why Choose Our Products?
        </h3> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
          {whyUsList.map((obj) => (
            <WhyComponent
              key={obj.id}
              style={obj.style}
              type={obj.title}
              description={obj.description}
              link={obj.link}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};
