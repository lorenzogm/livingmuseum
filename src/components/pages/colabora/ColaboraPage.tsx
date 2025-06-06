'use client';

import { useState } from 'react';
import ColaboraHero from "./ColaboraHero";
import VoluntariadoSection from "./VoluntariadoSection";
import FormularioVoluntario from "./FormularioVoluntario";
import ParticipaSection from "./ParticipaSection";
import PatrocinadoresSection from "./PatrocinadoresSection";
import ContactoSection from "./ContactoSection";
import ColaboracionesSection from "./ColaboracionesSection";

export default function ColaboraPage() {
  const [activeTab, setActiveTab] = useState('voluntariado');

  const tabs = [
    { id: 'voluntariado', label: 'Voluntariado' },
    { id: 'unete', label: 'Únete a Living Museum' },
    { id: 'patrocinadores', label: 'Patrocinadores' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleContactClick = () => {
    setActiveTab('contacto');
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'voluntariado':
        return (
          <>
            <VoluntariadoSection />
            <FormularioVoluntario />
          </>
        );
      case 'unete':
        return (
          <>
            <ParticipaSection onContactClick={handleContactClick} />
            <ColaboracionesSection onContactClick={handleContactClick} />
          </>
        );
      case 'patrocinadores':
        return <PatrocinadoresSection onContactClick={handleContactClick} />;
      case 'contacto':
        return <ContactoSection />;
      default:
        return <VoluntariadoSection />;
    }
  };

  return (
    <main id="content" className="pt-24 bg-white">
      <ColaboraHero />
      
      {/* Tab Navigation */}
      <div className="py-8 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex border border-gray-300 overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 font-light transition-colors !rounded-none ${
                    activeTab === tab.id
                      ? 'text-black bg-yellow-500'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-screen">
        {renderTabContent()}
      </div>
    </main>
  );
}
