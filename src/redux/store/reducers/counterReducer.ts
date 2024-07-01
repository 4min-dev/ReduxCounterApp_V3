import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type TInitialState = {
    cash:number,
    error:string | null
}

const initialState:TInitialState = {
    cash:0,
    error:null
}

export const counterReducer = createSlice({
    name:'counter',
    initialState,
    reducers: {
        incrementWithAmount: (state, action:PayloadAction<number>) => {
            state.cash += action.payload
        },

        decrementWithAmount: (state, action:PayloadAction<number>) => {
            state.cash -= action.payload
        },

        decrementFullCash: (state) => {
            state.cash -= state.cash
        }
    }
})

export const { incrementWithAmount, decrementWithAmount, decrementFullCash } = counterReducer.actions
export default counterReducer.reducer