"use client";

import React from "react";
import { Element } from "react-scroll";
import { listCars, whyUsList } from "@/utils";
import Image from "next/image";
import { play_fair } from "@/public/font";

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
      className="relative w-full bg-gradient-to-b from-gray-100 via-gray-200 to-white shadow-lg pb-[80px]"
    >
      {/* Header Section */}

      <div className="container relative h-[80px] flex justify-center items-center">
        <div className="absolute -top-[60%] right-0 bg-gray-100 rounded-3xl px-8 py-4 z-20">
          <h2
            className={`text-center text-[45px] max-lg:text-[36px] font-bold tracking-widest text-[rgb(36,36,36)] ${play_fair.className}`}
          >
            OUR PRODUCT
          </h2>
        </div>
      </div>

      {/* Primary Product List Section */}
      {!isCarsEmpty ? (
        <div className="container mx-auto p-8">
          <div className="flex overflow-x-auto space-x-4 py-4 scrollable-container">
            {listCars?.slice(0, 5).map((elm) => (
              <div
                key={elm.merk}
                className="bg-white flex-none w-[300px] rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-300 p-4 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 bg-gradient-to-r  from-yellow-300 to-red-500 text-white px-2 py-1 text-xs font-semibold rounded-br-lg">
                  Best Seller
                </div>
                <div className="relative w-full h-[200px]">
                  <Image
                    alt={elm.merk}
                    width={300}
                    height={200}
                    src={elm.linkImage}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-gray-800 font-medium text-lg">
                    {elm.merk}
                  </div>
                  <div className="p-2 bg-red-300 rounded-lg text-white shadow-md hover:bg-red-500 transition">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container text-center text-gray-700 text-2xl py-20">
          No Data Found
        </div>
      )}

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
