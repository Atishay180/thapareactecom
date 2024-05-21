import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setIsError: (state, action) => {
            state.isError = action.payload
        },
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setFeatureProducts: (state, action) => {
            state.featureProducts = action.payload
        },
    }
})


export const { setIsLoading, setIsError, setProducts, setFeatureProducts } = productSlice.actions
export default productSlice.reducer