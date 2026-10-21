"use client";
import React from 'react';
import TextyButton from "../button/TextButton";
import { useRouter } from 'next/navigation';
import CartList from './CartList';

const Cart = () => {
    const router = useRouter();
    const totalAmount: number = 1;

    return (
        <div className="w-full max-w-[1200px] h-full flex flex-col items-start justify-center gap-10">
            <span className="text-2xl font-bold">
                SHOPPING BAG
            </span>

             <span className="w-full text-lg font-medium border-b-2 border-gray-700">
                {totalAmount === 0 ? (
                    "Your cart is currently empty."
                ) : (
                    `일반 상품 (${totalAmount})`
                )}
            </span>

            <div className="w-full h-[700px] flex flex-col items-center justify-center gap-4 border-b-2  border-gray-700">               
              <CartList />
              <CartList />
              <CartList />
              <CartList />
            </div>

            <div className="w-full h-[700px] flex flex-col items-center justify-center gap-4 border-b-2  border-gray-700">               
              <div className="flex justify-between items-center gap-50 border-b-2 border-gray-700">
                <span className="text-xl font-bold">총 상품금액</span>
                <span className="text-xl font-bold">총 배송비</span>
                <span className="text-xl font-bold">총 할인금액</span>
                <span className="text-xl font-bold">결재 금액</span>
              </div>
              
            </div>

            <div className="w-full pb-10 flex justify-center">
                <TextyButton text="BACK TO HOME" onClick={() => router.push("/")} /> 
            </div>
            
        </div>
    );
};

export default Cart;