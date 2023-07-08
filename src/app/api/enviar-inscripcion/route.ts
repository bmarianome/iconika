import { type NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "~/components/email-template"; 
import { Resend } from "resend";
import { env } from "~/env.mjs";
import { inscripcionSchema } from "../../utils/inscripcion";

export const runtime = 'edge'

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const inscripcionData = {
      data: {
        "full-name": formData.get("full-name"),
        "phone-number": formData.get("phone-number"),
        "horas-disponibles": formData.get("horas-disponibles"),
        "copiar-videos": formData.get("copiar-videos"),
        "disposicion-contenido-adultos": formData.get(
          "disposicion-contenido-adultos"
        ),
        "mayor-edad": formData.get("mayor-edad"),
        accounts: formData.get("accounts"),
        message: formData.get("message"),
      },
      files: formData.getAll("file-upload"),
    };

    const isValid = inscripcionSchema.safeParse(inscripcionData);
    if (isValid.success) {
      
      const filesToSend = await Promise.all(
        isValid.data.files.map(async (file) => {
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);

          return { filename: file.name, content: buffer };
        })
      );

      await resend.sendEmail({
        from: `Iconika inscripciones <${env.EMAIL_SENDER}>`,
        to: env.EMAIL_RECEIVER,
        subject: "Nueva solicitud para inscripcion desde el sitio web",
        react: EmailTemplate({
          nombre: isValid.data.data["full-name"],
          telefono: isValid.data.data["phone-number"],
          horasDisponibles: isValid.data.data["horas-disponibles"],
          accounts: isValid.data.data["accounts"],
          message: isValid.data.data["message"],
        }),
        attachments: filesToSend,
      });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ ok: false, error: err }, { status: 500 });
  }
}
