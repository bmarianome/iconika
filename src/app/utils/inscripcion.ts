import { z } from "zod";

export const inscripcionSchema = z.object({
  data: z.object({
    'full-name': z.string().min(1, {
      message: "Debes ingresar tu nombre completo.",
    }),
    'phone-number': z.string().min(1, {
      message: "Debes ingresar tu número de teléfono.",
    }),
    'horas-disponibles': z.string().min(1, {
      message: "Debes ingresar tus horas disponibles.",
    }),
    'copiar-videos': z.string({
      invalid_type_error: "Debes aceptar que puedes copiar los videos.",
    }).min(1),
    'disposicion-contenido-adultos': z.string({
      invalid_type_error: "Debes aceptar que estás dispuesto a hacer contenido para adultos.",
    }).min(1),
    'mayor-edad': z.string({
      invalid_type_error: "Debes aceptar que eres mayor de edad.",
    }).min(1),
    'accounts': z.string(),
    'message': z.string(),
  }),
  files: z.array(z.custom<File>()).min(5, {
    message: "Debes subir al menos 5 fotos.",
  }).max(10, {
    message: "No puedes subir más de 10 fotos.",
  })

});

export type InscripcionData = z.infer<typeof inscripcionSchema>;
