import Flotante from './components/Flotante'
import Marcas from './components/Marcas'
import Opiniones from './components/Opiniones'
import Portada from './components/Portada'
import { BsTelephoneFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import logoLegacy from './assets/logoLegacy.jpg'

export default function App() {
  return (
    <div className="h-screen max-w-screen relative">
      <Portada />
      <div className="inline-flex flex-col xl:flex-row justify-center items-center w-full gap-2 xl:gap-5 xl:p-1 p-2 shadow-xl">
        <p className="inline-flex items-center gap-2 text-center ">
          <BsTelephoneFill /> 735 122 73 30
        </p>
        <p className="inline-flex items-center gap-2 align-text-top text-center">
          <HiMail className="text-xl" />
          zeusplomeriayelectrica@gmail.com
        </p>
        <p className="inline-flex items-center gap-2 text-center">
          <FaMapMarkerAlt />
          Cuernavaca-Cuautla 77, Revolución, 62748 Cuautla, Mor.
        </p>
      </div>
      <Flotante />

      <main>
        <div className="py-10 md:px-20 flex flex-col md:flex-row gap-5 justify-center items-center font-Montserrat">
          <p className="text-lg w-5/6 xl:w-1/2 text-justify">
            Somos una tienda de plomería y electricidad estamos en una excelente
            ubicación contamos con estacionamiento y estamos listos para
            ayudarte con los materiales que necesitas para tu casa o negocio.{' '}
            <br />
            <br />
            Recuerda que también contamos con{' '}
            <strong>entregas a domicilio.</strong> No lo pienses más y danos la
            oportunidad de ayudarte hoy mismo
          </p>
          <img
            src={logoLegacy}
            alt="Logo"
            className="w-5/6 md:w-1/5  rounded-xl shadow-xl"
          />
        </div>

        <Marcas />
      </main>

      <Opiniones />

      <section className="">
        <h4 className="text-3xl font-Montserrat font-medium text-center m-5">
          Ubicación
        </h4>
        <div className="flex flex-col xl:flex-row gap-2 justify-center items-center mb-10">
          <p className="text-xl font-Montserrat text-center w-5/6 xl:w-1/3 xl:px-10">
            Estamos ubicados en Cuernavaca-Cuautla 77, Revolución, 62748
            Cuautla, Mor.
          </p>
          <iframe
            src="https://www.google.com/maps?q=Cuernavaca-Cuautla+77,+Revoluci%C3%B3n,+62748+Cuautla,+Mor.&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full xl:w-2/3 xl:px-20 h-96"
          ></iframe>
        </div>
      </section>
      <footer className="p-1 text-center text-gray-100 bg-stone-800 font-Montserrat">
        Copyryght &copy; 2023 Plomería y Eléctrica Zeus | Todos los derechos
        reservados
      </footer>
    </div>
  )
}
