"use client";

import React from "react";
import { Element } from "react-scroll";
import { listCars, whyUsList } from "@/utils";
import Image from "next/image";
import { play_fair } from "@/public/font";
import clsx from "clsx";

export const Products = () => {
  const isCarsEmpty =
    !Array.isArray(listCars) || listCars.length < 1 || !listCars;

  const WhyComponent = ({
    style,
    type,
    description,
  }: {
    style: string;
    type: string;
    description: string;
  }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow">
      <div
        className={`w-16 h-16  flex items-center justify-center rounded-full mb-4 ${style}`}
      >
        <i className="fas fa-tachometer-alt text-2xl"></i>
      </div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">
        {type}
        {/* High Performance */}
      </h4>
      <p className="text-gray-600 text-sm text-center">
        {description}
        {/* Our cars are built for speed, reliability, and smooth rides. */}
      </p>
    </div>
  );

  const ProductComponent = (({elm,style,font}:{elm:{
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
},style:string,font?:string})=>(

    <div
      className={clsx(
        `${style}`,
        "flex-none rounded-xl shadow-md hover:shadow-xl transition-shadow border  p-4 relative overflow-hidden"
      )}>
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
      <p className={clsx("text-sm",`${font}`)}>
        {elm.description ||
          "High-performance and reliable car for all occasions."}
      </p>
      <div className="flex justify-end flex-col">
        <div className="flex justify-end bottom-0 right-4 space-x-3">
          {elm.varianImages.map((eachColor,index) => (
            <div key={index} className={clsx(`rounded-3xl w-[30px] h-[30px] cursor-pointer border border-black`)} style={{backgroundColor : eachColor.hex}}
            onClick={()=>{
              console.log(elm);
              elm.linkImage = eachColor.linkImage;
              console.log(elm);
              }}>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  ));

  return (
    <Element
      name="Our Product"
      className="relative w-full bg-gradient-to-b from-[rgb(29,30,34)] to-[rgb(122,126,126)] bg-[rgb(29,30,34)] pb-[80px] pt-[80px]"
    >
      {/* Primary Product List Section */}
      <div className="container flex items-center mx-auto">
        <div className="flex-[0_0_20%] h-[100px]  max-sm:text-[20px] sm:text-[30px] md:text-[30px] lg:text-[40px] font-bold">
          <h1 className="">Our Best</h1>
          <h1 className="italic">Selling</h1>
        </div>
        {!isCarsEmpty ? (
          <div className=" p-8 relative w-[80%]">
            {/* shadow */}
            <div
              className={clsx(
                "relative before:absolute before:bg-gradient-to-r before:left-0 before:top-0 before:h-[100%] before:w-[10px] before:from-[rgb(29,30,34)] before:to-transparent before:content-[''] before:pointer-events-none before:z-30",
                "after:absolute after:bg-gradient-to-l after:right-0 after:top-0 after:h-[100%] after:w-[10px] after:from-[rgb(29,30,34)] after:to-transparent after:content-[''] after:pointer-events-none after:z-30",
                
              )}
            >
              <div
                className={clsx(
                  "flex overflow-x-auto space-x-4 py-4 scrollable-container "
                )}
              >
                {listCars?.slice(0, 5).map((elm) => (
                    <ProductComponent elm={elm} key={elm.merk} style="bg-[rgb(129,146,146)] w-[300px]" font="text-white"/>
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

      {/* Additional Product List Without Overflow Hidden */}
      <div className="relative bg-[url('/icon/mid-car.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto p-8 relative z-10">
          <h3 className="text-center text-[36px] font-semibold text-white mb-8 tracking-wide">
            Our Popular Cars
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {listCars?.map((elm) => (
              <ProductComponent elm={elm} key={elm.merk} style="bg-white" font="text-black"/>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 h-[100%] w-full bg-[rgba(53,53,53,0.8)] bg-gradient-to-b from-[rgba(29,30,34,0.7)] to-transparent"></div>
      </div>

      {/* Why Choose Section */}
      <div className="container mx-auto mt-16 p-8 bg-gradient-to-r from-white via-gray-100 to-gray-200 rounded-3xl shadow-lg">
        <h3 className="text-center text-[36px] font-semibold text-gray-800 mb-8 tracking-wide">
          Why Choose Our Products?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {whyUsList.map((obj) => (
            <WhyComponent
              key={obj.id}
              style={obj.style}
              type={obj.title}
              description={obj.description}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};
