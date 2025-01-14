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
  return (
    <Element
      name="Our Product"
      className="relative w-full bg-gradient-to-b pb-[80px] pt-[80px]"
    >
      {/* Primary Product List Section */}
      <div className="container flex items-center mx-auto">
        <div className="flex-[0_0_300px] h-[100px] ">
          <h1 className="lg:text-[40px]">Our Best</h1>
          <h1 className="lg:text-[40px]">Selling</h1>
        </div>
        {!isCarsEmpty ? (
          <div className=" p-8 relative w-[100vh]">
            {/* shadow */}
            <div
              className={clsx(
                "relative before:absolute before:bg-gradient-to-r before:left-0 before:top-0 before:h-[100%] before:w-[30px] before:from-[rgb(14,15,17)] before:to-transparent before:content-[''] before:pointer-events-none before:z-30",
                "after:absolute after:bg-gradient-to-l after:right-0 after:top-0 after:h-[100%] after:w-[30px] after:from-[rgb(14,15,17)] after:to-transparent after:content-[''] after:pointer-events-none after:z-30"
              )}
            >
              <div
                className={clsx(
                  "flex overflow-x-auto space-x-4 py-4 scrollable-container "
                )}
              >
                {listCars?.slice(0, 5).map((elm) => (
                  <div
                    key={elm.merk}
                    className="bg-[rgb(26,27,30)] flex-none w-[300px] rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[rgb(26,27,30)] p-4 relative overflow-hidden"
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
                    <p className="text-[rgb(160,166,172)] text-sm">
                      {elm.description ||
                        "High-performance and reliable car for all occasions."}
                    </p>
                    {/* </div> */}
                  </div>
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
      <div className="bg-[rgb(16,16,16)] w-full bg-gradient-to-br from-[rgb(38,74,60)] to-[rgb(77,128,108)]">
        <div className="container mx-auto p-8 ">
          <h3 className="text-center text-[36px] font-semibold text-white mb-8 tracking-wide">
            Our Popular Cars
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {listCars?.map((elm) => (
              <div
                key={elm.merk}
                className="bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <div className="relative w-full h-[200px] mb-4">
                  <Image
                    alt={elm.merk}
                    width={300}
                    height={200}
                    src={elm.linkImage}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {elm.merk}
                </h4>
                <p className="text-gray-600 text-sm">
                  {elm.description ||
                    "High-performance and reliable car for all occasions."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="container mx-auto mt-16 p-8 bg-gradient-to-r from-white via-gray-100 to-gray-200 rounded-3xl shadow-lg">
        <h3 className="text-center text-[36px] font-semibold text-gray-800 mb-8 tracking-wide">
          Why Choose Our Products?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
