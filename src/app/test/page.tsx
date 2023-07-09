"use client"
import imageCompression from "browser-image-compression";
import { inscripcionSchema } from "~/app/utils/inscripcion";
import { PhotoIcon } from "@heroicons/react/20/solid";
import { useLoader } from "~/app/utils/useLoader";
import { useState } from "react";
import Loader from "~/components/Loader";

const getAmountOfFiles = () => {
  const input = document.getElementById('file-upload') as HTMLInputElement
  return input.files?.length || 0
}

function Test() {

  const { loading, setLoading, setSuccess, finish } = useLoader()
  const [amountOfFiles, setAmountOfFiles] = useState(0)

  async function enviarInscripcion(e: React.FormEvent<HTMLFormElement>) {

    if (loading) return
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const inscripcionData = {
      data: {
        'full-name': 'full-name',
        'phone-number': 'phone-number',
        'horas-disponibles': 'horas-disponibles',
        'copiar-videos': 'on',
        'disposicion-contenido-adultos': 'on',
        'mayor-edad': 'on',
        'accounts': '',
        'message': '',
      },
      files: formData.getAll('file-upload')
    }

    const isValid = inscripcionSchema.safeParse(inscripcionData);
    if (!isValid.success) {
      const errores = isValid.error.issues.map(issue => issue.message)
      return alert(`\n• Errores: 
        \n${errores.join('\n')}
      `)
    }

    setLoading(true)

    const optimizedFiles = await Promise.all(isValid.data.files.map(file => {
      // IF THE FILE IS BIGGER THAN 3.9MB, COMPRESS IT
      // if (file.size < 3900000) return file
      return imageCompression(file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
      })
    })).catch(err => {
      console.log(err)
      setLoading(false)
      throw alert("Hubo un error al enviar tu inscripción, por favor inténtalo de nuevo (Error al optimizar imágenes)");
    })

    const filesToBuffer = await Promise.all(
      optimizedFiles.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        return { filename: file.name, content: buffer };
      })
    );

    const res = await fetch("/api/enviar-inscripcion", {
      method: "POST",
      body: JSON.stringify({
        data: isValid.data.data,
        files: filesToBuffer,
      }),
    })

    if (res.ok) {
      setSuccess(true);
      (document.querySelector('.formInscripcion') as HTMLFormElement).reset()
    } else {
      alert("Hubo un error al enviar tu inscripción, por favor inténtalo de nuevo");

      const error = await res.json() as object;
      console.log(error)

      setLoading(false)
      setTimeout(() => finish(), 1000);
    }
  }

  return (
    <div className="w-full relative min-h-[100lvh] pt-8 px-6">
      <Loader />
      <form className='formInscripcion mt-8' onSubmit={(e) => void enviarInscripcion(e)}>
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

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Enviar
          </button>
        </div>

      </form>

    </div>
  );
}

export default Test;