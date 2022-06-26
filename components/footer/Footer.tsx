import React from 'react'
import Image from 'next/image'
import img from "../../assets/github.png"

export const Footer = () => {
  return (
    <>
     <footer className=' bg-gradient-to-r from-green-500 to-green-800 flex flex-row items-center justify-center flex-wrap gap-8'>
      <div className='w-64 text-center py-5 text-white text-lg'>
        <p>Si deseas se colaborardor, puedes darle click al icono de GitHub</p>
      </div>
      <div>
        <a href="https://github.com/luisro30/HackFest-2022">
        <div className='w-20'>
          <Image
            src={img}
            alt= "corporate"
          />
        </div>
        </a>
      </div>
      <div className='w-64 text-center py-5 text-white text-lg'>
        <p>“Aquellos que piensan que no tienen tiempo para una 
          alimentación saludable tarde o temprano encontrarán 
          tiempo para la enfermedad”</p>
      </div>
    </footer>
    </>
  )
}
