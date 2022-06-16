import React from 'react'

export const Cards = () => {
  return (
    //Conjunto de tarjetas
    <div className='bg-lime-400 bg-opacity-75 my-8'>
      {/* Tarjeta individual*/}
      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden'>
        {/*Sector de imagen*/}
        <img className='w-full' src='https://media.istockphoto.com/photos/couple-eating-lunch-with-fresh-salad-and-appetizers-picture-id944478708?s=612x612' />
        {/*Sector texto*/}
        <div className='px-6 py-4'>
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </div>
  )
}
