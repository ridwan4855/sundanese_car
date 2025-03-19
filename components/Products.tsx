"use client";

import React, { useState } from "react";
import { Element } from "react-scroll";
import { listCars, whyUsList } from "@/utils";
import Image from "next/image";
import { play_fair } from "@/public/font";
import clsx from "clsx";

export const Products = () => {
  const isCarsEmpty =
    !Array.isArray(listCars) || listCars.length < 1 || !listCars;

  const [isHovered, setIsHovered] = useState(false);

  const WhyComponent = ({
    style,
    type,
    description,
    link
  }: {
    style: string;
    type: string;
    description: string;
    link:string;
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
        "flex-none rounded-xl shadow-md hover:shadow-xl transition-shadow  p-4 relative overflow-hidden"
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
      className="relative w-full   pb-[80px] "
    >
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
                  "relative before:absolute before:bg-gradient-to-r before:left-0 before:top-0 before:h-[100%] before:w-[20px] before:from-[rgb(29,30,34)] before:to-transparent before:content-[''] before:pointer-events-none before:z-30",
                  "after:absolute after:bg-gradient-to-l after:right-0 after:top-0 after:h-[100%] after:w-[20px] after:from-[rgb(29,30,34)] after:to-transparent after:content-[''] after:pointer-events-none after:z-30",
                  
                )}
              >
                <div
                  className={clsx(
                    "flex overflow-x-auto space-x-4 py-4 scrollable-container "
                  )}
                >
                  {listCars?.slice(0, 5).map((elm) => (
                      <ProductComponent elm={elm} key={elm.merk} style="bg-[rgb(129,146,146)] w-[300px] max-sm:w-[250px]" font="text-white"/>
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
      <div className="relative  flex flex-wrap container ">
        {/* <div className="container mx-auto p-8 relative z-10">
          <h3 className="text-center text-[36px] max-sm:text-[30px] font-semibold text-white mb-8 tracking-wide">
            Our Popular Cars
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:place-content-center">
            {listCars?.map((elm) => (
              <ProductComponent elm={elm} key={elm.merk} style="bg-white max-sm:w-[300px]" font="text-black "/>
            ))}
          </div>
        </div> */}

        <div className="relative w-full md:w-[50%]" onMouseEnter={ ()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
          <div className="rounded-xl aspect-[4/3] bg-cover bg-center text-white relative w-full">
            <Image src="/icon/product/roll-royce.jpg" alt="roll royce Yellow" fill className="object-cover absolute top-0 left-0 rounded-xl"></Image>

            <div>
            
            </div>
          </div>
          <div className={clsx("absolute top-0 right-0 rounded-bl-3xl bg-[rgb(14,15,17)] w-[200px] aspect-[-1/1] transition-all duration-300",isHovered && "h-[50px]")}>
            <svg id="Layer_1" className={clsx("w-10 h-10 | text-[rgb(14,15,17)] fill-current absolute -top-0.5 left-px transform-gpu -translate-x-full dark:text-grayDark-600",isHovered && "lg:w-10 lg:h-10")} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 100 100" xmlSpace="preserve"><path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path></svg>
            <svg id="Layer_1" className="w-10 h-10 | lg:w-10 lg:h-10 text-[rgb(14,15,17)] fill-current absolute bottom-px -right-0.5 transform-gpu translate-y-full dark:text-grayDark-600" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 100 100" xmlSpace="preserve"><path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path></svg>
          </div>
        </div>
        <div className="relative w-full md:w-[50%]">
          <div className="rounded-xl aspect-[4/3] bg-cover bg-center text-white relative w-full ">
          <Image src="/icon/product/roll-royce-ceper.jpg" alt="roll royce Yellow" fill className="object-cover absolute top-0 left-0"></Image>
          </div>
        </div>
        
        {/* <div className="absolute top-0 left-0 h-[100%] w-full bg-[rgba(53,53,53,0.8)] bg-gradient-to-b from-[rgba(29,30,34,0.7)] to-transparent"></div> */}
      </div>

      {/* <div className="relative w-[500px] h-[200px] 
      
      [clip-path:polygon(0%_0%,100%_0%,100%_70%,59%_70%,59%_100%,0%_100%)]
      bg-red-600
      rounded-3xl
      "></div> */}

      {/* Why Choose Section */}
      {/* <div className="container mx-auto mt-16 p-8 bg-gradient-to-r from-white via-gray-100 to-gray-200 rounded-3xl shadow-lg">
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
      </div> */}

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
