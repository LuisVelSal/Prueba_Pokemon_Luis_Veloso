import axios from 'axios';

// Función para obtener la lista de pokemones
export const getPokemon = async() => {
    const URL_BASE = 'https://pokeapi.co/api/v2/pokemon'
    const {data} = await axios.get (URL_BASE)
    return data.results
}

// Función para obtener información detallada de cada pokemon
export const getPokemonInfo = async(listPokemon, pokeList) => {
    listPokemon.forEach( async (pokemon) => {
            const { data } = await axios.get(pokemon.url)
            const { name, sprites: { other: { dream_world: { front_default }}}} = data
            const pokemonInfo = {
                name,
                front_default
            }

            pokeList.push(pokemonInfo)
        });
}

