import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";

const topCompaniesItems = [
  {
    name: "Lorem Ipsum",
    info: "Lorem info",
    image: "/img/08.jpg",
    logo: "/img/logo.jpg",
  },
  {
    name: "Lorem Ipsum",
    info: "Lorem info",
    image: "/img/08.jpg",
    logo: "/img/logo.jpg",
  },
  {
    name: "Lorem Ipsum",
    info: "Lorem info",
    image: "/img/08.jpg",
    logo: "/img/logo.jpg",
  },
  {
    name: "Lorem Ipsum",
    info: "Lorem info",
    image: "/img/08.jpg",
    logo: "/img/logo.jpg",
  },
  {
    name: "Lorem Ipsum",
    info: "Lorem info",
    image: "/img/08.jpg",
    logo: "/img/logo.jpg",
  },
  {
    name: "Lorem Ipsum",
    info: "Lorem info",
    image: "/img/08.jpg",
    logo: "/img/logo.jpg",
  },
];

export const CardInfo = () => {
  return (
    <section id="top-companies">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Guatemala</h2>
        <Button variant="outline" className="hidden xs:inline-flex">
          Lorem Ipsum
        </Button>
      </div>

      <div
        id="top-companies__items"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {topCompaniesItems.map((item, i) => (
          <Link href="/#" key={i}>
            <a className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700">
              <div className="relative block overflow-hidden  pt-[70%]">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-200 group-hover:scale-[102%]"
                />
              </div>

              <div className="relative flex flex-col border-t p-4 dark:border-slate-600">
                <span className="absolute right-4 -top-[65px] block h-[80px] w-[80px] overflow-hidden rounded-lg border shadow-sm dark:border-slate-600">
                  <div className="relative block overflow-hidden  bg-slate-200 pt-[100%]">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </span>

                <h5 className="block truncate text-xl font-semibold capitalize">
                  {item.name}
                </h5>
                <span className="block truncate text-slate-500 dark:text-slate-400">
                  {item.info}
                </span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};
