import { type NextRequest, NextResponse } from "next/server";
import { env } from "~/env.mjs";
import { type InscripcionData } from "../../../utils/inscripcion";

export async function POST(request: NextRequest) {
  try {
    const { data: inscripcionData, filesUrls } = 
    await request.json() as {
      data: InscripcionData["data"];
      filesUrls: string[];
    };

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
            <strong>• Nombre:</strong>
            ${inscripcionData["full-name"]}, de ${inscripcionData["country"]}
          </p>
          <p>
            <strong>• Telefono:</strong>
            ${inscripcionData["phone-number"]}
          </p>
          <p>
            <strong>• Horas disponibles:</strong>
            ${inscripcionData["horas-disponibles"]}
          </p>
          <p>
            <strong>• Cuentas:</strong>
            ${inscripcionData["accounts"]}
          </p>
          <p>
            <strong>• Mensaje:</strong>
            ${inscripcionData["message"]}
          </p>
        `,
        attachments: filesUrls.map((url) => ({
          path: url,
        })),
      }),
    });

    if (res.ok) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

  } catch (err) {
    console.log(err);
    return NextResponse.json({ ok: false, error: err }, { status: 500 });
  }
}
