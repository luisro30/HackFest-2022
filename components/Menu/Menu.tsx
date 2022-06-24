import React from "react";
import Link from "next/link";

const topCompaniesItems = [
  {
    img: "https://image.shutterstock.com/image-photo/girl-does-sports-mask-on-600w-1721395486.jpg",
    title: "La importancia del ejercicio",
    info: "La actividad física regular puede mejorar la fuerza muscular y aumentar la resistencia.",
  },
];

export const Menu = () => {
  return (
        <div>
        {topCompaniesItems.map((item, i) => (
            <Link href="#" key={1}>
            <div className="flex flex-col  md:flex-row">
                <img
                className="rounded-lg shadow-2xl"
                src={item.img}
                />
                <div className="justify-between p-6  mx-8">
                <h1 className="mb-2 text-2xl font-bold tracking-tigh">
                    {item.title}
                </h1>
                <p className="mb-4 font-normal">
                    {item.info}
                </p>
                </div>
            </div>
            </Link>
        ))}
        </div>
  );
};
