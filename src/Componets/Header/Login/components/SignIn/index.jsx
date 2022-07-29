import React from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../../userSlice';
import SignInForm from '../SignInForm';
import { unwrapResult } from '@reduxjs/toolkit';


function SignIn(props) {
    const disptach = useDispatch();

    const handleSignInSubmit = async (values) => {
        try {
            const action = signin(values);
            const resultAction = await disptach(action);
            const user = unwrapResult(resultAction);
            console.log('New user', user)
        } catch (error) {
            console.log('Feald', error)
        }
        console.log('Form', values)
    }
    return (
        <div>
            <SignInForm onSubmit={handleSignInSubmit} />
        </div>
    );
}

export default SignIn;