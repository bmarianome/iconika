import { type NextRequest, NextResponse } from "next/server";
import { env } from "~/env.mjs";
import { type InscripcionData } from "../../utils/inscripcion";

export async function POST(request: NextRequest) {
  try {
    const { data: inscripcionData, files } = await request.json() as InscripcionData;

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
            ${inscripcionData["full-name"]}
          </p>
          <p>
            <strong>• Telefono:</strong> 
            ${inscripcionData["phone-number"]}
          </p>
          <p>
            <strong>• Horasdisponibles:</strong> 
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
        attachments: files,
      }),
    });
    
    const data = await res.json() as object;
    
    if (res.ok) {
      console.log(data)
      return NextResponse.json({ ok: true, data }, { status: 200 });
    } else {
      console.log(data)
      return NextResponse.json({ ok: false }, { status: 500 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ ok: false, error: err }, { status: 500 });
  }
}
