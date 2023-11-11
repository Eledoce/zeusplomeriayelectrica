import amanco from '../assets/marcas/amanco.svg'
import calorex from '../assets/marcas/calorex.svg'
import condumex from '../assets/marcas/condumex.svg'
import fg from '../assets/marcas/flowguard.svg'
import iusasvg from '../assets/marcas/iusasvg.svg'
import nacobre from '../assets/marcas/nacobre.svg'
import rotoplas from '../assets/marcas/rotoplas.svg'
import truper from '../assets/marcas/truper.svg'
import urrea from '../assets/marcas/urrea.svg'

export default function Marcas() {
  return (
    <div className="bg-gray-900 p-10 flex  flex-wrap gap-5 justify-center mt-10">
      <h4 className="text-5xl uppercase text-center mb-8 text-white w-full font-Staat">
        Algunas de nuestras marcas
      </h4>
      <img src={fg} alt="Flowguard" className="w-52" />
      <img src={amanco} alt="Amanco" className="w-44" />
      <img src={calorex} alt="Calorex" className="w-44" />
      <img src={condumex} alt="Condumex" className="w-52" />
      <img src={iusasvg} alt="Iusa" className="w-16" />
      <img src={nacobre} alt="Nacobre" className="w-44" />
      <img src={rotoplas} alt="Rotoplas" className="w-44" />
      <img src={truper} alt="Truper" className="w-44" />
      <img src={urrea} alt="Urrea" className="w-44" />
    </div>
  )
}
