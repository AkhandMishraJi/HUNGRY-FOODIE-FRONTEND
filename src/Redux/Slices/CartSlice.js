import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast"

const initialState= {
    cartsData:''
}

export const addProductToCart = createAsyncThunk('/cart/addProduct', async (productId)=>{
    try {
        const response = axiosInstance.post(`/carts/add/${productId}`)
        toast.promise(response, {
            loading: "Adding Product To Your Cart",
            error: "Some Error Occured While Adding Product To Cart",
            success: "Successfully Added The Product To The Cart"
        })
        const apiResponse = await response
        return apiResponse
    } catch (error) {
        console.log(error);
        toast.error("Some Error Occured While Adding Product To Cart") 
        
    }       
})

export const removeProductFromCart = createAsyncThunk('/cart/removeProduct', async (productId)=>{
    try {
        const respose = axiosInstance.post(`/carts/remove/${productId}`)
        toast.promise(respose, {
            loading: "Removing Product From Your Cart",
            error: "Some Error Occured While Remove Product From Cart",
            success: "Successfully Removed The Product From The Cart"
        })
        const apiResponse = await respose
        return apiResponse
    } catch (error) {
        console.log(error);
        toast.error("Some Error Occured While Removing Product From Cart")
    }
})

export const getCartDetails = createAsyncThunk('/cart/getDetails', async ()=>{
    try {
        const respose = axiosInstance.get(`/carts`)
        toast.promise(respose, {
            loading: "Fetching Your Cart",
            error: "Error Occured While Fetching Your Cart",
            success: "Successfully Fetched YourCart"
        })
        const apiResponse = await respose
        return apiResponse
    } catch (error) {
        console.log(error);
        toast.error("Some Error Occured While Fetching Your Cart")
    }
})
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCartDetails.fulfilled, (state,action)=>{
            state.cartsData = action?.payload?.data?.data
        })
    }
})

export default cartSlice.reducer