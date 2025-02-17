"use client";

import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";

import * as config from "@/config/tido-config.json";
import "tido/dist/tido.js";
import "tido/dist/tido.css";

const EditionContent: FC = () => {
  const { theme } = useTheme();
  const [tido, setTido] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newTido = new window.Tido(config);
      setTido(newTido);
    }
  }, []);

  useEffect(() => {
    if (tido) {
      // @ts-expect-error: Suppressing type error due to missing type definition for setTheme
      tido.setTheme(theme);
    }
  }, [theme, tido]);

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-hidden">
        <div id="app" className="size-full"></div>
      </div>
    </div>
  );
};

export default EditionContent;
