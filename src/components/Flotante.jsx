import { FaWhatsapp } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function Flotante() {
  return (
    <div className=" bottom-10 right-10 fixed flex flex-col gap-2">
      <A
        className="bg-green-500"
        href={
          /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
            ? 'whatsapp://send?phone=527351227330'
            : 'https://api.whatsapp.com/send?phone=527351227330'
        }
      >
        <FaWhatsapp className="text-3xl text-white p-1 h-full w-full" />
      </A>
      <A
        className="bg-orange-600"
        href="https://www.google.com/maps/dir/?api=1&destination=Cuernavaca-Cuautla+77,+Revoluci%C3%B3n,+62748+Cuautla,+Mor."
        target="_blank"
      >
        <FaMapMarkerAlt className="text-3xl text-white p-1 h-full w-full" />
      </A>
      <A className="bg-sky-500" href="tel:+527351227330">
        <BsTelephoneFill className="text-3xl text-white p-2 h-full w-full" />
      </A>
    </div>
  )
}

const A = ({ children, className, href, target }) => {
  return (
    <a
      className={`bg-green-500 w-16 h-16 p-2 rounded-full flex justify-center items-center hover:scale-110 active:scale-95 transition-all shadow-xl shadow-black/50 hover:shadow-black ${className}`}
      href={href}
      target={target ? target : ''}
    >
      {children}
    </a>
  )
}
