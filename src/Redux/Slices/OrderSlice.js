import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast"

const initialState= {
    orderData:null
}

export const placeOrder = createAsyncThunk('/order/placeOrder', async (details)=>{
    try {
        const response = axiosInstance.post(`/orders` , details)
        toast.promise(response, {
            loading: "Please Wait We Are Placing Your Order !!",
            error: "Some Error Occured While Placing Your Order ❌",
            success: "Successfuly Placed The Order ✔✔"
        })
        const apiResponse = await response
        return apiResponse
    } catch (error) {
        console.log("Error",error);
        toast.error("Some Error Occured While Placing Order") 
        
    }       
})



const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(placeOrder.fulfilled, (state,action)=>{
            state.orderData = action?.payload?.data?.data  
    })
}
})

export default orderSlice.reducer