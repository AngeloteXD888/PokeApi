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
        placeholder="Busca un Pokémon por nombre o ID..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full md:w-96 px-4 py-3 rounded-lg text-lg
                   bg-gray-800 border-2 border-gray-600 text-white
                   focus:outline-none focus:border-green-500 transition"
      />

      {/* Botón */}
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600
                   text-white text-lg font-semibold
                   px-10 py-3 rounded-lg transition
                   disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!query.trim()}
      >
        Buscar
      </button>
    </div>
  )
}

export default SearchBar