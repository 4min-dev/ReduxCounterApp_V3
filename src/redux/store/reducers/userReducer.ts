import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../ts/interfaces/users/IUser";
import { fetchUsers } from "../../thunk/fetchUsers";

type TUsersInitialState = {
    users:IUser[],
    error:string | null,
    isLoading:boolean | null
}

const initialState:TUsersInitialState = {
    users:[],
    error:null,
    isLoading:null
}

export const userReducer = createSlice({
    name:'users',
    initialState,
    reducers: {
        setLoader: (state, action:PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },

        setError: (state, action:PayloadAction<string>) => {
            state.error = action.payload
        },

        addUsersFromBase: (state, action:PayloadAction<IUser[]>) => {
            state.users = [...state.users, ...action.payload]
        },

        addUser: (state, action:PayloadAction<IUser>) => {
            state.users = [...state.users, action.payload]
        },

        deleteAllUsers: (state) => {
            state.users = []
        },

        deleteUser: (state, action:PayloadAction<number>) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending.type, (state) => {
            state.isLoading = true
        }),

        builder.addCase(fetchUsers.fulfilled.type, (state,action:PayloadAction<IUser[]>) => {
            state.users = [...state.users, ...action.payload]
            state.isLoading = false
        }),

        builder.addCase(fetchUsers.rejected.type, (state,action:PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false
        })
    }
})

export const { setLoader, setError, addUsersFromBase, addUser, deleteAllUsers, deleteUser } = userReducer.actions
export default userReducer.reducer