import React from 'react';
import Link from 'next/link';

export const ProyectosBreadcrumbs: React.FC = () => {
  return (
    <nav className="w-full bg-gray-50 border-b border-gray-200">
      <div className="max-w-[1500px] mx-auto px-4 py-3">
        <div className="max-w-[1440px] mx-auto">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link 
                href="/" 
                className="hover:text-purple-600 transition-colors duration-200"
              >
                Inicio
              </Link>
            </li>
            <li className="flex items-center">
              <svg 
                className="w-4 h-4 mx-2 text-gray-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span className="text-gray-900 font-medium">Proyectos</span>
            </li>
          </ol>
        </div>
      </div>
    </nav>
  );
};
