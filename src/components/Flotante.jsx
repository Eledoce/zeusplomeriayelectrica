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
        href="https://www.google.com/maps/dir//%EF%B8%8FPlomeria+y+Electrica+Zeus+carretera+cuautla+cuernavaca+km+41+%235+col+Polvor%C3%ADn+62757+Cuautla,+Mor./@18.8644674,-98.9616834,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x85ce6f07bb159ff3:0x9505194f51a6672e"
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
