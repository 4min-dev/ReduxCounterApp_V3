import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TErrorInitialState = {
    error:string | null
}

const initialState:TErrorInitialState = {
    error:null
}

export const rootErrorReducer = createSlice({
    name:'errorReducer',
    initialState,
    reducers: {
        setRootError: (state, action:PayloadAction<string | null>) => {
            state.error = action.payload
        }
    }
})

export const { setRootError } = rootErrorReducer.actions
export default rootErrorReducer.reducer