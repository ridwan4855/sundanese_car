"use client";

import React from "react";
import { Link as NavLink } from "react-scroll";
import Image from "next/image";

export const FooterPart = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              We are a team of passionate individuals who strive to deliver the
              best products with exceptional customer service. Our goal is to
              enhance your experience with our products.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  className="text-gray-400 hover:text-teal-400 cursor-pointer"
                  to={"Home"}
                  offset={-100}
                  spy
                  smooth
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-gray-400 hover:text-teal-400 cursor-pointer"
                  to={"About Us"}
                  offset={-100}
                  spy
                  smooth
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-gray-400 hover:text-teal-400 cursor-pointer"
                  to={"Our Product"}
                  offset={-100}
                  spy
                  smooth
                >
                  Our Product
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <Image
              width={200}
              height={200}
              alt="Logo"
              className="max-lg:w-full"
              src="/icon/us.png"
            />
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sundanese Car. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
