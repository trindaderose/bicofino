import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { Kbd } from "@heroui/kbd";
import { Input } from "@heroui/input";
import { FaGithub } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <FaGithub className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex gap-2 text-default-500 items-center">
          <ThemeSwitch />
          <FaCartPlus />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden text-default-500" justify="end">
        <ThemeSwitch />
        <FaCartPlus />
      </NavbarContent>
    </NextUINavbar>
  );
};
