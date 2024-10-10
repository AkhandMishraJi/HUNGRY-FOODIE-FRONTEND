import { useState } from "react"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"
import SignupPresentation from "./SignupPresentation"

function SignUp() {
    const [signUpState ,setSignUpState] = useState({
        fullName: '' ,
        email: '' ,
        mobileNumber: '' ,
        password: ''
    })

    function handleUserInput(e) {
        const {name , value } = e.target
        setSignUpState({
            ...signUpState,
            [name]: value
        })

    }

    function handleFormSubmit(e) {
        e.preventDefault() //Prevent The Form from reloading after clicking submit button
        console.log(signUpState);
        
        //Adding Form Validation
        if (!signUpState.email || !signUpState.fullName || !signUpState.mobileNumber || !signUpState.password) {
            toast.error("Mising Form  Values. Please Fill Out All Values");
            return
        }
        if (signUpState.fullName.length < 2  || signUpState.fullName.length > 100) {
            toast.error("Name Should Be Atleast 2 Characters Long And Less Than 100 Characters")
            return
        }
        if (signUpState.mobileNumber.length > 10 || signUpState.mobileNumber.length < 10) {
            toast.error("Mobile Number Should Be 10 Digits Long And It Should Be Only In Number Form")
        }
    }

  return ( <SignupPresentation handleFormSubmit={handleFormSubmit} handleUserInput={handleUserInput}/>)
}

export default SignUp