import React from 'react'
import Image from 'next/image'
import img from "../../assets/Github.gif"

export const Footer = () => {
  return (
    <>
     <footer className=' bg-gradient-to-r from-green-500 to-green-800 flex gap-3 flex-wrap '>
     <div className='text-center py-5 text-white text-lg'>
        <p>Si quieres ser colaborador puedes dar click al logo de GitHub</p>
      </div>
     <div className='w-64 text-center py-5 text-white text-lg'>
        <p>“Aquellos que piensan que no tienen tiempo para una 
          alimentación saludable tarde o temprano encontrarán 
          tiempo para la enfermedad”</p>
      </div>
      <div className="w-20 ">
      <Image
        src={img}
        alt= "corporate"
      />
     </div>
    </footer>
    </>
  )
}
