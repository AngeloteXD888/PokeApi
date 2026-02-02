import type { Pokemon, PokemonListResponse } from '../types/Pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

// Función para buscar un Pokémon específico por nombre o ID
export const getPokemon = async (nameOrId: string | number): Promise<Pokemon> => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${nameOrId.toString().toLowerCase()}`);
    
    if (!response.ok) {
      throw new Error('Pokémon no encontrado');
    }
    
    const data: Pokemon = await response.json();
    return data;
  } catch (error) {
    console.error('Error al buscar el Pokémon:', error);
    throw error;
  }
};

// Función para obtener una lista de Pokémon
export const getPokemonList = async (limit: number = 20, offset: number = 0): Promise<PokemonListResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    
    if (!response.ok) {
      throw new Error('Error al obtener la lista de Pokémon');
    }
    
    const data: PokemonListResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener la lista:', error);
    throw error;
  }
};

// Función para obtener múltiples Pokémon de una vez
export const getMultiplePokemon = async (names: string[]): Promise<Pokemon[]> => {
  try {
    const promises = names.map(name => getPokemon(name));
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error('Error al obtener múltiples Pokémon:', error);
    throw error;
  }
};