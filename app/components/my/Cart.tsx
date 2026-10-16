"use client";
import React from 'react';
import TextyButton from "../button/TextButton";
import { useRouter } from 'next/navigation';
import CartList from './CartList';

const Cart = () => {
    const router = useRouter();
    return (
        <div className="w-full max-w-[1200px] h-full flex flex-col items-start justify-center gap-10">
            <span className="text-2xl font-bold">
                SHOPPING BAG
            </span>
             <span className="w-full text-lg font-medium border-b border-gray-700">
                    Your cart is currently empty.
            </span>

            <div className="w-full h-[700px] flex flex-col items-center justify-center gap-4">
               
              <CartList />
              <CartList />
              <CartList />
              <CartList />

            </div>

            <TextyButton text="BACK TO HOME" onClick={() => router.push("/")} /> 

            
        </div>
    );
};

export default Cart;