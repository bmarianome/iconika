import { ChatBubbleBottomCenterTextIcon, CurrencyDollarIcon, UserGroupIcon, VideoCameraIcon } from '@heroicons/react/20/solid'

const servicios = [
  {
    name: 'Only Fans & Redes sociales',
    description:
      'Creación y gestión de perfiles en redes sociales.',
    icon: () => <div className="h-max w-max">
      <svg className="mt-1 -ml-1 h-9 w-9  text-gray-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"></path>
      </svg>
    </div>,
  },
  // {
  //   name: 'Estudio profesional',
  //   description:
  //     'Obtené contenido de calidad para tu OnlyFans y atraé más subscriptores.',
  //   icon: CurrencyDollarIcon,
  // },
  {
    name: 'Gestión de cartera & pagos',
    description:
      'Te ayudamos a mejorar tu contenido, a conseguir más subscriptores y a generar más ingresos.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Chateadores',
    description: 'Ofrecemos servicio de chat para tus susbscriptores.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Grupos de Apoyo',
    description:
      'Formarás parte de la comunidad de modelos de Iconika.',
    icon: UserGroupIcon,
  },
  {
    name: 'Asesoría de Imagen',
    description: 'Te ayudamos a mejorar tu imagen y a conseguir más subscriptores.',
    icon: VideoCameraIcon,
  },
]

export default function Content() {
  return (
    <div className="relative isolate overflow-hidden px-6 py-8 sm:pb-0 sm:pt-24 lg:overflow-visible lg:px-0">

      <div className="absolute left-0 top-0 w-[10%] h-auto hidden lg:inline-block">
        <svg className="w-full h-auto" width="1353" height="1104" viewBox="0 0 1353 1104" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.00012207 1103.5V0H1352.5C1278.5 133 1213.5 431 807.999 480.5C545.999 516.5 452.5 553.5 316.5 658C191.07 754.378 39.5 1067 -0.00012207 1103.5Z" fill="black" />
        </svg>
      </div>

      <div className="mx-auto lg:pl-8 grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-6">

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 ">
                Servicios para tu carrera
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Una agencia profesional a tu disposición
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-900">
                <span className="font-bold">Iconika</span> ofrece un servicio <span className="font-bold">integral</span> para que puedas dedicarte a lo que más te gusta: <span className="font-bold">crear contenido</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 ml-auto lg:-mt-12 lg:sticky lg:top-16 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden w-full">
          <div className="relative w-[125%] max-w-none bg-gray-900 ring-1 ring-gray-400/10 aspect-video rounded-2xl overflow-hidden">
            <video src="/content/vid.mp4" className="w-full h-full object-cover" autoPlay playsInline muted loop></video>
          </div>
        </div>

        <div className="mt-8 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-900 lg:max-w-xl">

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                • Nuestros servicios
              </h2>
              <ul role="list" className="mt-8 space-y-4 sm:space-y-8 text-gray-900">
                {servicios.map((servicio, index) => (
                  <li key={index} className="flex gap-x-3">
                    <servicio.icon className="mt-1 h-8 w-8 flex-none " aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">{servicio.name}. </strong>
                      <br />
                      {servicio.description}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-8 text-2xl sm:text-3xl font-bold tracking-tight text-gray-950">
                • Del estudio a la cima
              </h2>
              <p className="mt-4">
                En Iconika, valoramos la <span className='font-semibold'>honestidad, la transparencia y el compromiso</span> con
                nuestros modelos y con nuestra comunidad en línea.
                Nuestro objetivo es representar a modelos que buscan construir una
                carrera exitosa en la industria del contenido para OnlyFans y brindarles
                el apoyo necesario para alcanzar sus metas. Nos enfocamos en trabajar
                con modelos <span className='font-semibold'>comprometidos, talentosos y apasionados</span>, para ofrecerles un servicio integral.
              </p>
              <h2 className="mt-8 text-2xl sm:text-3xl font-bold tracking-tight text-gray-950">
                • Nuestra prioridad es tu seguridad
              </h2>
              <p className="mt-4">
                En OnlyFans, la <span className='font-semibold'>privacidad y la seguridad</span> son una prioridad. En Iconika, nos aseguramos de que nuestros modelos estén protegidos y de que sus cuentas sean gestionadas de manera profesional. Ofrecemos servicios de gestión de redes sociales y OnlyFans, así como asesoramiento para el crecimiento y la expansión de la actividad de nuestros modelos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}