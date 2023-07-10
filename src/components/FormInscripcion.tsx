"use client"
import imageCompression from "browser-image-compression";
import { inscripcionSchema } from "~/utils/inscripcion";
import { PhotoIcon } from "@heroicons/react/20/solid";
import { useLoader } from "~/utils/useLoader";
import { useState } from "react";

import { useUploadThing } from "~/utils/uploadthing";

const getAmountOfFiles = () => {
  const input = document.getElementById('file-upload') as HTMLInputElement
  return input.files?.length || 0
}

const optimizeFiles = async (files: File[]) => {
  return await Promise.all(files.map(file => imageCompression(file, {
    maxSizeMB: .4,
    maxWidthOrHeight: 768,
  })))
}

function FormInscripcion() {

  const { loading, setLoading, setSuccess, finish, setWord } = useLoader()
  const [amountOfFiles, setAmountOfFiles] = useState(0)

  const { startUpload } = useUploadThing("imageUploader", {
    onUploadProgress(progress) {
      setWord(`Subiendo fotos... ${progress}%`)
    },
    onClientUploadComplete: () => {
      setWord(`Enviando datos...`)
    },
    onUploadError: (err) => {
      setLoading(false)
      alert("Hubo un error al enviar tu inscripción, por favor inténtalo de nuevo");
      console.log(err)
      setTimeout(() => finish(), 1000);
    },
  });

  async function enviarInscripcion(e: React.FormEvent<HTMLFormElement>) {

    if (loading) return
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const inscripcionData = {
      data: {
        'full-name': formData.get('full-name'),
        'country': formData.get('country'),
        'phone-number': formData.get('phone-number'),
        'horas-disponibles': formData.get('horas-disponibles'),
        'copiar-videos': formData.get('copiar-videos'),
        'disposicion-contenido-adultos': formData.get('disposicion-contenido-adultos'),
        'mayor-edad': formData.get('mayor-edad'),
        'accounts': formData.get('accounts'),
        'message': formData.get('message'),
      },
      files: formData.getAll('file-upload')
    }

    const inscripcion = inscripcionSchema.safeParse(inscripcionData);
    if (!inscripcion.success) {
      const errores = inscripcion.error.issues.map(issue => issue.message)
      return alert(`\n• Errores: 
        \n${errores.join('\n')}
      `)
    }

    setLoading(true)

    try {
      const optimizedFiles = await optimizeFiles(inscripcion.data.files)
      
      const filesUploaded = await startUpload(optimizedFiles)
  
      if (!filesUploaded || filesUploaded.length === 0) {
        throw new Error('No se pudieron subir los archivos')
      }
  
      const sendMail = await fetch("/api/enviar-inscripcion", {
        method: "POST",
        body: JSON.stringify({
          data: inscripcion.data.data,
          filesUrls: filesUploaded.map(file => file.fileUrl),
        }),
      })

      if (sendMail.ok) {
        setSuccess(true);
        setAmountOfFiles(0);
        (document.querySelector('.formInscripcion') as HTMLFormElement).reset()
      } else {
        throw new Error('No se pudo enviar el correo')
      }
    }

    catch (err) {
      console.log(err)
      setLoading(false)
      alert("Hubo un error al enviar tu inscripción, por favor inténtalo de nuevo");
    }
  }

  return (
    <form className='formInscripcion mt-8' onSubmit={(e) => void enviarInscripcion(e)}>
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="flex flex-col lg:grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

          <div>
            <label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Nombre completo
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="full-name"
                id="full-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-semibold leading-6 text-gray-900">
              País de residencia
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="country"
                id="country"
                autoComplete="country"
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
                type="number"
                name="horas-disponibles"
                id="horas-disponibles"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="accounts" className="block text-sm font-semibold leading-6 text-gray-900">
              Tienes alguna cuenta de redes sociales bien establecida? (Tiktok, IG, etc)
              Cuántos seguidores tienes en estas cuentas sociales?
            </label>
            <div className="mt-1">
              <textarea
                name="accounts"
                id="accounts"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>

          <div className="relative flex items-start lg:col-span-2">
            <div className="flex h-6 items-center">
              <input
                id="copiar-videos"
                aria-describedby="copiar-videos"
                name="copiar-videos"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="copiar-videos" className="font-medium text-gray-900">
                Puedo copiar los TikToks/videos/públicaciones que me envíen
                para que podamos usarlos para el marketing?
              </label>
            </div>
          </div>

          <div className="relative flex items-start lg:col-span-2">
            <div className="flex h-6 items-center">
              <input
                id="disposicion-contenido-adultos"
                aria-describedby="disposicion-contenido-adultos"
                name="disposicion-contenido-adultos"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="disposicion-contenido-adultos" className="font-medium text-gray-900">
                Estoy dispuesto/a a hacer contenido para adultos/sexual
              </label>
            </div>
          </div>

          <div className="relative flex items-start lg:col-span-2">
            <div className="flex h-6 items-center">
              <input
                id="mayor-edad"
                aria-describedby="mayor-edad"
                name="mayor-edad"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="mayor-edad" className="font-medium text-gray-900">
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
                    <span>
                      Click aquí para seleccionar fotos
                      {" "}
                      {(amountOfFiles > 0) && <>({amountOfFiles})</>}
                    </span>
                    <input 
                      onChange={() => setAmountOfFiles(getAmountOfFiles())} 
                      multiple id="file-upload" name="file-upload" type="file" className="sr-only" 
                    />
                  </span>
                </div>
              </div>
            </label>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Añade aquí lo que desees
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
  );
}

export default FormInscripcion;