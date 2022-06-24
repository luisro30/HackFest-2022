import React from "react";
import Link from "next/link";

const topCompaniesItems = [
  {
    img: "",
    title: "",
    info: "",
  },
];

export const Menu = () => {
  return (
    <div className="flex flex-col  md:flex-row">
    <img className="" src="https://image.shutterstock.com/image-photo/girl-does-sports-mask-on-600w-1721395486.jpg"/>
    <div className="justify-between p-6  mx-8">
        <h1 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Noteworthy technology acquisitions 2021</h1>
        <p className="mb-4 font-normal">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
    </div>
  );
};
