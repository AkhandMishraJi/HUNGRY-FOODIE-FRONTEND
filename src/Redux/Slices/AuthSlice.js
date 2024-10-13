import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === true || false ,
    role: localStorage.getItem('role') || "",
    data: JSON.parse(localStorage.getItem("data")) || {}
}

export const createAccount = createAsyncThunk('/auth/createAccount' , async (data) => {
    console.log("Incomming Data To The Thunk" , data);
    try {
        console.log("HELLO WORLD");
        
  
        
         const response =  axiosInstance.post("/users" , data)
          toast.promise(response,{
            success: (resolvedPromise) => {
                return resolvedPromise?.data.message
            },
            loading: "Please Wait , We Are Registering You",
            error: 'Some Error Occured , It May From Our Server Side Or From Your Side Or You Have Entered Any wrong Data'
          })
          const apiResponse = await response
          return apiResponse
    } catch (error) {
        console.log(error);
    }
})

export const login = createAsyncThunk('/auth/login' , async (data) => {
    console.log("Incomming Data To The Thunk" , data);
    try {
        console.log("HELLO WORLD");
        
  
        
         const response =  axiosInstance.post("/auth/login" , data)
          toast.promise(response,{
            success: (resolvedPromise) => {
                return resolvedPromise?.data.message
            },
            loading: "Please Wait , We Are Registering You",
            error: 'Some Error Occured , It May From Our Server Side Or From Your Side Or You Have Entered Any wrong Data'
          })
          const apiResponse = await response
          return apiResponse
    } catch (error) {
        console.log(error);
    }
})


const AuthSlice = createSlice({
    name: "auth" ,
    initialState ,
    reducers:{},
  
})

export default AuthSlice.reducer