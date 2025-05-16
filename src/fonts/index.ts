import {
  Chakra_Petch,
  Inter,
  Kanit,
  Rowdies,
  Teko,
  Gupter,
  Aladin,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--kanit",
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--chakra_petch",
});

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--rowdies",
});

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--teko",
});

const gupter = Gupter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--gupter",
});

const aladin = Aladin({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--aladin",
});

export const fonts = `${inter.variable} ${kanit.variable} ${chakraPetch.variable} ${rowdies.variable} ${teko.variable} ${gupter.variable} ${aladin.variable}`;
