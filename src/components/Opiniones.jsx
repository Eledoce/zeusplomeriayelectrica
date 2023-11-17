import uno from '../assets/opiniones/uno.png'
import dos from '../assets/opiniones/dos.png'
import tres from '../assets/opiniones/tres.png'
import cuatro from '../assets/opiniones/cuatro.png'
import { AiFillStar } from 'react-icons/ai'
export default function Opiniones() {
  return (
    <section className="flex flex-col xl:flex-row p-5 gap-2 justify-center items-center select-none w-full flex-wrap my-10 shadow-xl">
      <div className="flex flex-col justify-center items-center gap-2 h-44 text-4xl">
        <p className="text-3xl font-Montserrat font-medium">Valoración</p>
        <AiFillStar className="text-yellow-400 text-7xl" />
        <h3 className="text-gray-600">4.9</h3>
      </div>
      <div className="flex flex-col gap-5 xl:flex-row">
        <img
          src={uno}
          alt="Opiniones"
          className="w-60 rounded-md shadow-2xl h-fit hover:scale-105 transition-all"
        />
        <img
          src={dos}
          alt="Opiniones"
          className="w-60 rounded-md shadow-2xl h-fit hover:scale-105 transition-all"
        />
        <img
          src={tres}
          alt="Opiniones"
          className="w-60 rounded-md shadow-2xl h-fit hover:scale-105 transition-all"
        />
        <img
          src={cuatro}
          alt="Opiniones"
          className="w-60 rounded-md shadow-2xl h-fit hover:scale-105 transition-all"
        />
      </div>
    </section>
  )
}
