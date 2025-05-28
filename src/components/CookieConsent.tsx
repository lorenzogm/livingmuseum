'use client';

import { useState, useEffect } from 'react';
import Text from './Text';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleManage = () => {
    const accepted = confirm('¿Aceptas el uso de cookies para mejorar tu experiencia en nuestro sitio web?');
    if (accepted) {
      handleAccept();
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleManage}
      className="fixed bottom-5 left-5 right-5 md:right-auto bg-black/90 border border-white/30 px-5 py-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-white/10 z-50"
      aria-label="Gestionar consentimiento"
    >
      <Text variant="small">
        Gestionar consentimiento
      </Text>
    </button>
  );
}
