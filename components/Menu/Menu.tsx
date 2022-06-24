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
    <div className="container my-12 mx-auto w-3/5 px-4  md:px-12">
      <div className="-mx-1 lg:-mx-4">
        {/*---Estructura menu---*/}
        <div className="my-20 px-1  bg-blue-500">
          {/*Contenido menu*/}
          <div className="flex flex-wrap">
            {/*Imagen*/}
            <div className="h-96"><img className="w-96 h-96 rounded-lg shadow-2xl" src="https://image.shutterstock.com/image-photo/girl-does-sports-mask-on-600w-1721395486.jpg" /></div>
            {/*Texto */}
            <div className="bg-blue-800 w-1/4 m-auto">
              {/*Titulo*/}
              <div className="font-bold text-xl mb-2">Ejercicio</div>
              {/*Parrafo */}
              <p className="text-gray-700 text-base">Contenido</p>
            </div>
          </div>
        </div>
        {/*---Fin tarjet---*/}
      </div>
    </div>
  );
};
