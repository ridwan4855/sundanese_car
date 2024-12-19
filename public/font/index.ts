import { Roboto_Mono, Playfair_Display } from "next/font/google";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["100"],
  style: ["normal", "italic"],
  display: "swap",
});

export const play_fair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
