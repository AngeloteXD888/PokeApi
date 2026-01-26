import { useState } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import LastSearch from './LastSearch'

const MainApp = () => {
  // Estado para guardar las búsquedas
  const [historial, setHistorial] = useState<string[]>([])

  // Función para agregar una búsqueda al historial
  const handleSearch = (query: string) => {
    // Solo agregar si no está vacío
    if (query.trim()) {
      setHistorial([...historial, query])
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <LastSearch searches={historial} />
    </div>
  )
}

export default MainApp