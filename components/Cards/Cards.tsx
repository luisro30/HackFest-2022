import React from "react";

export const Cards = () => {
  return (
    //Conjunto de tarjetas - contenedor principal
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {/*---Tarjeta 1---*/}
        <div className="my-20 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          {/*contenido de la tarjeta*/}
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
            {/*Sector de imagen*/}
            <img
              className="w-full"
              src="https://media.istockphoto.com/photos/couple-eating-lunch-with-fresh-salad-and-appetizers-picture-id944478708?s=612x612"
            />
            {/*Sector texto*/}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
        {/*---Fin tarjeta---*/}
      </div>
    </div>
  );
};
