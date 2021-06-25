import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getUsers = createAsyncThunk(
    `users/getUsers`,
    async (thunkAPI) => {
        const res = await axios.get(`http://localhost:3000/users`)
        return res.data
    }
)

export const registerUsers = createAsyncThunk(
    `users/registerUsers`,
    async (data, thunkAPI) => {
        const res = await axios.post(`http://localhost:3000/users`, data)
        return res.data
    }
)

export const deleteUsers = createAsyncThunk(
    `users/deleteUsers`,
    async (id, thunkAPI) => {
        await axios.delete(`http://localhost:3000/users/${id}`)
        return id
    }
)

export const activateUsers = createAsyncThunk(
    `users/activateUsers`,
    async (data, thunkAPI) => {
        
        let newData = {...data, state: 'active'}
        
        const res = await axios.put(`http://localhost:3000/users/${data.id}`, newData)
        return res.data
    }
)

const initialState = {
    users: [],
    isLoading: false
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [getUsers.fulfilled]: (state, action) =>{
            state.users = action.payload
            state.isLoading = false;
        },
        [getUsers.pending]: (state, action) =>{
            state.isLoading = true;
        },
        [registerUsers.fulfilled]: (state, action) =>{
            state.users = [...state.users, action.payload]
        },
        [deleteUsers.fulfilled]: (state, action) =>{
            state.users = state.users.filter(user => user.id !== action.payload)
        },
        [activateUsers.fulfilled]: (state, action) =>{
            const updatedUsers = state.users.filter(user => user.id !== action.payload.id)
            state.users = [...updatedUsers, action.payload]
        }

    }
})

export const {register} = userSlice.actions

export default userSlice.reducer;