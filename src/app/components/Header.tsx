"use client";

import React from "react";
import Link from "next/link";
import { ThemeSwitcher } from "./index";
import { IconContext } from "react-icons";
import { FaTelegramPlane, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between pb-16 md:pb-24 pt-10 gap-14">
      <Link className="text-xl font-bold hover:text-primary duration-150" href="/">
        michailozdemir
      </Link>
      <IconContext.Provider value={{ size: "1.25em", className: "hover:text-primary duration-150" }}>
        <div className="flex items-center gap-7 ml-auto">
          <Link href="https://t.me/michail_ozdemir" target="_blank">
            <FaTelegramPlane />
          </Link>
          <Link href="https://linkedin.com/in/michailozdemir/" target="_blank">
            <FaLinkedinIn />
          </Link>
          <Link href="https://github.com/michailozdemir" target="_blank">
            <FaGithub />
          </Link>
        </div>
      </IconContext.Provider>
      <span className="max-sm:fixed max-sm:bottom-5 max-sm:right-5 max-sm:z-10">
        <ThemeSwitcher />
      </span>
    </header>
  );
};

export default Header;
