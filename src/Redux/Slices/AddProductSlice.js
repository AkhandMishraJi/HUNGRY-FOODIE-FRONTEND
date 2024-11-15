import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";
import axios from "axios";

export const addProduct = createAsyncThunk('/admin/addProduct',  async (data) => {
    console.log("Incoming Data To The Thunk", data);
    try {
        const formData = new FormData()
        formData.append("productName" , data.productName)
        formData.append("description" , data.description)
        formData.append("price" , data.price)
        formData.append("category" , data.category)
        formData.append("quantity" , data.quantity)
        formData.append("productImage" , data.productImage)
    
        const response =  axiosInstance.post('/products/addproduct', formData, {
             headers: { 'Content-Type': 'multipart/form-data' } ,
             withCredentials: true
            }); // Await here
        toast.promise(response, {
            success: (resolvedPromise) => {
                return resolvedPromise?.data.message;
            },
            loading: "Please Wait, Adding Product",
            error: 'Some Error Occurred, It May Be From Our Server Side Or From Your Side Or You Have Entered Any Wrong Data'
        });
        const apiResponse = await response
        console.log("Response from the Server", apiResponse);
        return apiResponse; // Return the response
    } catch (error) {
        console.error(error);
        throw error; // Re-throw error to be caught in the component
    }
});

const addProductSlice = createSlice({
    name: 'addProduct',
    initialState: {},
    reducers: {},
});

export default addProductSlice.reducer;
