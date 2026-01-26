import React, { useState } from 'react'
import Header from './Header';
import SearchBar from './SearchBar';
import LastSearch from './LastSearch';

interface Pokemon {
    imagen: string;
    imagenHD: string;
    tipos: string[];
}

const App = () => {

    const[historial, setHistorial] = useState<string[]>([])

    const handleSearch = (query:string) => {
        setHistorial([...historial, query])
    }
  return (
    <div>
        <Header>
            <SearchBar texto = "Escribe aqui..." onUpdateHistorial={handleSearch}></SearchBar>
            <LastSearch pokemons={pokemons}></LastSearch>
        </Header>
    </div>
  )
}

export default App