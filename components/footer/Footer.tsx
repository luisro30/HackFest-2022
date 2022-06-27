import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <>
     <footer className=' bg-gradient-to-r from-green-500 to-green-800 flex items-center justify-between bg-white py-2 px-2 shadow-lg sm:py-3 sm:px-8 text-white'>
      <div className='pt-3 md:pt-10 px-4 xl:px-24'>
        <div className='grid items-start'>
            <h1>Mas informacion de Praedium</h1>
            <p>La página de Praedium fue creada para el Hackathon que fue organizado el presente año (2022) para los estudiantes de ingeniería en informática y sistemas de la Universidad Rafael Landívar Campus Quetzaltenango, esta va orientada en uno de los 17 objetivos de desarrollo sostenible 2030 de la ONU, el objetivo en el cuál nos quisimos enfocar fue el objetivo número 3, el cual es "Bienestar y Salud".</p>
          </div>

          <div className=" ">
            <h1 className='text-center'>Sección</h1>
            <ul>
              <li>Inicio</li>
              <li>Salud Y Bienestar</li>
              <li>Acerca De</li>
            </ul>
          </div>
      </div>
    </footer>
    </>
  )
}
