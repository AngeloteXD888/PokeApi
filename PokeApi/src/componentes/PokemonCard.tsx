import type { Pokemon } from '../types/Pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
}

// Función helper para obtener colores según el tipo
const getTypeColor = (type: string): string => {
  const colors: { [key: string]: string } = {
    normal: 'bg-gray-400',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    electric: 'bg-yellow-400',
    grass: 'bg-green-500',
    ice: 'bg-cyan-400',
    fighting: 'bg-red-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-600',
    flying: 'bg-indigo-400',
    psychic: 'bg-pink-500',
    bug: 'bg-lime-500',
    rock: 'bg-yellow-700',
    ghost: 'bg-purple-700',
    dragon: 'bg-indigo-600',
    dark: 'bg-gray-700',
    steel: 'bg-gray-500',
    fairy: 'bg-pink-300',
  };
  
  return colors[type] || 'bg-gray-400';
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 border-2 border-gray-700 hover:border-green-500 transition-all">
      {/* Imagen del Pokémon */}
      <div className="flex justify-center mb-4">
        <img
          src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-48 h-48 object-contain"
        />
      </div>

      {/* Nombre y ID */}
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold text-white capitalize mb-1">
          {pokemon.name}
        </h2>
        <p className="text-gray-400">#{pokemon.id.toString().padStart(3, '0')}</p>
      </div>

      {/* Tipos */}
      <div className="flex justify-center gap-2 mb-4">
        {pokemon.types.map((type, index) => (
          <span
            key={index}
            className={`${getTypeColor(type.type.name)} text-white px-4 py-1 rounded-full text-sm font-semibold capitalize`}
          >
            {type.type.name}
          </span>
        ))}
      </div>

      {/* Información básica */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-700 rounded p-3 text-center">
          <p className="text-gray-400 text-sm">Altura</p>
          <p className="text-white font-bold">{(pokemon.height / 10).toFixed(1)} m</p>
        </div>
        <div className="bg-gray-700 rounded p-3 text-center">
          <p className="text-gray-400 text-sm">Peso</p>
          <p className="text-white font-bold">{(pokemon.weight / 10).toFixed(1)} kg</p>
        </div>
      </div>

      {/* Habilidades */}
      <div className="mb-4">
        <h3 className="text-white font-semibold mb-2">Habilidades:</h3>
        <div className="flex flex-wrap gap-2">
          {pokemon.abilities.map((ability, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm capitalize"
            >
              {ability.ability.name.replace('-', ' ')}
            </span>
          ))}
        </div>
      </div>

      {/* Estadísticas */}
      <div>
        <h3 className="text-white font-semibold mb-2">Estadísticas:</h3>
        {pokemon.stats.map((stat, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400 capitalize">
                {stat.stat.name.replace('-', ' ')}
              </span>
              <span className="text-white font-semibold">{stat.base_stat}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{ width: `${(stat.base_stat / 255) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;