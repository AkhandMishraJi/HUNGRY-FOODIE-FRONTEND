import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    productsData: [] //Array Of Product
}

export const getAllProducts = createAsyncThunk('/products/getAll' ,  async () => {
    try {
        const products = axiosInstance.get('/products')
        toast.promise(products, {
            loading: "Fetching The Products From Server",
            error: "Some Error Occured While Fetching The Products",
            success: "Successfully Fetched The Products"
        })
        const apiResponse = await products
        return apiResponse
    } catch (error) {
        console.log(error);
        toast.error("Some Error Occured While Fetching The Products.")
        toast.error("The Error Is :")
        toast.error(error)

    }
})
export const getProductDetails = createAsyncThunk('/products/getDetails' ,  async (id) => {
    try {
        const product = axiosInstance.get(`/products/${id}`)
        toast.promise(product, {
            loading: "Fetching The Product From Server",
            error: "Some Error Occured While Fetching The Product",
            success: "Successfully Fetched The Product"
        })
        const apiResponse = await product
        return apiResponse
        console.log(state.u);
        
    } catch (error) {
        console.log(error);
        toast.error("Some Error Occured While Fetching The Product")


    }
})
const productSlice = createSlice({
    name: 'product',
    initialState,
    redicers:{},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action)=>{
            console.log(action.payload); 
            state.productsData = action?.payload?.data?.data
        })
    }
})

export default productSlice.reducer