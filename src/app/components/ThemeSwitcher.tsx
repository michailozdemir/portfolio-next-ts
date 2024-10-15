"use client";

import { useTheme } from "next-themes";
import { Button } from "./index";
import { Moon, Sun1 } from "iconsax-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      icon={
        <>
          <Sun1 className="hidden dark:block dark:scale-100" />
          <Moon className="dark:hidden dark:scale-0" />
        </>
      }
    />
  );
};

export default ThemeSwitcher;
