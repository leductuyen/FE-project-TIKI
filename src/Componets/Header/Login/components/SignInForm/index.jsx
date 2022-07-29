import React from 'react';
import PropTypes from 'prop-types';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form';

import { Avatar, Button, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from '../../../../Componets/Form/InputField';


SignInForm.propTypes = {
    onSubmit : PropTypes.func
};

function SignInForm(props) {
    const schema = yup.object().shape({
        fullName : yup.string().required('Please enter yoru full name')
        .test('should has at least two words', 'Please enter at least two words', (value)=>{
            return value.split(' ').length >=2;
        }),
        email: yup.string().required('Please enter your email')
                           .email('Please enter a valid email address'),
        password: yup.string().required('Please enter your password')
                                .min(6, 'Please enter at lease 6 charaters'),
        retypePassword : yup.string().required('Please enter your retype password').oneOf([yup.ref('password')], 'Password the not match')
    });
    const form = useForm({
        defaultValues:{
            fullName:'',
            email:'',
            password:'',
            retypePassword:''
        },
        resolver: yupResolver(schema)
       
    });
    const handleSubmit = (values) => {
        const {onSubmit} = props;
        if(onSubmit) {
            onSubmit(values)
        }
        form.reset()
    }
    return (
        <div>
            <Avatar>
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography component='h3'>Create An count</Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name='fullName' label='Full Name' form={form} />
                <InputField name='email' label='Email' form={form} />
                
                <Button type='submit' variant='contained' color='primary' fullWidth >
                    Create An count
                </Button>
            </form>
        </div>
    );
}

export default SignInForm;




// import React from 'react';
// import PropTypes from 'prop-types';
// import InputField from '../../../../Componets/Form/InputField';
// import { useForm } from 'react-hook-form';
// import {Button} from '@material-ui/core'
// SignInForm.propTypes = {
//     onSubmit : PropTypes.func
// };

// function SignInForm(props) {
//     const form = useForm({
//         defaultValues:{
//             name:'',
//             email:''
//         }
//     })
//     const handleSignInSubmit = (values) => {
//         console.log('values', values)
//         const {onSubmit} = props;
//         if(onSubmit) {
//             onSubmit(values)
//         }
//         form.reset()
//     }
//     return (
//         <form onSubmit={form.handleSubmit(handleSignInSubmit)} >
//             <InputField form={form} name="name" label="Name" />
//             <InputField form={form} name="email" label="Email" />
//             <Button type='submit' variant='contained' color='primary' fullWidth >
//                   Create An count
//             </Button>
//         </form>
//     );
// }

// export default SignInForm;