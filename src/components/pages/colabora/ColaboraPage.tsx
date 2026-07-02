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
      <div className="py-8 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            role="tablist"
            aria-label="Formas de colaborar"
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`tabpanel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 sm:px-6 sm:py-3 sm:text-base ${
                  activeTab === tab.id
                    ? 'bg-yellow-500 text-black shadow-sm'
                    : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="min-h-screen"
      >
        {renderTabContent()}
      </div>
    </main>
  );
}
