'use client';

import React from 'react';

import TextyButton from "../button/TextButton";
import { useCart } from "../../Provider/CartProvider";
import ImageButton from '../button/ImageButton';
import Link from 'next/link';

const Header = () => {
    const { cartCount } = useCart();
    

    return (
        <div className="w-full h-16 flex items-center justify-center">
            <div className="w-full max-w-[1200px] px-4 grid grid-cols-[1fr_auto_1fr] items-center">
                <div className="flex space-x-3 justify-self-start">

                    <TextyButton text="SHOP" onClick={() => console.log("Header Button Clicked")} /> 
                    
                    <Link href="/brand">
                        <TextyButton text="BRAND" onClick={() => {}} /> 
                    </Link>
                    <Link href="/collection">
                        <TextyButton text="COLLECTION" onClick={() => {}} /> 
                    </Link>
                </div>
                <div className="justify-self-center">
                    <ImageButton  str="My Shop Mall" />
                </div>
                <div className="flex space-x-3 justify-self-end">
                    <Link href="/signin">
                        <TextyButton text="SIGN IN" onClick={() => {}} /> 
                    </Link>
                    <Link href="/signup">
                        <TextyButton text="SIGN UP" onClick={() => {}} /> 
                    </Link>
                    <Link href="/my">
                        <TextyButton text="MY" onClick={() => {}} /> 
                    </Link>
                </div>

            </div>
            
        </div>
    );
};

export default Header;