import Image from "next/image"
import pic2 from "public/cta/pic2.jpg"

export default function Example() {
  return (
    <div className="py-24">
      <div className="relative bg-gray-950 pb-12">
        <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <Image
            fill
            className="h-full w-full object-cover lg:rounded-r-2xl"
            src={pic2}
            alt=""
          />

        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-28 lg:px-8">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0">
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
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="btn-1 w-full max-w-sm sm:w-max"
              >
                Inscribirme ahora
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white sm:inline hidden">
                Ver casos de éxito <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
