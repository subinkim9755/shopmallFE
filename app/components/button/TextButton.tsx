
import React from 'react';
import type { ButtonType } from "../../types/buttonType";

function TextButton  ({ text ,onClick, cartCount }: ButtonType) {
    return (

        <button className="text-gray-400 font-bold tracking-wide cursor-pointer hover:text-gray-600 transition-colors duration-200"  onClick={onClick}>
            {text}
            {cartCount !== undefined && <span>({cartCount})</span>}
        </button>
    );
};

export default TextButton;