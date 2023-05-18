import Link from "next/link";
import pic1 from "../../public/hero/girl-blonde.jpg"
import pic2 from "../../public/hero/pic2.jpg"
import Image from "next/image";
import logoNegro from 'public/logo-negro.png'


export default function Hero() {
  return (
    <div className="h-[100svh] relative">


      {/* SVGS */}
      <div className="absolute left-0 top-0 w-auto h-[14rem]">
        <svg className="h-full w-auto" width="1353" height="1104" viewBox="0 0 1353 1104" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.00012207 1103.5V0H1352.5C1278.5 133 1213.5 431 807.999 480.5C545.999 516.5 452.5 553.5 316.5 658C191.07 754.378 39.5 1067 -0.00012207 1103.5Z" fill="black" />
        </svg>
      </div>

      <div className="absolute left-0 bottom-0 w-auto h-[24rem]">
        <svg className="h-full w-auto" width="844" height="1135" viewBox="0 0 844 1135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0V1135H843.5C831 1068 730 809.5 556.5 718.5C433.5 661 163 582 163 404.5C154 317 222.5 26.5 0 0Z" fill="black" />
        </svg>
      </div>

      <div className="h-full lg:h-[calc(100%-0px)] relative">
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
                  <span className="font-bold">Iconika</span> es la agencia de modelos emergentes <span className="font-bold">N°1</span> de Latinoamérica.{' '}
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
                <span className="font-bold">Iconika</span> es una agencia de representación de <span className="font-bold">modelos emergentes</span> en la industria del contenido para adultos.
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