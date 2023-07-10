"use client"
import { CheckIcon } from "@heroicons/react/20/solid";
import logoNegro from 'public/logo-negro.png'
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { useLoader } from "~/utils/useLoader";
import { Fragment } from "react";

function Loader() {

  const { word, loading, setLoading, setWord, success, finish } = useLoader()

  return (
    <Transition.Root show={loading} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {
        setWord('Enviando datos')
        setLoading(false)
      }}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 "
          enterTo="opacity-100 translate-y-0 "
          leave="ease-in duration-500"
          leaveFrom="opacity-100 translate-y-0 "
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 "
        >
          <div className="fixed inset-0 bg-[#fafafa] h-[100svh]">
            <Dialog.Panel className='relative h-full'>

              <div className="absolute left-0 top-[-1px] w-[20%] h-auto -scale-y-100 lg:w-[10%]">
                <svg className="w-full h-auto" width="844" height="1135" viewBox="0 0 844 1135" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0V1135H843.5C831 1068 730 809.5 556.5 718.5C433.5 661 163 582 163 404.5C154 317 222.5 26.5 0 0Z" fill="black" />
                </svg>
              </div>

              <div className="absolute left-[-1px] bottom-0 h-auto w-[25%] lg:w-auto lg:h-[6rem] xl:h-[20%] -scale-y-100">
                <svg className="h-auto w-full lg:h-full lg:w-auto" width="1353" height="1104" viewBox="0 0 1353 1104" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-0.00012207 1103.5V0H1352.5C1278.5 133 1213.5 431 807.999 480.5C545.999 516.5 452.5 553.5 316.5 658C191.07 754.378 39.5 1067 -0.00012207 1103.5Z" fill="black" />
                </svg>
              </div>

              <div className="pt-16 px-6 sm:px-8 h-full">
                <div className="flex flex-col items-center h-full">
                  <Image
                    src={logoNegro}
                    className="w-64 sm:w-72 lg:w-full max-w-lg"
                    alt="Iconika"
                  />

                  <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:mt-10 lg:mt-16 sm:text-6xl">
                    ¡Felicitaciones!
                  </h1>
                  <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 text-center">
                    Tu <span className="font-bold">carrera profesional</span> acaba de iniciar.
                  </p>



                  {(!success) &&
                    <div className="mt-24 lg:mt-32 flex justify-center items-center gap-4 animate-[pulse_2s_infinite_linear]">
                      <div className="flex items-center justify-center relative">
                        <div className="absolute w-full h-full border-gray-300 border-[3px] rounded-full"></div>
                        <div className="w-8 h-8 border-[3px] border-t-transparent border-gray-900 rounded-full animate-spin"></div>
                      </div>

                      <div className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                        {word}
                      </div>
                    </div>
                  }

                  {(success) &&
                    <div className="mt-8 lg:mt-16 flex flex-col items-center p-6 gap-4 lg:gap-8 rounded-2xl shadow-2xl">
                      <div className="p-2 rounded-full bg-gray-900">
                        <CheckIcon className="w-8 h-auto text-[#fafafa]" />
                      </div>
                      <h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-gray-900">
                        Recibimos tus datos
                      </h1>
                      <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 text-center">
                        Revisaremos tu información y nos pondremos en contacto contigo.
                      </p>
                      <button
                        className="rounded-md bg-gray-950 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-gray-950 w-max"
                        onClick={() => {
                          setLoading(false)
                          return setTimeout(() => finish(), 1500)
                        }}
                      >
                        Cerrar
                      </button>
                    </div>
                  }


                </div>

              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

export default Loader;