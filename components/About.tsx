"use client";
import React from "react";
import { Element } from "react-scroll";
import { play_fair } from "@/public/font";
import Image from "next/image";

export const About = () => {
  return (
    <Element
      name="About Us"
      className="relative bg-gradient-to-b from-[#ffffff] via-[#f0f4f8] to-[#e0e0e0] pt-[100px] pb-[100px] overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#2ef2ff] to-[#2d9bf0] opacity-30 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#f79d65] to-[#f64f59] opacity-40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e8e8e8] to-transparent opacity-20"></div>

      {/* Title */}
      <h1
        className={`text-center text-[50px] max-lg:text-[30px] text-[rgb(16,16,16)] tracking-widest font-extrabold ${play_fair.className} mb-[40px]`}
      >
        ABOUT US
      </h1>

      {/* Section 1 */}
      <div className="container mb-[60px] relative">
        <div className="flex items-center mt-[20px] max-md:flex-col relative gap-8">
          {/* Left Content */}
          <div className="relative z-30 flex-[0_0_540px] max-xl:flex-[0_0_280px] max-lg:flex-[0_0_256px] max-md:flex-[0_0_100px] text-[rgb(16,16,16)]">
            <h2 className="text-[60px] max-lg:text-[30px] tracking-wide font-extrabold leading-snug">
              WE ONLY SERVE THE BEST{" "}
              <span className="underline decoration-4 decoration-[#2d9bf0] underline-offset-4">
                PRODUCT
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-lg:text-sm">
              Experience unparalleled quality with our top-notch offerings,
              built to exceed your expectations.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative max-md:w-full">
            <div className="w-[1100px] max-lg:w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <Image
                alt="side car"
                src="/icon/right-car.jpg"
                className="object-cover hover:scale-105 transition-transform duration-500"
                width={1100}
                height={655}
              />
            </div>
          </div>

          {/* Decorative Icon */}
          <div className="absolute -top-[20px] -left-[40px] w-[100px] h-[100px] bg-gradient-to-br from-[#2ef2ff] to-[#2d9bf0] opacity-50 rounded-full blur-lg"></div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container relative">
        <div className="flex flex-row-reverse items-center max-md:flex-col relative gap-8">
          {/* Right Content */}
          <div className="relative z-30 flex-[0_0_540px] max-xl:flex-[0_0_280px] max-lg:flex-[0_0_256px] max-md:flex-[0_0_100px] text-[rgb(16,16,16)]">
            <h2 className="text-[60px] max-lg:text-[30px] tracking-wide font-extrabold leading-snug">
              BUILD WITH THE NEWEST{" "}
              <span className="underline decoration-4 decoration-[#f64f59] underline-offset-4">
                TECHNOLOGY
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-lg:text-sm">
              Stay ahead with cutting-edge solutions designed to innovate and
              inspire.
            </p>
          </div>

          {/* Left Image */}
          <div className="relative max-md:w-full">
            <div className="w-[1100px] max-lg:w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <Image
                alt="side car"
                src="/icon/left-car.jpg"
                className="object-cover hover:scale-105 transition-transform duration-500"
                width={1100}
                height={655}
              />
            </div>
          </div>

          {/* Decorative Icon */}
          <div className="absolute bottom-[-50px] right-[20px] w-[120px] h-[120px] bg-gradient-to-tl from-[#f79d65] to-[#f64f59] opacity-50 rounded-full blur-lg"></div>
        </div>
      </div>
    </Element>
  );
};

// export default About;
