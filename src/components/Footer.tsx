import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import { useTheme } from "next-themes";

const logos = [
  {
    src: "dfg_logo_schriftzug.svg",
    alt: "DFG",
    url: "https://www.dfg.de/",
  },
  {
    src: "GOE_Logo_Quer_Farbe.svg",
    alt: "GOE",
    url: "https://uni-goettingen.de/",
  },
  {
    src: "SUB_right_horizontal.svg",
    alt: "SUB",
    url: "https://sub.uni-goettingen.de/sub-aktuell/",
  },
];

export const Footer: FC = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  if (isDarkMode === null) {
    return null;
  }

  return (
    <footer
      className="mx-auto w-full items-center border-0 border-t px-4 pb-4 pt-2 text-xs dark:border-stone-800 md:px-8"
      suppressHydrationWarning
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="flex w-full justify-center space-x-6">
          <Link
            href="/contact"
            color="foreground"
            isBlock
            className="text-stone-800 dark:text-white"
          >
            Kontakt
          </Link>
          <Link
            href="/imprint"
            isBlock
            color="foreground"
            className="text-stone-800 dark:text-white"
          >
            Impressum
          </Link>
          <Link
            href="/privacy"
            isBlock
            color="foreground"
            className="text-stone-800 dark:text-white"
          >
            Datenschutzhinweis
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {logos.map(({ src, alt, url }) => (
            <div key={src} className="flex justify-center">
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src={`/images/${isDarkMode ? "dark" : "light"}/${src}`}
                  alt={alt}
                  width={300}
                  height={200}
                  priority
                  className="rounded-lg"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
