import { useState } from "react";


interface BusqProps {
    value: string;
    placeholder: string;
}

function SearchBar({value, placeholder}: BusqProps) {
  const [query, setQuery] = useState(value);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
      
      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full md:w-96 px-4 py-3 rounded-lg text-lg
                   border-2 border-gray-300
                   focus:outline-none"
      />

      {/* Botón */}
      <button
        className="bg-green-500 hover:bg-green-600
                   text-white text-lg font-semibold
                   px-10 py-3 rounded-lg transition"
      >
        Buscar
      </button>
    </div>
  );
}


export default SearchBar