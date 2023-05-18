import Image from "next/image"
import pic1 from "public/cta/pic1.jpg"
import pic2 from "public/cta/pic2.jpg"


export default function Example() {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 lg:px-8">
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
