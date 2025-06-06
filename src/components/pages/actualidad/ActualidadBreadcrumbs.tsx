import React from 'react';
import Link from 'next/link';

export const ActualidadBreadcrumbs: React.FC = () => {
  return (
    <nav className="w-full bg-[#FFCE10] py-2">
      <div className="max-w-[1080px] mx-auto px-4">
        <div className="flex items-center text-[12.8px] font-roboto font-light text-[#292929]">
          <Link href="/" className="hover:underline">
            Portada
          </Link>
          <span className="mx-2">»</span>
          <span>Actualidad</span>
        </div>
      </div>
    </nav>
  );
};
