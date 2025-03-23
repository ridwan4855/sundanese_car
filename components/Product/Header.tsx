import { HeadProps } from "@/types";
import clsx from "clsx";
import React, { useState } from "react";

export interface HeaderProps {
  headProps: HeadProps;
}

export const Header = ({ headProps }: HeaderProps) => {
  return (
    <div className={clsx("space-y-3 flex", headProps.styleTop)}>
      <div className="flex flex-col justify-center">
        <div className="flex items-center space-x-2">
          <div className="rounded-full w-1.5 h-1.5 bg-white"></div>
          <div className="">{headProps.topPart}</div>
        </div>

        <p className={clsx(headProps.styleBot)}>{headProps.botPart}</p>
      </div>
    </div>
  );
};
