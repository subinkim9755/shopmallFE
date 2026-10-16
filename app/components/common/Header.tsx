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
            <div className="w-full max-w-[1200px] px-4 grid grid-cols-[1fr_auto_1fr] items-center">
                <div className="flex space-x-3 justify-self-start">
                    <TextyButton text="SHOP" onClick={() => console.log("Header Button Clicked")} /> 
                    <TextyButton text="BRAND" onClick={() => router.push("/brand")} /> 
                    <TextyButton text="COLLECTION" onClick={() => router.push("/collection")} /> 
                </div>
                <div className="justify-self-center">
                    <ImageButton  str="My Shop Mall" />
                </div>
                <div className="flex space-x-3 justify-self-end">
                    <TextyButton text="SIGN IN" onClick={() => router.push("/signin")} /> 
                    <TextyButton text="SIGN UP" onClick={() => router.push("/signup")} />                     
                    <TextyButton text="MY" onClick={() => router.push("/my")}/> 
                </div>

            </div>
            
        </div>
    );
};

export default Header;