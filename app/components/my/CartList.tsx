import React from 'react'
import Image from 'next/image'

function CartList() {
  return (
    <div className="w-full h-[100px] flex items-center rounded-lg justify-center gap-4 border border-gray-300">
        <Image
            src="/path/to/image.jpg"
            alt="Cart Item"
            width={100}
            height={100}
        />

        <div className="flex flex-col items-start justify-center gap-2">
            <span className="text-lg font-medium">
                Cart Item Name
            </span>
            <span className="text-sm text-gray-500">
                $99.99
            </span>

        </div>
    </div>
  )
}

export default CartList
