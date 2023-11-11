import Flotante from './components/Flotante'
import Marcas from './components/Marcas'
import Opiniones from './components/Opiniones'
import Portada from './components/Portada'
import { BsTelephoneFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function App() {
  return (
    <div className="h-screen max-w-screen relative">
      <Portada />
      <div className="inline-flex justify-center items-center w-full gap-5 p-1 shadow-xl">
        <p className="inline-flex items-center gap-2">
          <BsTelephoneFill /> 735 122 73 30
        </p>
        <p className="inline-flex items-center gap-2 align-text-top">
          <HiMail className="text-xl" />
          zeusplomeriayelectrica@gmail.com
        </p>
        <p className="inline-flex items-center gap-2">
          <FaMapMarkerAlt />
          Carretera Cuautla-Cuernavaca km41 col. polvorin, Cuautla, Morelos
        </p>
      </div>
      <Flotante />

      <main className="py-10 px-20 flex gap-5 justify-center items-center font-Montserrat">
        <p className="text-lg w-1/2 text-justify">
          Somos una tienda de plomería y electricidad estamos en una excelente
          ubicación contamos con estacionamiento y estamos listos para ayudarte
          con los materiales que necesitas para tu casa o negocio. <br />
          Recuerda que también contamos con{' '}
          <strong>entregas a domicilio.</strong> No lo pienses más y danos la
          oportunidad de ayudarte hoy mismo
        </p>
        <div className="w-1/3 h-44 bg-slate-400"></div>
      </main>

      <Marcas />

      <Opiniones />
      <Opiniones />
      <Opiniones />
      <Opiniones />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15102.414901105729!2d-98.96221692648929!3d18.860279767587198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce6f07bb159ff3%3A0x9505194f51a6672e!2s%EF%B8%8FPlomeria%20y%20Electrica%20Zeus!5e0!3m2!1ses-419!2smx!4v1699728650166!5m2!1ses-419!2smx"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <footer className="p-1 text-center text-gray-600">
        Copyryght &copy; 2023 Plomería y Electrica Zeus | Todos los derechos
        reservados
      </footer>
    </div>
  )
}
