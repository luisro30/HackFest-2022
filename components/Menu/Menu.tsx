import React from "react";
import Link from "next/link";
import Image from "next/image";

const topCompaniesItems = [
  {
    img: "https://desarrollohumano.org.gt/wp-content/uploads/2016/04/3-SaludyBienestar.jpg",
    title: "MEJORAR LA CALIDAD DE VIDA DE LOS GUATEMALTECOS, ESPECIALMENTE DE LOS GRUPOS MÁS VULNERABLES Y FAMILIAS QUE SE ENCUENTRAN EN ESTADO DE POBREZA Y POBREZA EXTREMA",
    info: "Fortalecimiento del sistema público de salud y mejora del acceso y la oportunidad de la atención médica mediante la contratación de más médicos, enfermeras, laboratoristas y personal paramédico; así como, la capacitación del personal, contratación de servicios externos, el reforzamiento de la atención primaria y el cuidado integral de la familia, promoción de la salud del adulto mayor, el acceso a medicamentos y el abastecimiento de hospitales y centros de salud. Lograr la cobertura sanitaria universal, en particular la protección contra los riesgos financieros, el acceso a servicios de salud esenciales de calidad y el acceso a medicamentos y vacunas seguros, eficaces, asequibles y de calidad para todos.",
  },
  {
    img: "https://media.istockphoto.com/photos/children-having-lunch-in-asian-school-sitting-on-the-floor-picture-id938353548?b=1&k=20&m=938353548&s=612x612&w=0&h=Wj-YaWx_TSjhMLsscwDYIsth6NJmRvhQJPO8TikdQeE=",
    title: "La pobreza sigue siendo uno de los problemas socioeconómicos más graves de Guatemala.",
    info: "Guatemala se ha comprometido a reducir la pobreza, identificando esta problemática como una de las prioridades de país, definiendo como meta central Para el 2030, reducir al menos a la mitad la proporción de hombres, mujeres y niños de todas las edades que viven en pobreza en todas sus dimensiones según las definiciones nacionales.",
    alt: "imagen"
  },
  {
    img: "/images/img-cards-menu/vacuna.jpg",
    title: "La importancia de las vacunas",
    info: "Las vacunas constituyen una de las medidas sanitarias que mayor beneficio ha producido y sigue produciendo a la humanidad, previenen enfermedades que antes causaban grandes epidemias, muertes y secuelas.",
  }
];

export const Menu = () => {
  return (
        <div>
        {topCompaniesItems.map((item, i) => (
            <Link href="#" key={i}>
            <div className="flex flex-col my-20 md:flex-row transform transition duration-500 hover:scale-105 cursor-pointer">
                <img
                className="rounded-lg shadow-2xl w-200 h-96"
                src={item.img}
                alt={item.alt}
                />
                <div className="justify-between p-6  mx-8">
                <h1 className="mb-2 text-2xl font-bold tracking-tigh lowercase">
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
