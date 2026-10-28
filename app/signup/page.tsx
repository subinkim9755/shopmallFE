"use client"
import React from 'react'
import { useForm } from 'react-hook-form';

function signup() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<{
        email: string;
        password: string;
        phone: string;
        nickname: string;
      }>();
      const onSubmit = (data: { email: string; password: string; phone: string; nickname: string }) => {
        console.log(data);
      };
  return (
   <div className="w-full h-full flex items-center justify-center">
      <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <span>{errors.email.message}</span>}
              <input
                type="password"
                placeholder="Password"
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <span>{errors.password.message}</span>}
              <input
                type="phone"
                placeholder="Phone"
                {...register('phone', { required: 'Phone is required' })}
              />
              <input
                type="text"
                placeholder="Nickname"
                {...register('nickname', { required: 'Nickname is required' })}
              />
              {errors.phone && <span>{errors.phone.message}</span>}
              {errors.nickname && <span>{errors.nickname.message}</span>}
              <button type="submit">
                회원가입
              </button>
            </form>
      </div>
    </div>
  )
}

export default signup
