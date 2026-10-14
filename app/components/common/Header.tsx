'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import TextyButton from "../button/TextButton";
import { useCart } from "../../Provider/CartProvider";
import ImageButton from '../button/ImageButton';

const Header = () => {
    const { cartCount } = useCart();
    const router = useRouter();

    return (
        <div className="w-full h-16 flex items-center justify-center">
            <div className="w-full max-w-[1200px] px-4 flex items-center justify-between">
                <div className="flex space-x-3">
                    <TextyButton text="SHOP" onClick={() => console.log("Header Button Clicked")} /> 
                    <TextyButton text="BRAND" onClick={() => router.push("/brand")} /> 
                    <TextyButton text="COLLECTION" onClick={() => router.push("/collection")} /> 
                </div>
                <div>
                    <ImageButton  str="My Shop Mall" />
                </div>
                <div className="flex space-x-3">
                    <TextyButton text="SIGN IN" onClick={() => router.push("/signin")} /> 
                    <TextyButton text="SIGN UP" onClick={() => router.push("/signup")} /> 
                    <TextyButton text="CART" cartCount={cartCount} onClick={() => console.log("Header Button Clicked")} /> 
                    <TextyButton text="SEARCH" onClick={() => console.log("Header Button Clicked")} /> 
                </div>

            </div>
            
        </div>
    );
};

export default Header;