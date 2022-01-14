/**Login form */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearLoginError } from '../actions/actionCreators';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.userReducer.user);
    const [isLoading, setIsLoading] = useState(false)

    const INITIAL_STATE = {
        email: 'testuser@email.com',
        password: 'password',
        emailError: '',
        passwordError: ''
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    useEffect(() => {
        dispatch(clearLoginError())
        if (user.loggedIn) {
            navigate('/')
        }
        if (user.error) {
            setFormData(data => ({
                ...data, emailError: 'Invalid email/password', passwordError: 'Invalid email/password'
            }))
            setIsLoading(false)
        }
    }, [user.loggedIn, navigate, user.error])

    const validateForm = () => {
        let validForm = true
        if (!formData.email) {
          setFormData(data => ({
            ...data, emailError: 'Email cannot be blank'
          }))
          validForm = false
        } else {
          setFormData(data => ({
            ...data, emailError: ''
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

    const handleSubmit = async evt => {
        evt.preventDefault();
        let isValidForm = validateForm()
            if (isValidForm) {
                dispatch(loginUser(
                    {
                        email: formData.email,
                        password: formData.password
                    }
                ))
                setIsLoading(true)
            }
    };
    
    return (
        <div className='flex justify-center px-3'>
            <div className='w-full sm:w-3/4 md:w-1/2 lg:w-5/12 xl:w-1/3'>
                <div className='border border-gray-300 shadow-lg rounded bg-white px-10 py-14'>
                    <h1 className='text-2xl font-semibold'>Welcome Back!</h1>
                    <h3 className='text mb-10 text-gray-700'>Sign in below and discover awesome events and artists nearby. </h3>
                    <h5 className='text-sm mb-10 text-gray-700'>New to EventFinder?  
                        <span className='text-blue-500 font-semibold'>
                            <Link to='/register'> Sign up</Link>
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
                            {formData.emailError ? 
                                <p className='text-xs text-red-500 mt-1'>{formData.emailError}</p> :
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
                                disabled={isLoading ? true : false}
                                className={isLoading ? 
                                    'text-white uppercase tracking-wider bg-gray-500 mt-4 py-3 rounded w-full' :
                                    'text-white uppercase tracking-wider bg-blue-500 mt-4 py-3 rounded w-full hover:bg-blue-600  focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-600'} >
                                    {isLoading ? "Loading" : "Login"}
                            </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;