"use client";

import React, { useState, useEffect } from "react";

import clsx from "clsx";
import { Element, animateScroll as scroll } from "react-scroll";
import { roboto_mono, play_fair } from "@/public/font";
import { Link as NavLink } from "react-scroll";
export const Home = () => {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowElement(true);
    }, 1000);

    scroll.scrollToTop({
      duration: 1000, // Duration in milliseconds
      smooth: "easeInOutQuad", // Scroll easing (animation type)
    });
  });
  return (
    // <Element name="Home">
    //   <div
    //     className={clsx(
    //       "bg-[url('/icon/roll-royce.jpg')] h-[100vh] bg-center  bg-no-repeat bg-fixed bg-cover flex justify-center opacity-0 transition-opacity",
    //       showElement && "opacity-100"
    //     )}
    //   >
    //     <div className="flex flex-col lg:pt-[18%] max-lg:pt-[250px] text-center space-y-6 w-[80%]">
    //       <p
    //         className={clsx(
    //           `text-[rgb(255,255,255)] hero-section text-[50px] tracking-[12px] container ${play_fair.className}`,
    //           // mobile
    //           "max-lg:text-[30px]"
    //         )}
    //       >
    //         SUNDANESE CAR
    //       </p>
    //       <p
    //         className={clsx(
    //           `text-[rgb(255,255,255)] text-[50px] tracking-[12px] container ${roboto_mono.className}`,
    //           // mobile
    //           "max-lg:text-[20px]"
    //         )}
    //       >
    //         MAKE A GREAT CHOICE WITH US
    //       </p>
    //     </div>
    //   </div>
    // </Element>

    <Element name="Home">
      <div
        className={clsx(
          "relative bg-[url('/icon/roll-royce.jpg')] h-[100vh] bg-center bg-no-repeat bg-fixed bg-cover flex items-center justify-center opacity-0 transition-opacity",
          showElement && "opacity-100"
        )}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Main Content */}
        <div className="relative flex flex-col items-center text-center space-y-6 w-[80%] lg:pt-[18%] max-lg:pt-[250px]">
          {/* Title */}
          <p
            className={clsx(
              `text-white text-[50px] tracking-[12px] ${play_fair.className}`,
              "max-lg:text-[30px] font-extrabold"
            )}
          >
            SUNDANESE CAR
          </p>

          {/* Subtitle */}
          <p
            className={clsx(
              `text-white text-[50px] tracking-[12px] ${roboto_mono.className}`,
              "max-lg:text-[20px] font-light"
            )}
          >
            MAKE A GREAT CHOICE WITH US
          </p>

          {/* Call-to-Action Button */}
          <NavLink
            to="Our Product"
            offset={-100}
            className="cursor-pointer
             mt-6 px-8 py-3 text-lg text-black bg-gradient-to-r from-[#f79d65] to-[#f64f59] hover:from-[#f64f59] hover:to-[#f79d65] font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            Explore Now
          </NavLink>
        </div>

        {/* Decorative Glow Effect */}
        <div className="absolute -bottom-[50px] -left-[50px] w-[300px] h-[300px] bg-gradient-to-br from-[#2ef2ff] to-[#2d9bf0] opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute top-[20px] right-[20px] w-[250px] h-[250px] bg-gradient-to-tl from-[#f79d65] to-[#f64f59] opacity-40 rounded-full blur-3xl"></div>
      </div>
    </Element>
  );
};
