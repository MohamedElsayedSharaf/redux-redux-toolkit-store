import { createSlice } from '@reduxjs/toolkit'
import { order as cakeOrder } from '../cake/cakeSlice'

const initialState = {
    noOfTorta: 50
}

const tortaSlice = createSlice({
    name: 'torta',
    initialState,
    reducers: {
        order: state =>  {
            state.noOfTorta --
        },
        restock: (state, action) => {
            state.noOfTorta += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrder, (state) => {
            state.noOfTorta --;
        });
    },
})

export default tortaSlice.reducer
export const {order, restock} = tortaSlice.actions