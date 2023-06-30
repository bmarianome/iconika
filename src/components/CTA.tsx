import Link from "next/link";
import Image from "next/image"
import pic2 from "public/cta/couple-2.jpeg"

export default function Example() {
  return (
    <div className="relative">

      <div className="absolute -scale-x-100 lg:scale-x-100 lg:right-auto right-0 lg:left-0 bottom-[calc(100%-1px)] lg:bottom-0 h-auto w-[25%] lg:w-auto lg:h-[10rem] xl:h-[25%] sm:hidden lg:inline-block">
        <svg className="h-auto w-full lg:h-full lg:w-auto" width="844" height="1135" viewBox="0 0 844 1135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0V1135H843.5C831 1068 730 809.5 556.5 718.5C433.5 661 163 582 163 404.5C154 317 222.5 26.5 0 0Z" fill="black" />
        </svg>
      </div>

      <div className="absolute right-0 bottom-full lg:bottom-0 h-auto w-[15%] lg:w-auto lg:h-[6rem] xl:h-[25%] -scale-100 hidden lg:inline-block">
        <svg className="h-auto w-full lg:h-full lg:w-auto" width="1353" height="1104" viewBox="0 0 1353 1104" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.00012207 1103.5V0H1352.5C1278.5 133 1213.5 431 807.999 480.5C545.999 516.5 452.5 553.5 316.5 658C191.07 754.378 39.5 1067 -0.00012207 1103.5Z" fill="black" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl sm:pb-24 mt-8 sm:mt-0 sm:pt-24 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-950 px-6 pt-16 shadow-2xl sm:rounded-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Iniciá tu carrera profesional hoy
            </h2>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Inscribite.
            </h3>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Transformá tu vida. Elevamos tu carrera profesional para que obtengas fans, tiempo y ganancias.
            </p>
            <p className="mt-2 text-lg leading-8 text-white">
              Conocé Iconika.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="/inscribirme"
                className="btn-1 w-full max-w-sm sm:w-max"
              >
                Inscribirme ahora
              </Link>
              <Link href="/inscribirme" className="text-sm font-semibold leading-6 text-white sm:inline hidden">
                Contactanos <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 lg:mt-8 h-96 lg:h-auto">
            <div className="absolute z-10 inset-y-0 left-0 top-0 w-[48rem] sm:w-[54rem] lg:w-[48rem] max-w-none">
              <Image
                fill
                className="object-cover object-center rounded-l-2xl lg:rounded-l-none lg:rounded-tl-2xl"
                src={pic2}
                alt="Modelos en Iconika"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
