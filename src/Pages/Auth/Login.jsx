import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/Slices/AuthSlice';
import LoginPresentation from './LoginPresentation';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()

    const dispatch = useDispatch();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    function handleUserInput(e) {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    }

    async function handleFormSubmit(e) {
        e.preventDefault(); // Prevent the form from reloading after clicking submit button
        console.log(loginData);

        // Adding form validation
        if (!loginData.email || !loginData.password) {
            toast.error('Missing form values. Please fill out all values.');
            return;
        }

        if (!loginData.email.includes('@') || !loginData.email.includes('.')) {
            toast.error('Invalid email address');
            return;
        }

        const apiResponse = await dispatch(login(loginData));
        console.log('API response:', apiResponse);
        if (apiResponse.payload.data.success) {
            navigate("/")
        }
    }

    return (
        <LoginPresentation handleFormSubmit={handleFormSubmit} handleUserInput={handleUserInput} />

    )
}

export default Login;