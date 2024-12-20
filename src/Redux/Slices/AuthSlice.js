import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === "true" || "false" ,
    role: localStorage.getItem('role') || "",
    data: JSON.parse(localStorage.getItem("data")) || {}
}

export const createAccount = createAsyncThunk('/auth/createAccount' , async (data) => {
    console.log("Incomming Data To The Thunk" , data);
    try {
       
         const response =  axiosInstance.post("/users" , data  ,{
            withCredentials:true
        })
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
         const response =  axiosInstance.post("/auth/login" , data ,{
            withCredentials:true
        })
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
export const logout = createAsyncThunk('/auth/logout' , async () => {
    try {
        console.log("Logout ");
        
         const response =  axiosInstance.post("/auth/logout" ,{
            withCredentials:true
        } )
          toast.promise(response,{
            success: (resolvedPromise) => {
                return resolvedPromise?.data.message
            },
            loading: "Please Wait , We Are Loging Out You",
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
    extraReducers:(builder)=>{
        builder
        .addCase(login.fulfilled , (state , action)=>{
            //reducerr which will exetcute when thunks are fullfiled
            state.isLoggedIn = true,
            state.role = action?.payload?.data?.data?.userRole,
            state.data = action?.payload?.data?.data?.userData
            localStorage.setItem('isLoggedIn' , true)
            localStorage.setItem('role' ,action?.payload?.data?.data?.userRole)
            localStorage.setItem('data' ,JSON.stringify(action?.payload?.data?.data?.userData))

        })
        .addCase(logout.fulfilled , (state)=>{
            
            localStorage.setItem('role' , '')
            localStorage.setItem('isLoggedIn' , false)
            localStorage.setItem('data' ,JSON.stringify({}))
            state.isLoggedIn = false,
            state.role = ""
            state.data = {}
        })
    }
})

export default AuthSlice.reducer