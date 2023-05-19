import Image from "next/image"
import pic1 from "public/cta/pic1.jpg"
import pic2 from "../../public/hero/pic2.jpg"
import pic3 from "../../public/hero/pic3.jpg"


const stats = [
  { id: 1, name: 'Creadores de contenido', value: '1.000+' },
  { id: 2, name: 'Top mundial de modelos', value: '1%' },
  { id: 4, name: 'Ganacias de nuestras modelos', value: '7 cifras' },
  { id: 3, name: 'Carreras profesionalizadas', value: '100%' },
]

export default function Stats() {
  return (
    <div className="relative">


      <div className="relative h-72 sm:h-96 w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2 ">
        <div className="absolute right-0 top-full w-[20%] h-auto lg:hidden -scale-100">
          <svg className="w-full h-auto" width="844" height="1135" viewBox="0 0 844 1135" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0V1135H843.5C831 1068 730 809.5 556.5 718.5C433.5 661 163 582 163 404.5C154 317 222.5 26.5 0 0Z" fill="black" />
          </svg>
        </div>
        <div className="lg:hidden">
          <Image
            fill
            className="object-cover lg:rounded-r-3xl"
            src={pic1}
            alt=""
          />
        </div>
        <div className="hidden lg:inline-block">
          <Image
            fill
            className="object-cover lg:rounded-r-3xl"
            src={pic2}
            alt=""
          />
        </div>
      </div>
      <div className="mx-auto grid lg:grid-cols-2">
        <div className="px-6 py-8 sm:pb-24 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-24">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:ml-12 lg:max-w-xl">
            <h2 className="text-base font-semibold leading-8 text-gray-950">
              Sobre Iconika
            </h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Gestión de modelos emergentes{" "}
              <br />
              <span className="mt-6 inline-block text-2xl sm:text-3xl">
                • Top #1 de Latinoamérica
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nuestro objetivo es proporcionar a nuestros modelos las herramientas y
              la asistencia necesarias para <span className="font-bold">potenciar su carrera</span> en la industria del
              contenido para adultos, al tiempo que les ayudamos a crear contenido de
              alta calidad y a construir una comunidad de <span className="font-bold">seguidores leales</span>.
            </p>
            <dl className="mt-8 grid max-w-xl grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                  <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
