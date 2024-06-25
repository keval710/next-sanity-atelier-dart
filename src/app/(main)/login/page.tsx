'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { BiShowAlt } from 'react-icons/bi';
import { GrFormViewHide } from 'react-icons/gr';
import { loginUser } from './action';
import FormLoader from '@/components/Loaders/FormLoader';
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();
    // Toggle password visibility
    const togglePasswordVisibility = () => setShowPassword(prevShowPassword => !prevShowPassword);
    // Handle form submission
    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const { error, token } = await loginUser(data);
            if (error) {
                switch (error.path) {
                    case 'email':
                        setError('email', {
                            type: 'manual',
                            message: 'Email not exist'
                        });
                        break;
                    case 'password':
                        setError('password', {
                            type: 'manual',
                            message: 'Enter valid password'
                        });
                        break;
                }
            } else {
                token && window.localStorage.setItem('token', token)
                router.push('/');
                reset();
            }
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className={`p-6 space-y-4 md:space-y-6 sm:p-8 ${isSubmitting && 'opacity-65'}`}>
                        <h1 className="text-xl justify-center flex font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Login Account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit((data) => onSubmit(data))}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    className={`bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                                    placeholder="email@address.com"
                                />
                                {errors.email && <p className="text-red-500 text-sm mx-1">{errors.email.message}</p>}
                            </div>
                            <div className="relative">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        {...register('password', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 8,
                                                message: 'Password must be at least 8 characters'
                                            }
                                        })}
                                        className={`bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10`}
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center text-sm leading-5"
                                    >
                                        {showPassword ? (
                                            <BiShowAlt className='w-6 h-6' />
                                        ) : (
                                            <GrFormViewHide className='w-6 h-6' />
                                        )}
                                    </button>
                                </div>
                                {errors.password && <p className="text-red-500 text-sm mx-1">{errors.password.message}</p>}
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-[#2F3238] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                {isSubmitting ? <><FormLoader /> logging.... </> : 'Login account'}
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                If you have no active account? <Link href={'/reg'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
