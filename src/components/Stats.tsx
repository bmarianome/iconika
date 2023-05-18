import Image from "next/image"
import pic1 from "public/cta/pic1.jpg"

const stats = [
  { id: 1, name: 'Creadores de contenido', value: '1.000+' },
  { id: 2, name: 'Top mundial de modelos', value: '1%' },
  { id: 4, name: 'Ganacias de nuestras modelos', value: '7 cifras' },
  { id: 3, name: 'Carreras profesionalizadas', value: '100%' },
]

export default function Stats() {
  return (
    <div className="relative">
      <div className="relative h-96 w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2 ">
        <Image
          fill
          className="object-cover lg:rounded-r-3xl"
          src={pic1}
          alt=""
        />
      </div>
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-base font-semibold leading-8 text-black">Our track record</h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Un estudio profesional a tu disposición
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
              dolor cupiditate blanditiis ratione.
            </p>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
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
