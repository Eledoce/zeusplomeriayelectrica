import portada from '../assets/portada1.png'
import zeus from '../assets/zeus.svg'
export default function Portada() {
  return (
    <div className="w-full relative">
      <img src={portada} alt="Portada" className="w-full" />
      <div className="border-red-600 absolute top-0 w-full h-full flex flex-col justify-center items-center select-none">
        <img
          src={zeus}
          alt="Zeus"
          className="w-1/6  my-1 xl:mb-5 hover:scale-105 transition-all"
        />
        <h1 className="text-2xl xl:text-7xl uppercase text-center top-0 text-white font-Staat hover:scale-105 transition-all">
          Plomeria y electrica Zeus
        </h1>
        <h2 className="text-xs xl:text-2xl uppercase text-center text-gray-300 top-0 hover:scale-105 transition-all font-Montserrat">
          material de plomeria y electricidad
        </h2>
      </div>
    </div>
  )
}
