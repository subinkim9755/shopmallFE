'use client';

import React from 'react'
import type { ImageButtonType } from "../../types/buttonType";
import Image from 'next/image';
import { useRouter } from 'next/navigation';



function ImageButton({ src, str }: ImageButtonType) {
  const router = useRouter();

  return (
    <button className="flex items-center space-x-2" onClick={() => router.push("/")}>
        
      {src && <Image src={src} alt={"NoImage"} width={200} height={50} />}      
      {str && <span className="font-gloestiva text-gray-400 font-bold tracking-wide cursor-pointer hover:text-gray-600 transition-colors duration-200">{str}</span>}
    </button>
  )
}

export default ImageButton
