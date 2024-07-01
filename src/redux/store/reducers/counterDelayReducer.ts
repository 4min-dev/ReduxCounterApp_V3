import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IDelayValue } from "../../../ts/interfaces/global/delay/IDelayValue";

const initialState:IDelayValue = { 
    delay:0, 
    checkboxValue:false 
}

export const counterDelayReducer = createSlice({
    name:'counterDelay',
    initialState,
    reducers: {
        setCounterDelay: (state, action:PayloadAction<number>) => {
            state.delay = action.payload
        },

        setChecked: (state,action:PayloadAction<boolean>) => {
            state.checkboxValue = action.payload
        }
    }
})

export const { setCounterDelay, setChecked } = counterDelayReducer.actions
export default counterDelayReducer.reducer