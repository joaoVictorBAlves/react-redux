import { createSlice } from "@reduxjs/toolkit";

// Cria uma fatia do store que se responsabiliza por um estado
export const counterSlice = createSlice({
    // nome e valor inicial
    name: "counter",
    initialState: {
        value: 0
    },
    // Funções que alteram o estado
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
});

// Exporta os reducers como funções
export const { increment, decrement } = counterSlice.actions
// Exporta o counterReducer
export default counterSlice.reducer