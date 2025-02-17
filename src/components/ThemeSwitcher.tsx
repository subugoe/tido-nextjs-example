"use client";

import { FC, useEffect, useState } from "react";
import { Button } from "@nextui-org/button";

import { SunIcon as SunIconOutline } from "@heroicons/react/24/outline";
import { MoonIcon as MoonIconSolid } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

export const ThemeSwitcher: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <Button
      isIconOnly
      disableRipple
      className="border-none bg-transparent p-0 hover:bg-transparent focus:ring-0 data-[hover=true]:bg-transparent"
      onPress={() => setTheme(isDarkMode ? "light" : "dark")}
    >
      {isDarkMode ? (
        <SunIconOutline className="size-6 text-yellow-500" />
      ) : (
        <MoonIconSolid className="size-6 text-gray-900" />
      )}
    </Button>
  );
};
