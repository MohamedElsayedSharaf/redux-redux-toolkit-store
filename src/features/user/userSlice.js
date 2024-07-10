import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const fecthUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data)        
})


export const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fecthUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fecthUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.error = ''
            state.loading = false
        })
        builder.addCase(fecthUsers.rejected, (state, action) => {
            state.users = []
            state.loading = false
            state.error = action.error.message
        })
    }
})
export default userSlice.reducer
