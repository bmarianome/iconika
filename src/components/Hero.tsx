import Link from "next/link";
import pic1 from "../../public/hero/girl-blonde.jpg"
import pic2 from "../../public/hero/pic2.jpg"
import Image from "next/image";
import logoNegro from 'public/logo-negro.png'


export default function Hero() {
  return (
    <div className="h-[100svh] relative">

      
      
      <div className="h-full lg:h-[calc(100%-48px)] relative">
        <div className="mx-auto max-w-7xl flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 h-full">
          <div className="px-6 h-max py-8 lg:col-span-7 lg:px-0 xl:col-span-6 lg:h-full flex items-center justify-center">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:mr-8">
              <Image
                src={logoNegro}
                className="w-72"
                alt="Your Company"
              />
              <div className="hidden sm:mt-12 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="font-bold">Icónika</span> es la agencia de modelos emergentes <span className="font-bold">N°1</span> de Latinoamérica.{' '}
                  <a href="#" className="whitespace-nowrap font-semibold ">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Ver Más <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                Gestión de carreras profesionales en OnlyFans
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                <span className="font-bold">Icónika</span> es una agencia de representación de <span className="font-bold">modelos emergentes</span> en la industria del contenido para adultos.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Conocé nuestro estudio
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Contactanos <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="h-full relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <Image
              fill
              className="lg:rounded-bl-[33%] w-full object-cover lg:aspect-auto lg:h-full object-[-75px] sm:object-center lg:object-[-150px]"
              src={pic2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}