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
          Carretera Cuautla-Cuernavaca km41 col. polvorín, Cuautla, Morelos
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
            Estamos ubicados en la carretera Cuautla-Cuernavaca km41 col.
            polvorin Cuautla, Morelos
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15102.414901105729!2d-98.96221692648929!3d18.860279767587198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce6f07bb159ff3%3A0x9505194f51a6672e!2s%EF%B8%8FPlomeria%20y%20Electrica%20Zeus!5e0!3m2!1ses-419!2smx!4v1699728650166!5m2!1ses-419!2smx"
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
