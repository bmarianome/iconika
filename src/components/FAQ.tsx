"use client"
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid";
import Link from "next/link";


export default function FAQ() {
  return (
    <div className="relative" id="FAQ">

      <div className="absolute left-0 bottom-0 w-[10%] h-auto hidden lg:inline-block">
        <svg className="w-full h-auto" width="844" height="1135" viewBox="0 0 844 1135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0V1135H843.5C831 1068 730 809.5 556.5 718.5C433.5 661 163 582 163 404.5C154 317 222.5 26.5 0 0Z" fill="black" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Preguntas frecuentes
          </h2>
          <dl className="mt-6 lg:mt-10 gap-6 grid grid-cols-1 md:grid-cols-2">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <div className="border-b border-gray-300 pb-4">
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-sm leading-6 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

const faqs = [
  {
    question: "¿Cuál es su estructura de precios?",
    answer: "Nuestra estructura de precios se basa en una tarifa  mínima y un porcentaje de los ingresos. Las tarifas dependen del tamaño de su cuenta. Por favor, contáctenos para solicitar una propuesta para su cuenta."
  },
  {
    question: "¿Qué debo esperar del proceso de propuesta?",
    answer: "Después de enviarnos su información, le pedimos que espere uno o dos días para que nuestro equipo le responda. Haremos algunas preguntas de seguimiento y programaremos una llamada de descubrimiento para asegurarnos de que pueda hacer todas las preguntas que desee a nuestro equipo. Después de esa llamada, prepararemos una propuesta para que la revise y apruebe."
  },
  {
    question: "¿Qué debo esperar del proceso de incorporación?",
    answer: "Una vez que la propuesta sea aprobada, nuestro equipo programará una llamada de incorporación con usted para establecer la logística, la configuración de comunicación con su gerente de cuenta, el calendario de contenido y comprender cualquier limitación que pueda tener con sus seguidores."
  },
  {
    question: "¿Qué es una llamada de descubrimiento?",
    answer: "La llamada de descubrimiento es una excelente oportunidad para programar con nuestro equipo y hacer todas las preguntas, conocer a un gerente de cuenta y ayudar a nuestro equipo a comprender mejor su cuenta antes de elaborar una propuesta para usted."
  },
  {
    question: "¿Mantengo los derechos de mi contenido?",
    answer: "Todos los derechos de contenido le pertenecen, no somos propietarios de ningún contenido proporcionado por usted."
  },
  {
    question: "¿Con qué tipo de creadores trabajas?",
    answer: "Nos enfocamos en cuentas pequeñas y grandes. Por lo general, no trabajamos con cuentas de inicio a menos que cuenten con un gran número de seguidores en las redes sociales. Sin embargo, si está comenzando, no dude en enviarnos su información, ya que nuestro equipo puede tener recomendaciones u otros recursos para usted."
  },
  {
    question: "¿Puedo programar una llamada para hablar más a fondo?",
    answer: "Absolutamente, por favor envíenos su información a través de uno de nuestros formularios de admisión y nos pondremos en contacto para programar una llamada de descubrimiento."
  },
  {
    question: "Si acepto la propuesta de ICONIKA, ¿cuánto tiempo pasará antes de que ICONIKA comience a producir resultados?",
    answer: "Esto depende. Por lo general, tenemos una gran cantidad de solicitudes de creadores en proceso, por lo que puede pasar algunas semanas antes de que podamos comenzar el proceso de incorporación. Una vez que hayamos incorporado completamente su cuenta, nuestro equipo realizará una auditoría de la cuenta para analizar en detalle los números y los datos y establecer un enfoque exitoso."
  },
  {
    question: "¿Qué hace un gestor de cuentas?",
    answer: "El gestor de cuenta es el enlace entre usted y el resto del equipo de ICONIKA. El equipo que gestiona su cuenta puede estar compuesto por varias personas, dependiendo del tamaño "
  },
  {
    question: "¿Cuánto contenido se espera que produzca?",
    answer: "El número mínimo de piezas de contenido se discutirá durante el proceso de descubrimiento e incorporación. Dicho esto, generalmente recomendamos un mínimo de 21 piezas de contenido por semana. Cuanto más contenido produzcas, mayores serán tus ventas. El contenido es uno de los indicadores más importantes para determinar si la cuenta se convertirá en un éxito masivo o se estancará con el tiempo."
  },
  {
    question: "¿Qué información necesitas de mí para empezar?",
    answer: "La información de tu cuenta es la más útil para que nuestro equipo la revise y elabore una propuesta. Al enviar tu información en nuestro sitio, por favor sea lo más detallado posible."
  },
  {
    question: "¿Cuáles son todas las responsabilidades del creador?",
    answer: "La creación de contenido es la responsabilidad principal. El equipo de ICONIKA se encarga del resto en tu nombre."
  },
  {
    question: "¿Cómo se manejan las solicitudes personalizadas?",
    answer: "Tendrás una línea de comunicación directa con tu gerente de cuenta a través de WhatsApp. El gerente de cuenta te enviará cualquier solicitud personalizada de un fanático. Puedes optar por aceptarla o rechazarla."
  },
  {
    question: "¿Cómo me comunico con el gestor de cuentas?",
    answer: "Tendrás una línea de comunicación directa con tu gestor  a través de WhatsApp."
  },
  {
    question: "¿Organizas el feed?",
    answer: "Sí, nuestro equipo revisará tu contenido en tu feed y lo organizará para que los usuarios de ICONIKA puedan encontrar y rastrear fácilmente el contenido cada día."
  },
  {
    question: "¿Mi equipo de ICONIKA también se encarga de la creación de subtítulos?",
    answer: "Sí, lo hacemos."
  },
  {
    question: "Mi solicitud a ICONIKA fue rechazada. ¿Qué más puedo hacer?",
    answer: "Si tu solicitud fue rechazada automáticamente, puede ser porque tu cuenta es demasiado pequeña o es una cuenta de inicio. Si ese es el caso, puedes comunicarte con nuestro personal individualmente en el correo electrónico que se encuentra a continuación para solicitar una reconsideración o una recomendación a otra agencia que pueda ayudar a cuentas más pequeñas como la tuya."
  },
]

