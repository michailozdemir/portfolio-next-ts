import "./globals.css";
import type { Metadata } from "next";
import classNames from "./helpers/classNames";
import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "michailozdemir.dev | Front End Developer",
  description:
    "Michail Ozdeir. Front End Developer from Ukraine, based in Warsaw. Interested in developing useful products, crypto & BMW.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={classNames(
          albertSans.className,
          "text-main bg-bg-light-second dark:bg-bg-dark dark:text-text-light dark:bg-body-gradient text-text-dark"
        )}
      >
        {children}
      </body>
    </html>
  );
}
