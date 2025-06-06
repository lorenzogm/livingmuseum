import { Metadata } from 'next';
import Text from '@/components/elements/Text';

export const metadata: Metadata = {
  title: 'Política de Privacidad y Cookies - Living Museum Madrid',
  description: 'Política de privacidad y uso de cookies de Living Museum Madrid. Información sobre el tratamiento de datos personales y uso de cookies en nuestra web.',
  keywords: 'política de privacidad, cookies, RGPD, protección de datos, Living Museum Madrid',
  authors: [{ name: 'Living Museum Madrid' }],
  openGraph: {
    title: 'Política de Privacidad y Cookies - Living Museum Madrid',
    description: 'Política de privacidad y uso de cookies de Living Museum Madrid. Información sobre el tratamiento de datos personales.',
    url: 'https://livingmuseum.madrid/politica-de-privacidad-y-cookies-eu',
    siteName: 'Living Museum Madrid',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Living Museum Madrid - Política de Privacidad',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Política de Privacidad y Cookies - Living Museum Madrid',
    description: 'Política de privacidad y uso de cookies de Living Museum Madrid.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://livingmuseum.madrid/politica-de-privacidad-y-cookies-eu',
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="pt-32 pb-16 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <Text variant="heading" className="mb-8 text-center text-yellow-500" transform="uppercase">
          Política de Privacidad y Cookies
        </Text>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <Text variant="heading" className="mb-4 text-gray-900">
              1. Información General
            </Text>
            <Text variant="body" className="mb-4">
              En cumplimiento de la normativa de protección de datos personales, informamos que los datos personales que nos facilite a través de esta página web serán tratados por <strong>Living Museum Madrid</strong> como responsable del tratamiento.
            </Text>
            <Text variant="body" className="mb-4">
              <strong>Responsable:</strong> Living Museum Madrid<br />
              <strong>Dirección:</strong> [Dirección completa]<br />
              <strong>Email:</strong> info@livingmuseum.madrid<br />
              <strong>Teléfono:</strong> [Número de teléfono]
            </Text>
          </section>

          <section className="mb-8">
            <Text variant="heading" className="mb-4 text-gray-900">
              2. Finalidades del Tratamiento
            </Text>
            <Text variant="body" className="mb-4">
              Los datos personales que nos proporcione serán tratados para las siguientes finalidades:
            </Text>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Gestión de consultas y solicitudes de información</li>
              <li>Envío de comunicaciones comerciales y newsletters (con su consentimiento)</li>
              <li>Gestión de participación en eventos y actividades</li>
              <li>Cumplimiento de obligaciones legales</li>
              <li>Análisis estadístico y mejora de nuestros servicios</li>
            </ul>
          </section>

          <section className="mb-8">
            <Text variant="heading" className="mb-4 text-gray-900">
              3. Legitimación
            </Text>
            <Text variant="body" className="mb-4">
              La base legal para el tratamiento de sus datos personales es:
            </Text>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Consentimiento:</strong> Para el envío de comunicaciones comerciales</li>
              <li><strong>Interés legítimo:</strong> Para la gestión de consultas y mejora de servicios</li>
              <li><strong>Cumplimiento de obligación legal:</strong> Para el cumplimiento de normativas aplicables</li>
            </ul>
          </section>

          <section className="mb-8">
            <Text variant="heading" className="mb-4 text-gray-900">
              4. Conservación de Datos
            </Text>
            <Text variant="body" className="mb-4">
              Los datos personales se conservarán durante el tiempo necesario para cumplir con las finalidades para las que fueron recogidos, y posteriormente durante los plazos legalmente establecidos.
            </Text>
          </section>

          <section className="mb-8">
            <Text variant="heading" className="mb-4 text-gray-900">
              5. Destinatarios
            </Text>
            <Text variant="body" className="mb-4">
              Sus datos personales no serán cedidos a terceros, salvo en los siguientes casos:
            </Text>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Cuando exista una obligación legal</li>
              <li>A proveedores de servicios técnicos necesarios para el funcionamiento de la web</li>
              <li>Con su consentimiento expreso</li>
            </ul>
          </section>

          <section className="mb-8">
            <Text variant="heading" className="mb-4 text-gray-900">
              6. Derechos del Usuario
            </Text>
            <Text variant="body" className="mb-4">
              Puede ejercer los siguientes derechos sobre sus datos personales:
            </Text>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Acceso:</strong> Conocer qué datos tratamos sobre usted</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
              <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
            </ul>
            <Text variant="body" className="mb-4">
              Para ejercer estos derechos, puede contactarnos en: <strong>info@livingmuseum.madrid</strong>
            </Text>
            <Text variant="body" className="mb-4">
              También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
            </Text>
          </section>

          <section className="mb-8">
            <Text variant="heading" className="mb-4 text-gray-900">
              7. Política de Cookies
            </Text>
            <Text variant="body" className="mb-4">
              Este sitio web utiliza cookies para mejorar la experiencia del usuario y analizar el tráfico web.
            </Text>
            
            <Text variant="heading" className="mb-3 text-gray-800">
              ¿Qué son las cookies?
            </Text>
            <Text variant="body" className="mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo.
            </Text>

            <Text variant="heading" className="mb-3 text-gray-800">
              Tipos de cookies que utilizamos:
            </Text>
            <div className="mb-4">
              <Text variant="body" className="mb-2">
                <strong>Cookies técnicas:</strong> Necesarias para el funcionamiento básico del sitio web.
              </Text>
              <Text variant="body" className="mb-2">
                <strong>Cookies de análisis:</strong> Nos ayudan a entender cómo los usuarios interactúan con el sitio web.
              </Text>
              <Text variant="body" className="mb-2">
                <strong>Cookies de personalización:</strong> Permiten recordar sus preferencias.
              </Text>
            </div>

            <Text variant="heading" className="mb-3 text-gray-800">
              Gestión de cookies:
            </Text>
            <Text variant="body" className="mb-4">
              Puede configurar su navegador para rechazar las cookies o recibir una notificación cuando se envían cookies. Sin embargo, si rechaza las cookies, es posible que no pueda utilizar todas las funciones de este sitio web.
            </Text>
          </section>

          <section className="mb-8">
            <Text variant="heading" className="mb-4 text-gray-900">
              8. Seguridad
            </Text>
            <Text variant="body" className="mb-4">
              Hemos implementado medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción.
            </Text>
          </section>

          <section className="mb-8">
            <Text variant="heading" className="mb-4 text-gray-900">
              9. Modificaciones
            </Text>
            <Text variant="body" className="mb-4">
              Nos reservamos el derecho a modificar esta política de privacidad en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en el sitio web.
            </Text>
          </section>

          <section className="mb-8">
            <Text variant="heading" className="mb-4 text-gray-900">
              10. Contacto
            </Text>
            <Text variant="body" className="mb-4">
              Si tiene alguna pregunta sobre esta política de privacidad o sobre el tratamiento de sus datos personales, puede contactarnos en:
            </Text>
            <Text variant="body" className="mb-4">
              <strong>Email:</strong> info@livingmuseum.madrid<br />
              <strong>Dirección:</strong> [Dirección completa]<br />
              <strong>Teléfono:</strong> [Número de teléfono]
            </Text>
          </section>

          <div className="border-t pt-6 mt-8">
            <Text variant="small" className="text-gray-600 text-center">
              Última actualización: {new Date().toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </Text>
          </div>
        </div>
      </div>
    </main>
  );
}
