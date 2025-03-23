import { MouseEventHandler } from "react";

export interface NavCompProps {
  title?: string;
  isIcon?: boolean;
  primaryIcon?: string;
  secondIconExist?: boolean;
  secondIcon?: string;
  styles?: string;
  handleClick?: MouseEventHandler<HTMLElement>;
  isScroll?: boolean;
}

export interface Login {
  username: string;
  password: string;
}

export interface CardProductProps {
  source: string;
  typeCard?: string[];
  style?: string;
  merk: string;
  detail: string;
  styleTop?: string;
  styleBot?: string;
}

export interface HeadProps {
  topPart: string;
  botPart?: string;
  styleElm?: string;
  styleTop?: string;
  styleBot?: string;
}
