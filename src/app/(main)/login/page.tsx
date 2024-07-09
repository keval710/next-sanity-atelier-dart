'use client';

import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from './action';
import { useRouter } from 'next/navigation';
import LoginForm from '@/components/Form/Login/LoginForm';
import { FormData } from '@/types/Type';
import { UserContext } from '@/context/UserContext';
import { isAuthenticated } from '@/app/lib/Auth';

const Login = () => {
    const { setIsUserLogin } = useContext(UserContext);
    const router = useRouter();
    useEffect(() => {
        (async () => {
            const res = await isAuthenticated();
            if (res) {
                router.push('/');
            }
        })();
    }, [router]);
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();

    const togglePasswordVisibility = () => setShowPassword(prevShowPassword => !prevShowPassword);
    const onSubmitHandler = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const result = await loginUser(data);
            if (result.error) {
                if (result.error.status === 422) {
                    switch (result.error.path) {
                        case 'email':
                            setError('email', {
                                type: 'manual',
                                message: result.error.message
                            });
                            break;
                        case 'password':
                            setError('password', {
                                type: 'manual',
                                message: result.error.message
                            });
                            break;
                        default:
                            console.error('Validation error:', result.error.message);
                    }
                } else {
                    console.error('Login error:', result.error.message);
                }
            } else {
                if (result.token && result.user) {
                    window.localStorage.setItem('atelier-dart-userToken', JSON.stringify({
                        token: result.token,
                        user: result.user
                    }));
                    router.push('/');
                    setIsUserLogin(true);
                    reset();
                }
            }
        } catch (error) {
            console.error('An unexpected error occurred:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <>
            <LoginForm
                isSubmitting={isSubmitting}
                handleSubmit={handleSubmit}
                onSubmitHandler={onSubmitHandler}
                register={register}
                errors={errors}
                showPassword={showPassword}
                togglePasswordVisibility={togglePasswordVisibility}
            />
        </>
    );
};

export default Login;
