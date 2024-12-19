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
