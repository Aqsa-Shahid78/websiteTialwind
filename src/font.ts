import { Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"], // Subsets for the font
  weight: ["100","300","400", "500", "700"], // Specify valid weights
  style: ["normal", "italic"],   // Optional: Include styles if needed
  display: "swap",               // Ensures better performance
});
