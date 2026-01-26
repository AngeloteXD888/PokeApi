import { useState, useEffect } from 'react';

interface LastSearchProps {
  searches: string[];
  onSearchClick?: (search: string) => void;
}

const LastSearch = ({ searches, onSearchClick }: LastSearchProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 px-4">
      <div className="border border-gray-600 rounded-lg p-6 bg-gray-800/50">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Últimas búsquedas
        </h2>
        
        {searches.length === 0 ? (
          <p className="text-gray-400 text-center py-4">
            No hay búsquedas recientes
          </p>
        ) : (
          <div className="flex flex-wrap gap-3 justify-center">
            {searches.map((search, index) => (
              <button
                key={index}
                onClick={() => onSearchClick?.(search)}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full 
                         transition-colors duration-200 capitalize border border-gray-600
                         hover:border-gray-500"
              >
                {search}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LastSearch;