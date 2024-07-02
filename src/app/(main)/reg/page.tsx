'use client';

import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { regUser } from './action';
import { useRouter } from 'next/navigation';
import { FormData } from '@/types/Type';
import RegForm from '@/components/Form/Reg/RegForm';
import toast from 'react-hot-toast';
import { UserContext } from '@/context/UserContext';

const Reg = () => {
    const router = useRouter();
    const { userData } = useContext(UserContext);
    useEffect(() => {
        (async () => {
            if (userData?.token) {
                router.push('/');
            }
        })()
    }, []);
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset, setError } = useForm();

    const togglePasswordVisibility = () => setShowPassword(prevShowPassword => !prevShowPassword);
    const onSubmitHandler = async (data: FormData) => {
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
                toast.success('Registration Successfully! Please check Email for Verification');
                setTimeout(() => {
                    router.push('/login');
                }, 5000);
            }
        } catch (error) {
            console.error('An unexpected error occurred:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <RegForm
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

export default Reg;
