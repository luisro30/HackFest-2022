import Link from "next/link";
import React from "react";
import { Button } from "./Button";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeTooggle";

export const Header = () => {
  return (
    <>
      <header
        className="sticky inset-x-0 top-0 z-20 flex items-center
      justify-between bg-white py-2 px-2 shadow-lg sm:py-3 sm:px-8"
      >
        <div className="flex grow-0 basis-1/3 md:hidden">Menu BTN</div>
        <div className="flex grow-0 basis-1/3 justify-center md:justify-start ">
          <Link href={"/#"}>
            <a className="my-auto flex w-[140px] md:ml-0 mx-12">
              <Logo />
            </a>
          </Link>
          <div className="ml-10 hidden gap-2 md:ml-2 md:flex">
            <Link href="/#" passHref>
              <Button variant="ghost" as="a" className="hidden md:inline-flex">
                Option 1
              </Button>
            </Link>
            <Link href="/#" passHref>
              <Button variant="ghost" as="a" className="hidden md:inline-flex">
                Option 2
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative flex grow-0 basis-1/3 justify-end gap-2">
          <Link href={"/#"} passHref>
            <Button as="a" className="hidden ">
              For explample
            </Button>
          </Link>

          <Button className="hidden md:block">Sign In</Button>
          <ThemeToggle />
        </div>
      </header>
    </>
  );
};
