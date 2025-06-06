"use client";
import { useState } from "react";

export default function ContactoSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
    privacidad: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Contact form submitted:", formData);
    alert("Mensaje enviado correctamente. ¡Nos pondremos en contacto contigo pronto!");
  };

  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Contacta
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Información de contacto
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700">
                      <a 
                        href="mailto:info@livingmuseum.es" 
                        className="text-blue-600 hover:underline"
                      >
                        info@livingmuseum.es
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Síguenos en redes sociales
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/living-museum-madrid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-lg transition-colors duration-200"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/livingmuseum.madrid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg transition-colors duration-200"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2.892c2.445 0 2.734.009 3.7.054.893.041 1.378.191 1.7.317.428.166.733.365 1.055.687.322.322.521.627.687 1.055.126.322.276.807.317 1.7.045.966.054 1.255.054 3.7s-.009 2.734-.054 3.7c-.041.893-.191 1.378-.317 1.7-.166.428-.365.733-.687 1.055-.322.322-.627.521-1.055.687-.322.126-.807.276-1.7.317-.966.045-1.255.054-3.7.054s-2.734-.009-3.7-.054c-.893-.041-1.378-.191-1.7-.317-.428-.166-.733-.365-1.055-.687-.322-.322-.521-.627-.687-1.055-.126-.322-.276-.807-.317-1.7-.045-.966-.054-1.255-.054-3.7s.009-2.734.054-3.7c.041-.893.191-1.378.317-1.7.166-.428.365-.733.687-1.055.322-.322.627-.521 1.055-.687.322-.126.807-.276 1.7-.317.966-.045 1.255-.054 3.7-.054zm0-2.892C7.518 0 7.198.013 6.211.06 5.225.107 4.547.278 3.96.525 3.352.78 2.833 1.124 2.315 1.642 1.797 2.16 1.453 2.679 1.198 3.287.951 3.874.78 4.552.733 5.538.686 6.525.673 6.845.673 10.001c0 3.156.013 3.476.06 4.463.047.986.218 1.664.465 2.251.255.608.599 1.127 1.117 1.645.518.518 1.037.862 1.645 1.117.587.247 1.265.418 2.251.465.987.047 1.307.06 4.463.06s3.476-.013 4.463-.06c.986-.047 1.664-.218 2.251-.465.608-.255 1.127-.599 1.645-1.117.518-.518.862-1.037 1.117-1.645.247-.587.418-1.265.465-2.251.047-.987.06-1.307.06-4.463s-.013-3.476-.06-4.463c-.047-.986-.218-1.664-.465-2.251-.255-.608-.599-1.127-1.117-1.645C16.127.599 15.608.255 15 .01 14.413-.237 13.735-.408 12.749-.455 11.762-.502 11.442-.515 8.287-.515zm0 5.026a4.286 4.286 0 100 8.572 4.286 4.286 0 000-8.572zm0 7.071a2.785 2.785 0 110-5.57 2.785 2.785 0 010 5.57zm5.463-7.618a1.001 1.001 0 11-2.002 0 1.001 1.001 0 012.002 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="contact-nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-apellido" className="block text-sm font-medium text-gray-700 mb-2">
                      Apellido *
                    </label>
                    <input
                      type="text"
                      id="contact-apellido"
                      name="apellido"
                      required
                      value={formData.apellido}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="contact-telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="contact-mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="contact-privacidad"
                    name="privacidad"
                    required
                    checked={formData.privacidad}
                    onChange={handleChange}
                    className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="contact-privacidad" className="text-sm text-gray-700">
                    Acepto la{" "}
                    <a href="/politica-de-privacidad" className="text-blue-600 hover:underline">
                      Política de Privacidad
                    </a>{" "}
                    *
                  </label>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
