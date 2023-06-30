import pic1 from "public/cta/pic1.jpg"
import Image from "next/image";
import logoNegro from 'public/logo-negro.png'
import Link from "next/link";

export default function Hero() {
  return (
    <div className="lg:h-[100svh] relative">

      {/* SVGS */}
      <div className="absolute left-0 top-0 w-[10%] h-auto hidden lg:inline-block">
        <svg className="w-full h-auto" width="1353" height="1104" viewBox="0 0 1353 1104" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.00012207 1103.5V0H1352.5C1278.5 133 1213.5 431 807.999 480.5C545.999 516.5 452.5 553.5 316.5 658C191.07 754.378 39.5 1067 -0.00012207 1103.5Z" fill="black" />
        </svg>
      </div>

      {/* MOBILE */}
      <div className="absolute right-0 top-0 w-[20%] h-auto lg:hidden -scale-100">
        <svg className="w-full h-auto" width="844" height="1135" viewBox="0 0 844 1135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0V1135H843.5C831 1068 730 809.5 556.5 718.5C433.5 661 163 582 163 404.5C154 317 222.5 26.5 0 0Z" fill="black" />
        </svg>
      </div>

      <div className="h-full lg:h-[calc(100%-4rem)] relative">
        <div className="mx-auto max-w-7xl flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 h-full">
          <div className="px-6 h-max py-8 lg:col-span-6 lg:px-0 xl:col-span-6 lg:h-full flex items-center justify-center">
            <div className="mx-auto max-w-2xl lg:ml-8">
              <Image
                src={logoNegro}
                className="w-56 sm:w-72"
                alt="Iconika"
              />
              <div className="hidden sm:mt-12 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="font-bold">Iconika</span> es la agencia de modelos emergentes <span className="font-bold">N°1</span> de Latinoamérica.{' '}
                  <Link href="/inscribirme" className="whitespace-nowrap font-semibold ">
                    <span className="absolute inset-0" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                Gestión de carreras profesionales en OnlyFans
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                <span className="font-bold">Iconika</span> es una agencia de representación
                de <span className="font-bold">modelos emergentes</span> en
                la industria del contenido para OnlyFans.
              </p>
              <div className="mt-6 flex items-center gap-x-6">
                <Link
                  href="/inscribirme"
                  className="uppercase tracking-wide rounded-md bg-gray-950 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-gray-950"
                >
                  Inscribite
                </Link>
                <Link href="/inscribirme" className="text-sm font-semibold leading-6 text-gray-900">
                  Contactanos <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:inline-block h-full relative lg:col-span-6 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <Image
              fill
              className="lg:rounded-bl-[33%] w-full object-cover lg:aspect-auto lg:h-full object-[-75px] sm:object-center"
              src={pic1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}