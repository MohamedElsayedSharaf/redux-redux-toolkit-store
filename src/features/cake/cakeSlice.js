import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    noOfCakes: 12
}
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        order: (state) => {
            state.noOfCakes --;
        },
        restock: (state, action) => {
            state.noOfCakes += action.payload
        }
    },
})
export default cakeSlice.reducer
export const {order, restock} = cakeSlice.actions