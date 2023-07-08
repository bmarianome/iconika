import { type NextRequest, NextResponse } from "next/server";
import { env } from "~/env.mjs";
import { inscripcionSchema } from "../../utils/inscripcion";

export const runtime = "edge";
export const dynamic = "force-dynamic";

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

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `Iconika inscripciones <${env.EMAIL_SENDER}>`,
          to: env.EMAIL_RECEIVER,
          subject: "Nueva solicitud para inscripcion desde el sitio web",
          html: `
            <h1>Nueva solicitud para inscripcion desde el sitio web</h1>
            <p>
              <strong>• Nombre</strong>: 
              ${isValid.data.data["full-name"]}
            </p>
            <p>
              <strong>• Telefono</strong>: 
              ${isValid.data.data["phone-number"]}
            </p>
            <p>
              <strong>• Horas</strong> 
              disponibles: ${isValid.data.data["horas-disponibles"]}
            </p>
            <p>
              <strong>• Cuentas</strong>: 
              ${isValid.data.data["accounts"]}
            </p>
            <p>
              <strong>• Mensaje</strong>: 
              ${isValid.data.data["message"]}
            </p>
          `,
          attachments: filesToSend,
        }),
      });

      if (res.ok) {
        return NextResponse.json({ ok: true }, { status: 200 });
      } else {
        const data = await res.json() as object;
        console.log(data)
        return NextResponse.json({ ok: false, error: data }, { status: 500 });
      }
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ ok: false, error: err }, { status: 500 });
  }
}
