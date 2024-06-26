'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiShowAlt } from 'react-icons/bi';
import { GrFormViewHide } from 'react-icons/gr';
import { regUser } from './action';
import FormLoader from '@/components/Loaders/FormLoader';
import { isAuthenticated } from '@/app/lib/Auth';
import { useRouter } from 'next/navigation'
import { emailVerification } from '@/helpers/mail';

const Reg = () => {
    const router = useRouter();
    useEffect(() => {
        (async () => {
            const res = await isAuthenticated();
            if (res) {
                router.push('/');
            }
        })()
    }, []);
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset, setError } = useForm();

    const togglePasswordVisibility = () => setShowPassword(prevShowPassword => !prevShowPassword);
    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const result = await regUser(data);
            if (result.error) {
                if (result.error.status === 422 && result.error.message.includes('Email already exists')) {
                    setError('email', {
                        type: 'manual',
                        message: 'Email already exists'
                    });
                }
            } else {
                reset();
                router.push('/login');
            }
        } catch (error) {
            console.error('An unexpected error occurred:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className={`p-6 space-y-4 md:space-y-6 sm:p-8 ${isSubmitting && 'opacity-65'}`}>
                        <h1 className="text-xl flex justify-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit((data) => onSubmit(data))}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                                    Your Name*
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register('name', { required: 'Name is required' })}
                                    className={`bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                                    placeholder="name"
                                />
                                {errors.name && <p className="text-red-500 text-sm mx-1">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Your email*
                                </label>
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
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                    Your Password*
                                </label>
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
                                className={`w-full text-white bg-[#2F3238] font-medium rounded-lg text-sm px-5 py-2.5 text-center ${isSubmitting && 'opacity-50 cursor-not-allowed'}`}>
                                {isSubmitting ? <> <FormLoader /> Creating account... </> : 'Create an account'}
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                Already have an account? <Link href={'/login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reg;
