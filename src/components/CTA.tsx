import Image from "next/image"
import pic1 from "public/cta/pic1.jpg"
import pic2 from "public/cta/pic2.jpg"


export default function Example() {
  return (
    <div className="relative">

      <div className="absolute left-0 bottom-0 w-auto h-[20rem] ">
        <svg className="h-full w-auto" width="844" height="1135" viewBox="0 0 844 1135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0V1135H843.5C831 1068 730 809.5 556.5 718.5C433.5 661 163 582 163 404.5C154 317 222.5 26.5 0 0Z" fill="black" />
        </svg>
      </div>

      <div className="absolute right-0 bottom-0 w-auto h-[14rem] -scale-100">
        <svg className="h-full w-auto" width="1353" height="1104" viewBox="0 0 1353 1104" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.00012207 1103.5V0H1352.5C1278.5 133 1213.5 431 807.999 480.5C545.999 516.5 452.5 553.5 316.5 658C191.07 754.378 39.5 1067 -0.00012207 1103.5Z" fill="black" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl pb-24 pt-24 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-black px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Iniciá tu carrera profesional hoy
            </h2>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Inscribite.
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transformá tu vida. Elevamos tu carrera profesional para que obtengas fans, tiempo y ganancias.
            </p>
            <p className="mt-2 text-lg leading-8 text-white">
              Conocé Icónika.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Inscribirme ahora
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Ver casos de éxito <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 lg:mt-8 h-96 lg:h-auto">
            <div className="absolute z-10 inset-y-0 left-0 top-0 w-[48rem] sm:w-[54rem] lg:w-[48rem] max-w-none">
              <Image
                fill
                className="object-cover object-center rounded-tl-2xl"
                src={pic2}
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
