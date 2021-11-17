/**Login form */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/actionCreators';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.userReducer.user);
    let timeout

    const INITIAL_STATE = {
        username: '',
        password: '',
        usernameError: '',
        passwordError: ''
    };

    const [formData, setFormData] = useState(INITIAL_STATE);
    // const [formErr, setFormErr] = useState(false);

    useEffect(() => {
        if (user.loggedIn) {
            navigate('/')
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [user.loggedIn, navigate, timeout])

    const validateForm = () => {
        let validForm = true
        if (!formData.username) {
          setFormData(data => ({
            ...data, usernameError: 'Username cannot be blank'
          }))
          validForm = false
        } else {
          setFormData(data => ({
            ...data, usernameError: ''
          }))
        }
        if (!formData.password) {
          setFormData(data => ({
            ...data, passwordError: 'Password cannot be blank'
          }))
          validForm = false
        } else {
            setFormData(data => ({
              ...data, passwordError: ''
            }))
        }
        return validForm
    };

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(data => ({...data, [name]: value}));
    };

    const checkCredentials = () => {
        timeout = setTimeout(() => {
            if (!user.loggedIn) {
                setFormData(data => ({
                    ...data, usernameError: 'Invalid username/password', passwordError: 'Invalid username/password'
                }))
            } 
        }, 1000)
        
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        let isValidForm = validateForm()
        if (isValidForm) {
            dispatch(loginUser(
                {
                    username: formData.username,
                    password: formData.password
                }
            ));   
            checkCredentials();
        }
    };

    return (
        <div className='flex justify-center px-3'>
        <div className='w-full sm:w-3/4 md:w-1/2 lg:w-5/12 xl:w-1/4'>
            <div className='rounded bg-white'>
                <form onSubmit={handleSubmit} className=''>
                    <div className='mb-3'>
                        <label htmlFor='username' className='block text-sm text-gray-700 mb-1'>Username</label>
                        <input 
                            type='text' 
                            name='username' 
                            id='username'
                            maxLength='25' 
                            value={formData.username}
                            onChange={handleChange}
                            className='w-full border-gray-300 rounded focus:border-blue-400 focus:ring-blue-500 focus:ring-opacity-50' />
                        {formData.usernameError ? 
                            <p className='text-xs text-red-500 mt-1'>{formData.usernameError}</p> :
                            null
                        }
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='block text-sm text-gray-700 mb-1'>Password</label>
                        <input 
                            type='password' 
                            name='password' 
                            id='password'
                            maxLength='25' 
                            value={formData.password}
                            onChange={handleChange}
                            className='w-full border-gray-300 rounded shadow-sm focus:border-blue-400 focus:ring-blue-500 focus:ring-opacity-50' />
                        {formData.passwordError ? 
                            <p className='text-xs text-red-500 mt-1'>{formData.passwordError}</p> :
                            null
                        }
                    </div>
                        <button
                            className='text-white uppercase tracking-wider bg-blue-500 mt-4 py-3 rounded w-full hover:bg-blue-600  focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-600' >
                                Login
                        </button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default LoginForm;