import { useState } from "react"

interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  // Estado para el texto del input
  const [query, setQuery] = useState("")

  // Función que se ejecuta al hacer clic en "Buscar"
  const handleClick = () => {
    onSearch(query)
    setQuery("") // Limpiar el input después de buscar
  }

  // Función para buscar al presionar Enter
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10 px-4">
      {/* Input */}
      <input
        type="text"
        placeholder="Escribe aquí..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full md:w-96 px-4 py-3 rounded-lg text-lg
                   border-2 border-gray-300
                   focus:outline-none focus:border-green-500"
      />

      {/* Botón */}
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600
                   text-white text-lg font-semibold
                   px-10 py-3 rounded-lg transition"
      >
        Buscar
      </button>
    </div>
  )
}

export default SearchBar