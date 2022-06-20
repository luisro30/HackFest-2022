import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer
      className="bg-green-700 inset-x-0 top-0 flex justify-between justify-items-center items-center p-3.5 flex-wrap">
        <div>
          <img className='h-48 p-3.5' src="https://www.indesgua.org.gt/wp-content/uploads/2018/03/Universidad-Rafael-Land%C3%ADvar.png" alt="Logo Landivar" />
        </div>
        <div className='text-white text-xl w-80 p-3.5'>
          <p>Pagina realizada por los estudiantes de la Universidad Rafael Landivar, Campus Quetzaltenago, con el proposito
            de dar informacion sobre la Desnutricion en Guatemala. </p>
        </div>
        <div className='p-3.5 '>
          <iframe width="440" height="215" src="https://www.youtube.com/embed/JPWwps6ZUOM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
    </footer>
    </>
  )
}
