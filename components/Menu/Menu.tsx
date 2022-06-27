import React from "react";
import Link from "next/link";
import Image from "next/image";

const topCompaniesItems = [
  {
    img: "/images/img-cards-menu/ejercicio.jpg",
    title: "La importancia del ejercicio",
    info: "La actividad física regular puede mejorar la fuerza muscular y aumentar la resistencia.",
  },
  {
    img: "/images/img-cards-menu/vacuna.jpg",
    title: "La importancia de las vacunas",
    info: "Las vacunas constituyen una de las medidas sanitarias que mayor beneficio ha producido y sigue produciendo a la humanidad, previenen enfermedades que antes causaban grandes epidemias, muertes y secuelas.",
  },
];

export const Menu = () => {
  return (
        <div>
        {topCompaniesItems.map((item, i) => (
            <Link href="#" key={i}>
            <div className="flex flex-col my-20 md:flex-row">
                <img
                className="rounded-lg shadow-2xl w-200 h-96"
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
