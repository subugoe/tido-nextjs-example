import { FC, useMemo } from "react";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { ThemeSwitcher } from "@/components";

interface MenuItem {
  label: string;
  href?: string;
  items?: MenuItem[];
}

interface MenuItems {
  edition: MenuItem;
  materials: MenuItem;
  directories: MenuItem;
  about: MenuItem;
}

const useMenuItems = (): MenuItems => {
  return useMemo(
    () => ({
      edition: {
        label: "Text Edition",
        items: [{ label: "Inhaltsverzeichnis", href: "/edition-content" }],
      },
      materials: {
        label: "Materialien",
        items: [
          { label: "Schemadokumentation", href: "/schema-dokumentation" },
          { label: "Editorische Richtline", href: "/editorische-richtline" },
          { label: "Diplomatische", href: "/diplomatische" },
        ],
      },
      directories: {
        label: "Verzeichnisse",
        items: [
          { label: "Bibliographie", href: "/bibliographie" },
          { label: "Ortsregister", href: "/ortsregister" },
          { label: "Sachregister", href: "/sachregister" },
          { label: "Bibelstellen", href: "/bibelstellen" },
          { label: "Abkürzungsverzeichnis", href: "/abbreviations" },
        ],
      },
      about: {
        label: "Über das Projekt",
        items: [
          { label: "Team", href: "/team" },
          {
            label: "Technische Dokumentation",
            href: "/technical-documentation",
          },
        ],
      },
    }),
    [],
  );
};

const NavbarLink = ({ item }: { item: MenuItem }) => {
  if (!item) return null;

  if (item.href) {
    return (
      <Link className="text-lg text-zinc-900 dark:text-white" href={item.href}>
        {item.label}
      </Link>
    );
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          disableRipple
          className="bg-transparent p-0 text-lg data-[hover=true]:bg-transparent"
          variant="light"
          endContent={
            <ChevronDownIcon className="size-3 justify-end md:size-4" />
          }
        >
          {item.label}
        </Button>
      </DropdownTrigger>
      {item.items && (
        <DropdownMenu>
          {item.items.map((subItem) => (
            <DropdownItem key={subItem.label} textValue={subItem.label}>
              <Link
                className="text-zinc-900 dark:text-white"
                href={subItem.href ?? "/"}
              >
                {subItem.label}
              </Link>
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </Dropdown>
  );
};

const NavbarLinks = ({ menuItems }: { menuItems: MenuItems }) => (
  <div className="flex sm:space-x-2 md:space-x-4">
    {Object.values(menuItems).map((item) => (
      <NavbarLink key={item.label} item={item} />
    ))}
  </div>
);

const SearchBar = () => (
  <Input
    placeholder="Type to search..."
    size="sm"
    startContent={<MagnifyingGlassIcon className="size-5" />}
    type="search"
  />
);

export const Header: FC = () => {
  const menuItems = useMenuItems();

  return (
    <Navbar maxWidth="full" isBordered suppressHydrationWarning>
      <NavbarBrand>
        <Link href="/" className="text-zinc-900 dark:text-white">
          <div className="flex flex-1 items-center justify-center text-lg">
            <span className="hidden font-semibold md:inline">
              Example Digital Edition
            </span>
            <span className="inline justify-between md:hidden">MH</span>
          </div>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden max-w-full items-center justify-center md:flex">
        <NavbarLinks menuItems={menuItems} />

        <SearchBar />

        <ThemeSwitcher />
      </NavbarContent>

      <NavbarContent
        justify="end"
        className="flex flex-1 items-end justify-end md:hidden"
      >
        <Dropdown>
          <DropdownTrigger>
            <NavbarMenuToggle />
          </DropdownTrigger>

          <DropdownMenu>
            {Object.values(menuItems).map((item) => (
              <DropdownItem key={item.label}>
                <NavbarLink item={item} />
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <NavbarContent>
          <SearchBar />

          <ThemeSwitcher />
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
};
