import { useState } from 'react';
import Image from 'next/image';
import Text from '../../elements/Text';

export default function FamiliaSection() {
  const [activeTab, setActiveTab] = useState<'equipo' | 'artistas'>('equipo');

  const teamMembers = [
    {
      name: "Laura Carmona Ayuso",
      image: "/images/team/laura-carmona.jpg", // Placeholder - replace with actual image
      description: [
        "Arteterapeuta especializada en el ámbito clínico en salud mental (PDAG), Suiza",
        "Madre de dos niños y una niña",
        "Fundadora de Living Museum Madrid"
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/laura-carmona-ayuso-487bb05a/",
        instagram: "https://www.instagram.com/miss_on_the_road"
      }
    },
    {
      name: "Dra. Julia Morla",
      image: "/images/team/julia-morla.jpg", // Placeholder - replace with actual image
      description: [
        "Arteterapeuta",
        "Doctora en Estudios Feministas y de Género",
        "Docente e investigadora (Universidad Complutense de Madrid)",
        "Fundadora de Living Museum Madrid"
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/julia-morla-s%C3%A1nchez-17444a1a8/?originalSubdomain=es",
        instagram: "https://www.instagram.com/julietta.morla"
      }
    },
    {
      name: "Javier Lapuerta Laorden",
      image: "/images/team/javier-lapuerta.jpg", // Placeholder - replace with actual image
      description: [
        "Activista cultural dedicado a la promoción del acceso al arte y la participación ciudadana.",
        "Fundador de Living Museum Madrid"
      ],
      social: {
        instagram: "https://www.instagram.com/lapuerta"
      }
    },
    {
      name: "Piedad García-Murga",
      image: "/images/team/piedad-garcia.jpg", // Placeholder - replace with actual image
      description: [
        "Arteterapeuta",
        "Docente e investigadora predoctoral (Universidad Complutense de Madrid)",
        "Creadora y experta en primera persona",
        "Equipo de Living Museum Madrid"
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/piedadgms/",
        instagram: "https://www.instagram.com/maripiedaita"
      }
    },
    {
      name: "Dra. Marta Lage",
      image: "/images/team/marta-lage.jpg", // Placeholder - replace with actual image
      description: [
        "Doctora en Bellas Artes",
        "Docente e investigadora (Universidad Complutense de Madrid)",
        "Coordinadora del Máster Arteterapia y Educación Artística para la Inclusión Social",
        "Equipo de Living Museum Madrid"
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/martalagedelarosa/",
        instagram: "https://www.instagram.com/martalagedelarosa"
      }
    },
    {
      name: "Máriam Cáliz Cáceres",
      image: "/images/team/mariam-caliz.jpg", // Placeholder - replace with actual image
      description: [
        "Artista",
        "Arteteterapeuta en formación",
        "(Universidad Complutense de Madrid)"
      ],
      social: {
        instagram: "https://www.instagram.com/mariiammcc_"
      }
    }
  ];

  const artists = [
    { name: "ZARCO", url: "https://livingmuseum.madrid/zarco/", image: "/images/artists/zarco.jpg" },
    { name: "CARLOS MOLINA VALLEJO", url: "https://livingmuseum.madrid/carlos-molina-vallejo/", image: "/images/artists/carlos-molina.jpg" },
    { name: "Blanca Valcarce Quiroga", url: "https://livingmuseum.madrid/blanca-valcarce-quiroga/", image: "/images/artists/blanca-valcarce.jpg" },
    { name: "Miguel Ángel Ruiz", url: "https://livingmuseum.madrid/miguel-angel-ruiz/", image: "/images/artists/miguel-angel.jpg" },
    { name: "Gustavo Pannullo (G.A.P.)", url: "https://livingmuseum.madrid/gustavo-pannullo-gap/", image: "/images/artists/gustavo-pannullo.jpg" },
    { name: "Jose Manuel López", url: "https://livingmuseum.madrid/jose-manuel-lopez/", image: "/images/artists/jose-manuel.jpg" },
    { name: "Fernando José Escriña", url: "https://livingmuseum.madrid/fernando-jose-escrina/", image: "/images/artists/fernando-escrina.jpg" },
    { name: "Gabriel Pastor Guzmán", url: "https://livingmuseum.madrid/gabriel-pastor-guzman/", image: "/images/artists/gabriel-pastor.jpg" },
    { name: "Manuel Vela", url: "https://livingmuseum.madrid/manuel-vela/", image: "/images/artists/manuel-vela.jpg" }
  ];

  return (
    <section id="familia" className="py-24 px-10">
      <div className="max-w-6xl mx-auto">
        <Text variant="section" className="mb-12 text-center">
          FAMILIA LIVING MUSEUM
        </Text>
        
        <div className="bg-gray-900/30 p-8 rounded-lg">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex border-b-2 border-yellow-400">
              <button
                onClick={() => setActiveTab('equipo')}
                className={`px-8 py-3 font-medium transition-colors ${
                  activeTab === 'equipo'
                    ? 'text-white bg-yellow-400/20 rounded-t-lg'
                    : 'text-white/70 hover:text-white/90'
                }`}
              >
                EL EQUIPO
              </button>
              <button
                onClick={() => setActiveTab('artistas')}
                className={`px-8 py-3 font-medium transition-colors ${
                  activeTab === 'artistas'
                    ? 'text-white bg-yellow-400/20 rounded-t-lg'
                    : 'text-white/70 hover:text-white/90'
                }`}
              >
                ARTISTAS
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          {activeTab === 'equipo' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="aspect-square bg-gray-800/50 rounded-full w-32 h-32 mx-auto overflow-hidden relative flex items-center justify-center">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Placeholder content */}
                    <div className="absolute inset-0 flex items-center justify-center text-white/50">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                  <Text variant="heading" className="text-lg">
                    {member.name}
                  </Text>
                  <div className="space-y-2">
                    {member.description.map((desc, descIndex) => (
                      <Text key={descIndex} variant="small" className="block">
                        {desc}
                      </Text>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4 pt-2">
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.064-.926-2.064-2.065 0-1.138.92-2.063 2.064-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.instagram && (
                      <a 
                        href={member.social.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'artistas' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artists.map((artist, index) => (
                <a 
                  key={index}
                  href={artist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-center space-y-4 hover:opacity-80 transition-opacity"
                >
                  <div className="aspect-square bg-gray-800/50 rounded-lg overflow-hidden relative flex items-center justify-center">
                    <Image 
                      src={artist.image} 
                      alt={artist.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Placeholder content */}
                    <div className="absolute inset-0 flex items-center justify-center text-white/50">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                      </svg>
                    </div>
                  </div>
                  <Text variant="heading" className="text-lg group-hover:text-yellow-400 transition-colors">
                    {artist.name}
                  </Text>
                </a>
              ))}
            </div>
          )}
          
          <Text variant="small" className="italic text-center mt-10 text-gray-400">
            Fotografías de Marta Lage de la Rosa
          </Text>
        </div>
      </div>
    </section>
  );
}
