"use client";

import clsx from "clsx";
import React from "react";
import { Link as NavLink } from "react-scroll";
import { useState, useEffect, useRef } from "react";
import { NavComponent } from "../components/NavComponent";

function HeaderPart() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isLoaded, setisLoaded] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLDivElement | null>(null);

  // this is for when i scroll the element, make change to the header. also when header isOpen scroll disapear
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    setisLoaded(true);

    window.addEventListener("scroll", handleScroll);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // i want a detail explanation about this, this is for when i click outside of the element menu and its child, menu will close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  const NavList = ({ title }: { title: string }) => {
    return (
      <NavLink
        className="cursor-pointer"
        to={title}
        onClick={() => {
          setIsOpen(false);
        }}
        offset={-100}
        spy
        smooth
      >
        {title}
      </NavLink>
    );
  };
  return (
    <header
      className={clsx(
        // styling
        [
          " h-[100px] w-full fixed top-0 left-0 transition-all duration-700 opacity-0 z-50",
        ],
        // condition
        [hasScrolled && "h-[60px] "],
        [isLoaded && "opacity-100"]
      )}
    >
      <div
        className={clsx(
          [
            " h-[100%] w-full relative flex justify-around items-center text-center",
          ],
          // condition
          [
            !hasScrolled
              ? [
                  "after:content-[''] after:absolute after:bottom-0 after:left-0  after:h-[0.5px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent]",
                  "after:w-[80%] after:left-1/2 after:-translate-x-1/2 ",
                ]
              : ["bg-[rgb(16,16,16,0.6)]"],
          ]
        )}
      >
        <div
          className="flex items-center justify-around w-[80px] cursor-pointer z-50"
          onClick={() => {
            setIsOpen((prevState) => !prevState);
          }}
          ref={menuButtonRef}
        >
          {/* icon menu and close */}
          <div className={isOpen ? "" : "space-y-1"}>
            <div
              className={clsx(
                "w-6 h-1 bg-white transition-transform duration-300",
                isOpen ? "rotate-45 translate-y-1" : ""
              )}
            />
            {/* Middle Bar */}
            <div
              className={clsx(
                "w-6 h-1 bg-white transition-opacity duration-300",
                isOpen ? "opacity-0" : ""
              )}
            />
            {/* Bottom Bar */}
            <div
              className={clsx(
                "w-6 h-1 bg-white transition-transform duration-300",
                isOpen ? "-rotate-45 translate-y-[-3px]" : ""
              )}
            />
          </div>
          <NavComponent title="menu" isScroll={hasScrolled} />
        </div>
        <NavComponent
          title="Sundanese Car"
          isIcon={true}
          primaryIcon="/icon/us.png"
          isScroll={hasScrolled}
        />
        <NavComponent
          title="JAKARTA"
          secondIconExist={true}
          secondIcon="/icon/location.png"
          styles="w-[100px]"
          isScroll={hasScrolled}
        />
      </div>
      <div
        className={clsx(
          // mobile
          ["max-lg:w-full"],
          // web
          ["w-[40%]"],
          // condition
          ["opacity-0"],
          [isOpen ? "opacity-100" : "pointer-events-none"],
          // styling
          [
            "bg-[rgb(16,16,16,0.4)] backdrop-blur-md h-[100vh] flex items-center fixed top-0 left-0 transition-opacity duration-300",
            ,
            "z-20",
          ]
        )}
        ref={menuRef}
      >
        <ul className="ml-[30%] space-y-6">
          <li className="">
            <NavList title="Home" />
          </li>
          <li className="">
            <NavList title="About Us" />
          </li>
          <li className="">
            <NavList title="Our Product" />
          </li>
        </ul>
      </div>

      {/* penghalang setelah klik menu */}
      <div
        className={clsx(
          isOpen
            ? "absolute top-0 left-0 h-[100vh] w-full bg-[rgba(16,16,16,0.3)] z-10 transition-all duration-300"
            : ""
        )}
      />
    </header>
  );
}

export default HeaderPart;
