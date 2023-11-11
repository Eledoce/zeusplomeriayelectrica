import { FaWhatsapp } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function Flotante() {
  return (
    <div className=" bottom-10 right-10 fixed flex flex-col gap-2">
      <A className="bg-green-500" href="#">
        <FaWhatsapp className="text-3xl text-white p-1 h-full w-full" />
      </A>
      <A className="bg-orange-600" href="#">
        <FaMapMarkerAlt className="text-3xl text-white p-1 h-full w-full" />
      </A>
      <A className="bg-sky-500" href="#">
        <BsTelephoneFill className="text-3xl text-white p-2 h-full w-full" />
      </A>
    </div>
  )
}

const A = ({ children, className, href }) => {
  return (
    <a
      className={`bg-green-500 w-16 h-16 p-2 rounded-full flex justify-center items-center hover:scale-110 active:scale-95 transition-all ${className}`}
      href={href}
    >
      {children}
    </a>
  )
}
