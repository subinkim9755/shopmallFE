"use client"
import React from 'react'
import { useForm } from 'react-hook-form';

function signin() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<{
    email: string;
    password: string;
  }>();
  const onSubmit = (data: { email: string; password: string }) => {
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
          <button type="submit" disabled={isSubmitting}>
            로그인
          </button>
        </form>
      </div>
    </div>
  )
}

export default signin
