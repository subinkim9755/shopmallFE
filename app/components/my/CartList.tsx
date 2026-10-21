import React from 'react'
import Image from 'next/image'

function CartList() {
  return (
    <div className="w-full h-[150px] flex items-center rounded-lg justify-center gap-4 border-b border-gray-300">
        <div className="w-10 h-full py-6 flex items-start justify-start">
            <input
                type="checkbox"
                className="w-4 h-4"            
            />
       </div>
       <div className="w-24 mx-4 h-full py-3 flex items-center justify-center">
            <Image
                src="/TShirt.png"
                alt="Product Image"
                width={100}
                height={100}
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

        <div className="flex mx-3 gap-4 items-center justify-center gap-1">
            <button className="w-8 h-8 text-lg text-black cursor-pointer border border-gray-300 pb-3 rounded-lg">
                -
            </button>
            <span className="text-sm font-medium"> 1</span>
            <button className="w-8 h-8 text-lg text-black cursor-pointer border border-gray-300 rounded-lg">
                +
            </button>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <span className="text-lg font-bold">
                KRW 172,000￦
            </span>
            <button className="mt-2 w-30 bg-black text-white cursor-pointer py-2 px-4 rounded-lg">
                Buy Now
            </button>
        </div>

    </div>
  )
}

export default CartList
