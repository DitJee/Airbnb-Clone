import React from 'react'
import Image from "next/image"

type Props = {}

function Banner({}: Props) {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <h1> Henlo!!</h1>
        <Image 
            src="https://links.papareact.com/0fm" 
            layout="fill" 
            objectFit="cover"
            objectPosition="center"
        />
        <div className='absolute top-1/2 w-full text-center text-blue-700'>
            <p className='text-sm sm:text-lg'>
                 henlo world...
            </p>
            <button
                className='text-purple-500 bg-gray-100 px-10 py-5 shadow-md rounded-full font-bold my-3 
                
                hover:shadow-xl
                
                active:scale-90 transition duration-150
                '
            >
                Flexible Btn
            </button>
        </div>
    </div>
  )
}

export default Banner