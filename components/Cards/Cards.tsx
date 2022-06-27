import React from "react";
import Image from "next/image";
import Link from "next/link";

const topCompaniesItems = [
  {
    title: "Cuidado con los azúcares",
    info: "La OMS hace énfasis en la importancia de reducir el consumo de azúcares (azúcar de mesa, jarabes o bebidas azucaradas). Ya que la ingesta excesiva de ellos puede aumentar el riesgo de sufrir obesidad y diabetes. Estos alimentos solo pueden constituir un 10% o menos de tu ingesta calórica diaria. Esto equivale a un poco menos de 250 mL de tu gaseosa favorita",
    image: "/images/img-cards-menu/img.jpg",
    alt: "imagen"
  },
  {
    title: "Vigila la porción de grasas saturadas",
    info: "Las grasas saturadas son condenadas por muchos, pero la verdad es que puedes comer 1 gramo de ellas cada día sin problema. Sin embargo, lo más recomendable es que uses las MCTs (triglicéridos de cadena media) que se encuentran, por ejemplo, en el aceite de coco. Estas proporcionan energía para tu cuerpo y pueden aumentar los niveles de colesterol HDL o “colesterol bueno.”",
    image: "/images/img-cards-menu/1000_F_118612226_J9RojAIDkTn2nKQlGJzEuCZdTkF2R3Pa.jpg",
  },
  {
    title: "Toma suficiente agua",
    info: "Todas las células del cuerpo necesitan de agua para funcionar, por eso es esencial ingerir suficiente. Una adecuada hidratación te puede ayudar a mejorar tu digestión, la función de tus riñones y lucir una piel más hidratada. Lo ideal es que consumas 2,7 litros de agua potable al día si eres mujer y 3,7 si eres hombre. Aquí se incluye el agua de los alimentos, que representa aproximadamente un 20% del total.",
    image:
      "/images/img-cards-menu/agua.jpg",
  },
  {
    title: "Comer fibra",
    info: "La fibra puede ayudarte a mantener la salud de tu sistema digestivo y controlar los niveles de colesterol y azúcar en sangre. Las mujeres necesitan consumir de 21 a 25 gramos de fibra a diario y los hombres de 30 a 38 gramos diarios.",
    image:
      "/images/img-cards-menu/1000_F_84876559_RydJuaYdPf3lgdAB32FYCefZfyebaYAr.jpg",
  },
  {
    title: "Incorporar más proteína vegetal",
    info: "Los productos vegetales son los protagonistas en una dieta sana diaria. No solo las frutas y verduras, también otros alimentos vegetales como tubérculos, legumbres, cereales y frutos secos. Precisamente estos últimos tres alimentos son especialmente ricos en proteínas vegetales.",
    image:
      "/images/img-cards-menu/1000_F_442346615_Txxr1SLA8Iu8tNVBgnpv0Wbr0Ltq8cHk.jpg",
  },
];

export const Cards = () => {
  return (
    //Conjunto de tarjetas - contenedor principal
    <div className="container my-12 mx-auto px-4 md:px-12">
       <h1 className="font-bold text-5xl mb-8 mx-10 my-10">Algunos consejos💚</h1>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {topCompaniesItems.map((item, i) => (
          <Link href="/#" key={i}>
            {/*---Tarjeta 1---*/}
            <div className="my-20 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              {/*contenido de la tarjeta*/}
              <div className="max-w-md mx-auto bg-white rounded-lg shadow-2xl overflow-hidden transform transition duration-500 hover:scale-110 cursor-pointer">
                {/*Sector de imagen*/}
                <img className="w-full" src={item.image} alt={item.alt}/>
                {/*Sector texto*/}
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-700 text-base">{item.info}</p>
                </div>
              </div>
            </div>
            {/*---Fin tarjeta---*/}
          </Link>
        ))}
      </div>
    </div>
  );
};
