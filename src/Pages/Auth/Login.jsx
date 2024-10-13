    import { useState } from "react"
    import toast from "react-hot-toast"
    import { useDispatch } from "react-redux"
    import { login } from "../../Redux/Slices/AuthSlice"
    import LoginPresentation from "./LoginPresentation.jsx"

    function Login() {

        const dispatch = useDispatch()
        const [loginData ,setLoginData] = useState({
            email: '',
            password: ''
        })
        function handleUserInput(e) {
            const {name , value } = e.target
            setLoginData({
                ...loginData,
                [name]: value
            })

        }
        async function handleFormSubmit(e) { 

            e.preventDefault() //Prevent The Form from reloading after clicking submit button
            console.log(loginData);
            
            //Adding Form Validation
            if (!loginData.email || !loginData.password) {
                toast.error("Mising Form  Values. Please Fill Out All Values");
                return
            }
        
            if (!loginData.email.includes("@") || !loginData.email.includes(".")) {
                toast.error("Invalid Email Address")
            }
            const apiResponse = await dispatch(login(loginData))
            console.log(`Api response : `, apiResponse);
            
        
        }

        return (
            <LoginPresentation
        handleFormSubmit={handleFormSubmit} handleUserInput={handleUserInput}
            />
        )
    } 

    export default Login