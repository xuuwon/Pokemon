import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchMulitiplePokemonById = createAsyncThunk(
    'pokemon/fetchMultiplePokemonById',
    async (maxpokemonId) => {
        const numberArray = Array.from({ length: maxpokemonId }, (_, idx) => idx + 1)

        const fetchAPI = async (pokemonId) => {

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
            const data = await response.json()

            const pokemonData = {
                id: pokemonId,
                name: data.names.find(el => el.language.name === 'ko').name,
                discription: data.flavor_text_entries.find(el => el.language.name === 'ko').flavor_text,
                front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
                back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`
            }

            return pokemonData
        }

        
        return await Promise.all(numberArray.map((el) => {
            return fetchAPI(el)
        }))
    }
)
