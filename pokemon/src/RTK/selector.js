import { createSelector } from "@reduxjs/toolkit";


// 원하는 id 값의 데이터만 불러오도록
export const selectPokemonById = (pokemonId) => createSelector(
    state => state.pokemon.data,
    (pokemon) => {
        return (pokemon.find(el => el.id === pokemonId))
    }
)