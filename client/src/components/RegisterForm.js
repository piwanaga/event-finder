/**Register form */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../actions/actionCreators';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.userReducer.user);
    let timeout

    const INITIAL_STATE = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        usernameError: '',
        passwordError: '',
        firstNameError: '',
        lastNameError: ''
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

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
        if (!formData.email) {
          setFormData(data => ({
            ...data, usernameError: 'Email cannot be blank'
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
        if (!formData.firstName) {
          setFormData(data => ({
            ...data, firstNameError: 'First name cannot be blank'
          }))
          validForm = false
        } else {
            setFormData(data => ({
              ...data, firstNameError: ''
            }))
        }
        if (!formData.lastName) {
          setFormData(data => ({
            ...data, lastNameError: 'Last name cannot be blank'
          }))
          validForm = false
        } else {
            setFormData(data => ({
              ...data, lastNameError: ''
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
                    ...data, usernameError: 'There is already an account using this email address'
                }))
            } 
        }, 1000)
        
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        let isValidForm = validateForm()
        if (isValidForm) {
            dispatch(createUser(
                {
                    email: formData.email,
                    password: formData.password,
                    firstName: formData.firstName,
                    lastName: formData.lastName
                }
            ));   
            checkCredentials();
        }
    };

    return (
        <div className='flex justify-center px-3'>
            <div className='w-full sm:w-3/4 md:w-1/2 lg:w-5/12 xl:w-1/3'>
                <div className='border border-gray-300 shadow-lg rounded bg-white px-10 py-14'>
                    <h1 className='text-2xl font-semibold'>Almost There!</h1>
                    <h3 className='text mb-10 text-gray-700'>Sign up with EventFinder and stay up to date with what's going on around you. </h3>
                    <h5 className='text-sm mb-10 text-gray-700'>Already a member?  
                        <span className='text-blue-500 font-semibold'>
                            <Link to='/login'> Login</Link>
                        </span>
                    </h5>
                    <form onSubmit={handleSubmit} className=''>
                        <div className='mb-5'>
                            <label htmlFor='email' className='block text-sm text-gray-700 mb-1'>Email Address</label>
                            <input 
                                type='text' 
                                name='email' 
                                id='email'
                                maxLength='25' 
                                value={formData.email}
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
                        <div className='sm:grid sm:grid-cols-2 sm:gap-8'>
                            <div className='mb-3'>
                                <label htmlFor='firstName' className='block text-sm text-gray-700 mb-1'>First Name</label>
                                <input 
                                    type='text' 
                                    name='firstName' 
                                    id='firstName'
                                    maxLength='25' 
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className='w-full border-gray-300 rounded shadow-sm focus:border-blue-400 focus:ring-blue-500 focus:ring-opacity-50' />
                                {formData.firstNameError ? 
                                    <p className='text-xs text-red-500 mt-1'>{formData.firstNameError}</p> :
                                    null
                                }
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='lastName' className='block text-sm text-gray-700 mb-1'>Last Name</label>
                                <input 
                                    type='text' 
                                    name='lastName' 
                                    id='lastName'
                                    maxLength='25' 
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className='w-full border-gray-300 rounded shadow-sm focus:border-blue-400 focus:ring-blue-500 focus:ring-opacity-50' />
                                {formData.lastNameError ? 
                                    <p className='text-xs text-red-500 mt-1'>{formData.lastNameError}</p> :
                                    null
                                }
                            </div>
                        </div>
                            <button
                                className='text-white uppercase tracking-wider bg-blue-500 mt-4 py-3 rounded w-full hover:bg-blue-600  focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-600' >
                                    Sign Up
                            </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default RegisterForm