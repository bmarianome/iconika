import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import FAQ from '~/components/FAQ'
import FormInscripcion from '~/components/FormInscripcion'

export default function Inscribirme() {
  return (
    <div className='bg-[#fafafa]'>
      <div className="relative isolate">

        <div className="absolute left-0 top-0 w-[10%] h-auto hidden lg:inline-block">
          <svg className="w-full h-auto" width="1353" height="1104" viewBox="0 0 1353 1104" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-0.00012207 1103.5V0H1352.5C1278.5 133 1213.5 431 807.999 480.5C545.999 516.5 452.5 553.5 316.5 658C191.07 754.378 39.5 1067 -0.00012207 1103.5Z" fill="black" />
          </svg>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">

          <div className="relative px-6 pb-8 pt-24 sm:pt-32 lg:static lg:px-8 lg:pt-40 xl:pt-48 lg:pb-40">

            <div className="absolute right-0 top-0 w-[20%] h-auto lg:hidden -scale-100">
              <svg className="w-full h-auto" width="844" height="1135" viewBox="0 0 844 1135" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V1135H843.5C831 1068 730 809.5 556.5 718.5C433.5 661 163 582 163 404.5C154 317 222.5 26.5 0 0Z" fill="black" />
              </svg>
            </div>

            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg lg:sticky top-20">

              <Link
                href='/'
                className="mt-8 lg:hidden inline-block text-center text-xs absolute top-4"
              >
                ← Volver al Inicio
              </Link>

              <h1 className="text-base font-semibold leading-8 text-gray-950">
                Inscripción
              </h1>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Iniciá tu carrera profesional{" "}
                <br />
              </h1>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Tienes una pregunta diferente y no encuentras la respuesta que estás buscando?
                Revisa nuestra sección de <Link href="/inscribirme#FAQ" className="font-bold hover:underline">
                  Preguntas frecuentes
                </Link>.
              </p>
              <dl className="mt-8 space-y-2  leading-8 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon className="h-7 w-6 text-black" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
                      +1 (555) 234-5678
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon className="h-7 w-6 text-black" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-gray-900" href="mailto:hello@example.com">
                      hello@example.com
                    </a>
                  </dd>
                </div>
              </dl>
              <Link
                href='/'
                className="mt-8 hidden lg:inline-block rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Volver al Inicio
              </Link>

            </div>

          </div>

          <div className="px-6 pb-24 pt-8 sm:pb-32 lg:px-8 lg:pt-40 xl:pt-48 lg:pb-40 relative">
            <div className="mx-auto lg:mr-0 lg:max-w-lg">
              <h1 className="font-bold tracking-tight text-gray-900 text-2xl sm:text-3xl">
                • Formulario de Inscripción
              </h1>
              <p className="mt-6 text-base leading-7 text-gray-600">
                De resultar seleccionada, un gestor de cuenta te contactará, y
                te explicará las condiciones. Y si estás de acuerdo, firmar un contrato.
              </p>
            </div>
            <FormInscripcion />
            
          </div>

        </div>

        {/* <div className="h-40 w-full bg-white"></div> */}
      </div>
      <FAQ />
    </div>
  )
}

