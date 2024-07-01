import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { IUser } from "../../ts/interfaces/users/IUser"

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, {fulfillWithValue,rejectWithValue}) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return fulfillWithValue(response.data)
        } catch(err:any) {
            return rejectWithValue(err.message)
        }
    }
)