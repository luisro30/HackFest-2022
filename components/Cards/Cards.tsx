import React from "react";
import Image from "next/image";
import Link from "next/link"

const topCompaniesItems = [
  {
    title: "The Coldest Sunset",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image:"https://media.istockphoto.com/photos/couple-eating-lunch-with-fresh-salad-and-appetizers-picture-id944478708?s=612x612",
  },
  {
    title: "The Coldest Sunset",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image:"https://as1.ftcdn.net/v2/jpg/02/54/45/12/1000_F_254451278_7AAYmhYkBEVQ9MYnZYIomTI5WdFCif1g.jpg",
  },
  {
    title: "The Coldest Sunset",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image:"https://as1.ftcdn.net/v2/jpg/03/21/34/26/1000_F_321342613_tX7IK69S1SK3XD3ZzWQUnaaDW36jR2nA.jpg",
  },
  {
    title: "The Coldest Sunset",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image:"https://as2.ftcdn.net/v2/jpg/02/78/16/95/1000_F_278169511_9loolviiWhV9oEqqUBAgMTtZjtK3fPVf.jpg",
  },
  {
    title: "The Coldest Sunset",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image:"https://as1.ftcdn.net/v2/jpg/03/25/35/08/1000_F_325350805_D8PVU73qs1dj5TdWgm9IpuAjJ7sgHacK.jpg",
  },
];

export const Cards = () => {
  return (
    //Conjunto de tarjetas - contenedor principal
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {topCompaniesItems.map((item, i) => (
          <Link href="/#" key={i}>
            {/*---Tarjeta 1---*/}
            <div className="my-20 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              {/*contenido de la tarjeta*/}
              <div className="max-w-md mx-auto bg-white rounded-lg shadow-2xl overflow-hidden transform transition duration-500 hover:scale-110 cursor-pointer">
                {/*Sector de imagen*/}
                <img className="w-full" src={item.image} />
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
