import React from 'react'
import Image from 'next/image'

function CartList() {
  return (
    <div className="w-full h-[150px] flex items-center rounded-lg justify-center gap-4 border border-gray-300">
        <div className="w-10 h-full py-6 flex items-start justify-start">
            <input
                type="checkbox"
                className="w-4 h-4"            
            />
       </div>
        <div className="flex flex-col items-start justify-center gap-1">
           <span className="text-2xl font-bold">
                Product Name
            </span>
            <span className="text-sm text-gray-500 line-through">
                정상가 : KRW 172,000￦
            </span>
            <span className="text-sm font-medium">
                할인가 : KRW 172,000￦
            </span>
            <span className="text-sm text-gray-500">
                배송비 : KRW 5,000￦
            </span>
            <span className="text-sm text-gray-500">
                적립금 : KRW 1,720￦
            </span>
        </div>

        <div className="w-10 h-full py-3 flex items-start justify-start">
            <button className="w-8 h-8 text-lg text-black cursor-pointer rounded-lg">
                <Image
                    src="/XButton.webp"
                    alt="Delete Icon"
                    width={50}
                    height={50}
                />
            </button>
        </div>

        <div className="flex gap-4 items-center justify-center gap-1">
            <button className="w-8 h-8 text-lg text-black cursor-pointer border border-gray-300 rounded-lg">
                -
            </button>

            <span className="text-sm font-medium"> 1</span>
            <button className="w-8 h-8 text-lg text-black cursor-pointer border border-gray-300 rounded-lg">
                +
            </button>


        </div>
    </div>
  )
}

export default CartList
