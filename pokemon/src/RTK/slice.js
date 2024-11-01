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