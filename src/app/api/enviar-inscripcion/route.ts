import { type NextRequest, NextResponse } from "next/server";
import { env } from "~/env.mjs";
import { type InscripcionData } from "../../../utils/inscripcion";

const getFilesList = (filesUrls: {
  fileUrl: string;
  fileKey: string;
}[]) => filesUrls.map(({ fileUrl, fileKey }) => `
  <li>
    <a href="${fileUrl}" target="_blank">${fileKey}</a>
  </li>
`).join("");


export async function POST(request: NextRequest) {
  try {
    const { data: inscripcionData, filesUrls } = 
    await request.json() as {
      data: InscripcionData["data"];
      filesUrls: {
        fileUrl: string;
        fileKey: string;
    }[];
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
          ${inscripcionData["accounts"] &&
            `<p>
              <strong>• Cuentas:</strong>
              ${inscripcionData["accounts"]}
            </p>`
          }
          ${inscripcionData["message"] &&
            `<p>
              <strong>• Mensaje:</strong>
              ${inscripcionData["message"]}
            </p>`
          }
          <p><strong>• Archivos:</strong></p>
          <ul>
            ${getFilesList(filesUrls)}
          </ul>
        `,
      }),
    });

    if (res.ok) {
      return NextResponse.json({ ok: true }, { status: 200 });
    } else {

      const data = await res.json() as object;
      console.log(data)
      
      return NextResponse.json({ ok: false }, { status: 500 });
    }

  } catch (err) {
    console.log(err);
    return NextResponse.json({ ok: false, error: err }, { status: 500 });
  }
}
