import * as React from "react";
import { Body, Container, Html, Section, Tailwind, Text } from '@react-email/components';

interface EmailTemplateProps {
  nombre: string;
  telefono: string;
  horasDisponibles?: string;
  accounts?: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nombre, telefono, horasDisponibles, accounts, message
}) => (
  <Tailwind>
    <Html>
      <Body className="flex items-start justify-start">
        <Container className="bg-[#fafafa] p-6 rounded-2xl border border-gray-300">
          <h1>Datos del usuario:</h1>
          <Container className="flex flex-col gap-1 mt-6">
            <Section className="flex gap-2 font-medium text-base">
              <Text className="font-semibold inline">Nombre: {"  "}</Text>
              <span>{nombre}</span>
            </Section>
            <Section className="flex gap-2 font-medium text-base">
              <Text className="font-semibold inline">Teléfono: {"  "}</Text>
              <span>{telefono}</span>
            </Section>
            {horasDisponibles &&
              <Section className="flex gap-2 font-medium text-base">
                <Text className="font-semibold inline">Horas Disponibles: {"  "}</Text>
                <span>{horasDisponibles}</span>
              </Section>
            }
            {accounts &&
              <Section className="flex gap-2 font-medium text-base">
                <Text className="font-semibold inline">Cuentas: {"  "}</Text>
                <span>{accounts}</span>
              </Section>
            }
            {message &&
              <Section className="flex gap-2 font-medium text-base">
                <Text className="font-semibold inline">Mensaje: {"  "}</Text>
                <span>{message}</span>
              </Section>
            }
          </Container>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);