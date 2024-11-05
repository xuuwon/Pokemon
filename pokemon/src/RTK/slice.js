import { createSlice } from "@reduxjs/toolkit";
import { fetchMulitiplePokemonById } from "./thunk";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: [],
        loading: true,
    },

    reducers: { // 동기적으로 상태를 변경할 때
    },

    extraReducers: (builder) => { // 비동기적으로 상태를 변경할 때
        builder
            .addCase(fetchMulitiplePokemonById.pending, (state) => 
            {
                state.loading = true;
            })
            .addCase(fetchMulitiplePokemonById.rejected, (state) =>
            {
                state.loading = false;
            })
            .addCase(fetchMulitiplePokemonById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
    }
})

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: [1, 2, 3],
    reducers: {
        addToFavorite(state, action) { state.push(action.payload.pokemonId) },
        removeFromFavorite(state, action) {
            const index = state.indexOf(action.payload.pokemonId)

            if (index !== -1) state.splice(index, 1)
        }
    }
})