"use client";

import { Element } from "react-scroll";
import { listCars, whyUsList } from "@/utils";
import Image from "next/image";
import clsx from "clsx";
import { CardProduct } from "./Product/CardProduct";
import { Header } from "./Product/Header";

export const Products = () => {
  const isCarsEmpty =
    !Array.isArray(listCars) || listCars.length < 1 || !listCars;

  const WhyComponent = ({
    type,
    description,
    link,
    position,
  }: {
    style?: string;
    type: string;
    description: string;
    link: string;
    position: number;
  }) => (
    <div
      className="relative bg-[rgba(255,255,255,0)]  p-6 flex flex-col  h-[300px] z-10  rounded-3xl item transition-all duration-[0.5s]"
      style={{ "--position": position } as React.CSSProperties}
    >
      <div className="relative z-10">
        {/* <h4 className="text-2xl text-white mb-2 font-bold">
          {type}
        </h4> */}

        <div className="w-full flex justify-center">
          <div className="relative w-[150px] h-[150px]">
            <Image
              alt={type}
              src={link}
              fill
              className="object-cover border border-white bg-white rounded-3xl hover:shadow-white"
            />
          </div>
        </div>
        <h4 className="text-2xl text-white mb-2 font-bold text-center">
          {type}
          {/* High Performance */}
        </h4>

        <p className="text-white text-sm text-center">
          {description ||
            "Our cars are built for speed, reliability, and smooth rides."}
        </p>
      </div>
    </div>
  );

  return (
    <Element name="Our Product" className="relative w-full   pb-[80px] ">
      <div className="container flex items-center mx-auto max-sm:flex-col ">
        <Header
          headProps={{
            topPart: "Our Best",
            botPart: "Selling",
            styleTop:
              "max-sm:block justify-center flex-[0_0_20%] h-[100px]  mt-12",
            styleBot: "text-5xl max-w-sm | xl:max-w-md | 4xl:max-w-lg",
          }}
        />
        {!isCarsEmpty ? (
          <div className=" relative w-[80%] max-sm:w-[100%]">
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
                {listCars?.slice(0, 5).map((elm, index) => (
                  <CardProduct
                    key={index}
                    carProduct={{
                      source: elm.linkImage,
                      typeCard: ["Best Seller"],
                      merk: elm.merk,
                      detail: elm.description,
                      style: "w-[300px] max-sm:w-[250px] flex-none rounded-3xl",
                      styleTop: "m-4 text-4xl max-sm:text-3xl",
                      styleBot: "text-lg max-sm:text-sm",
                    }}
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
          <Header
            headProps={{
              topPart: "Our Work",
              botPart: "Take a Look At Our Project",
              styleTop: "hidden max-sm:block justify-center mt-10",
              styleBot: "text-5xl max-w-sm | xl:max-w-md | 4xl:max-w-lg",
            }}
          />
          <CardProduct
            carProduct={{
              source: "/icon/product/roll-royce.jpg",
              typeCard: ["Awesome", "Elegant", "Branding"],
              style: "w-full md:w-full",
              merk: "Red Roll Royce",
              detail: "Red Roll Royce Giving You Brave Vibes",
              styleTop: "text-md justify-start mt-5 mb-10",
              styleBot: "text-4xl",
            }}
          />

          <CardProduct
            carProduct={{
              source: "/icon/product/tanduk.jpg",
              typeCard: ["Exclusive"],
              merk: "Roll Royce Logo",
              style: "w-full md:w-full",
              detail: "Known as The Exclusive One",
              styleTop: "text-md justify-start mt-5 mb-10",
              styleBot: "text-4xl",
            }}
          />
          <Header
            headProps={{
              topPart: "Our Work",
              botPart: "We Do The Best On Every Detail",
              styleTop: "block max-sm:hidden justify-center mt-28",
              styleBot: "text-5xl max-w-sm | xl:max-w-md | 4xl:max-w-lg",
            }}
          />
        </div>
        <div className="relative w-[47%] | max-sm:w-full">
          <Header
            headProps={{
              topPart: "Our Work",
              botPart: "Take a Look At Our Project",
              styleTop: "block max-sm:hidden justify-center mt-10",
              styleBot: "text-5xl max-w-sm | xl:max-w-md | 4xl:max-w-lg",
            }}
          />
          <CardProduct
            carProduct={{
              source: "/icon/product/roll-royce-ceper.jpg",
              typeCard: ["Elegant", "Branding"],
              merk: "Old Roll Royce",
              style: "w-full md:w-full",
              detail: "The Old Roll Royce is Still One Of The Best",
              styleTop: "text-md justify-start mt-10 mb-10",
              styleBot: "text-4xl",
            }}
          />

          <CardProduct
            carProduct={{
              source: "/icon/product/roll-royce-white.jpg",
              typeCard: ["Elegant", "Clean Look"],
              merk: "White Roll Royce",
              style: "w-full md:w-full",
              detail: "White Roll Royce clean Look",
              styleTop: "text-md justify-start mt-10 mb-10",
              styleBot: "text-4xl",
            }}
          />
        </div>
      </div>

      <div
        className="slider w-full overflow-hidden"
        style={
          {
            "--width": "400px",
            "--height": "300px",
            "--quantity": whyUsList.length,
          } as React.CSSProperties
        }
      >
        <div className="flex list relative">
          {whyUsList.map((obj, index) => (
            <WhyComponent
              key={obj.id}
              style={obj.style}
              type={obj.title}
              description={obj.description}
              link={obj.link}
              position={index + 1}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};
