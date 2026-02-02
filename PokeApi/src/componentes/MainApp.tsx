import { useState } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import LastSearch from './LastSearch'
import PokemonCard from './PokemonCard'
import type { Pokemon } from '../types/Pokemon'
import { getPokemon } from '../assets/pokemonService'

const MainApp = () => {
  // Estado para guardar las búsquedas
  const [historial, setHistorial] = useState<string[]>([])
  // Estado para el Pokémon encontrado
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  // Estado para manejar errores
  const [error, setError] = useState<string>('')
  // Estado para indicar si está cargando
  const [loading, setLoading] = useState<boolean>(false)

  // Función para buscar un Pokémon
  const handleSearch = async (query: string) => {
    // Solo buscar si no está vacío
    if (!query.trim()) {
      setError('Por favor ingresa un nombre o ID de Pokémon')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      // Buscar el Pokémon usando la API
      const pokemonData = await getPokemon(query.toLowerCase())
      setPokemon(pokemonData)
      
      // Agregar al historial solo si la búsqueda fue exitosa
      // Evitar duplicados
      if (!historial.includes(query.toLowerCase())) {
        setHistorial([query.toLowerCase(), ...historial].slice(0, 10)) // Mantener solo los últimos 10
      }
    } catch (err) {
      setError('Pokémon no encontrado. Intenta con otro nombre o ID.')
      setPokemon(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 pb-10">
      <Header />
      <SearchBar onSearch={handleSearch} />
      
      {/* Indicador de carga */}
      {loading && (
        <div className="flex justify-center mt-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500"></div>
        </div>
      )}

      {/* Mensaje de error */}
      {error && (
        <div className="max-w-md mx-auto mt-10 px-4">
          <div className="bg-red-900/50 border border-red-500 text-red-200 px-6 py-4 rounded-lg text-center">
            {error}
          </div>
        </div>
      )}

      {/* Tarjeta del Pokémon */}
      {pokemon && !loading && (
        <div className="max-w-md mx-auto mt-10 px-4">
          <PokemonCard pokemon={pokemon} />
        </div>
      )}

      {/* Historial de búsquedas */}
      {historial.length > 0 && (
        <LastSearch searches={historial} />
      )}
    </div>
  )
}

export default MainApp