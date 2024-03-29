import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { Button, IconButton } from "../Button";

import Logo from "./Logo";
import ThemeToggle from "../ThemeToggle";

export const Header = () => {
  return (
    <>
      <header
        className="rounded-div max-w-[1140px] sticky inset-x-0 top-0 z-20 flex items-center
      justify-between bg-white py-2 px-2 shadow-lg sm:py-3 sm:px-8"
      >
        <div className="flex grow-0 basis-1/3 md:hidden">
          {" "}
          <MenuPopOver />{" "}
        </div>
        <div className="flex grow-0 basis-1/3 justify-center md:justify-start ">
          <Link href={"/#"}>
            <a className="my-auto flex w-[140px] md:ml-0 mx-12 justify-center">
              <Logo />
            </a>
          </Link>
          <div className="ml-10 hidden gap-2 md:ml-2 md:flex">
            <Link href="/" passHref>
              <Button variant="ghost" as="a" className="hidden md:inline-flex">
                Inicio
              </Button>
            </Link>

            <Link href="/salud" passHref>
              <Button variant="ghost" as="a" className="hidden md:inline-flex">
                Salud Bienestar 
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button variant="ghost" as="a" className="hidden md:inline-flex">
                Acerca de
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative flex grow-0 basis-1/3 justify-end gap-2">
          <ThemeToggle />
        </div>
      </header>
    </>
  );
};

const MenuPopOver = ({ className, display, setShowAuth }: any) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(className, display)}>
      <IconButton
        variant="ghost"
        aria-label="Navigation Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </IconButton>
      <Transition
        show={isOpen}
        appear
        as={Fragment}
        enter="transform transition ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-300 delay-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Dialog
          as="div"
          className={clsx("fixed inset-0 z-50 ", display)}
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300 delay-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80" />
          </Transition.Child>

          <div className="rounded-div fixed top-0 bottom-0 left-0 w-full max-w-xs rounded-r-xl bg-white p-6 shadow-lg dark:bg-white-800 ">
            <a className="mx-auto mt-4 flex w-[140px] justify-center">
              <Logo />
            </a>
            <ul className="mt-8 space-y-3">
              <li className="group relative flex h-9 items-center overflow-hidden rounded-md hover:bg-slate-200/50">
                <span className="absolute h-full w-2 bg-green-700 opacity-0 transition-all group-hover:opacity-100" />
                <Link href="/" passHref>
                  <a className="w-full font-medium transition-all group-hover:pl-3">
                    Inicio
                  </a>
                </Link>
              </li>

              <li className="group relative flex h-9 items-center overflow-hidden rounded-md hover:bg-slate-200/50">
                <span className="absolute h-full w-2 bg-green-700 opacity-0 transition-all group-hover:opacity-100" />
                <Link href="/salud" passHref>
                  <a className="w-full font-medium transition-all group-hover:pl-3">
                    Salud y Bienestar
                  </a>
                </Link>
              </li>
              <li className="group relative flex h-9 items-center overflow-hidden rounded-md hover:bg-slate-200/50">
                <span className="absolute h-full w-2 bg-green-700 opacity-0 transition-all group-hover:opacity-100" />
                <Link href="/about" passHref>
                  <a className="w-full font-medium transition-all group-hover:pl-3">
                    Acerca de
                  </a>
                </Link>
              </li>
            </ul>

            <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-200/10"></div>
            <IconButton
              variant="ghost"
              aria-label="Close Navigation Menu"
              className="absolute top-5 right-5"
              onClick={() => setIsOpen(false)}
            >
              <svg
                viewBox="0 0 10 10"
                className="h-2.5 w-2.5 overflow-visible"
                aria-hidden="true"
              >
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </IconButton>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
