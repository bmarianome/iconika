import { EnvelopeIcon, PhoneIcon, PhotoIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import FAQ from '~/components/FAQ'
import logoBlancoFrase from 'public/logo-blanco-frase.png'

export default function Inscribirme() {
  return (
    <div className='bg-[#fafafa]'>
      <div className="relative isolate ">

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
            <form className='mt-8'>
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="flex flex-col lg:grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                  <div className='col-span-2'>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Nombre completo
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                      Teléfono (whatsapp)
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="horas-disponibles" className="block text-sm font-semibold leading-6 text-gray-900">
                      Horas al día disponibles
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="horas-disponibles"
                        id="horas-disponibles"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                      Tienes alguna cuenta de redes sociales bien establecida? (Tiktok, IG, etc)
                      Cuántos seguidores tienes en estas cuentas sociales?
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
                    </div>
                  </div>

                  <div className="relative flex items-start lg:col-span-2">
                    <div className="flex h-6 items-center">
                      <input
                        id="checkbox-input-1"
                        aria-describedby="checkbox-input-1"
                        name="checkbox-input-1"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="checkbox-input-1" className="font-medium text-gray-900">
                        Puedo copiar los TikToks/videos/públicaciones que me envíen
                        para que podamos usarlos para el marketing?
                      </label>
                    </div>
                  </div>

                  <div className="relative flex items-start lg:col-span-2">
                    <div className="flex h-6 items-center">
                      <input
                        id="checkbox-input-2"
                        aria-describedby="checkbox-input-2"
                        name="checkbox-input-2"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="checkbox-input-2" className="font-medium text-gray-900">
                        Estoy dispuesto/a a hacer contenido para adultos/sexual
                      </label>
                    </div>
                  </div>

                  <div className="relative flex items-start lg:col-span-2">
                    <div className="flex h-6 items-center">
                      <input
                        id="checkbox-input-3"
                        aria-describedby="checkbox-input-3"
                        name="checkbox-input-3"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="checkbox-input-3" className="font-medium text-gray-900">
                        Tengo más de 18 años
                      </label>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                      Envía aquí tus mejores fotos sexy (cuerpo completo), no desnudos.
                    </label>
                    <label htmlFor='file-upload' className="mt-2 flex justify-center rounded-lg hover:border-black hover:cursor-pointer hover:bg-white border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <span className="relative rounded-md font-semibold text-black"
                          >
                            <span>Click aquí para seleccionar fotos</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </span>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="mensaje" className="block text-sm font-semibold leading-6 text-gray-900">
                      Añade aquí lo que desees
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="mensaje"
                        id="mensaje"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>

        {/* <div className="h-40 w-full bg-white"></div> */}
      </div>
      <FAQ />
    </div>
  )
}

