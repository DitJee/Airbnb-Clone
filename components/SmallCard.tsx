import React from 'react'
import Image from 'next/image'

export type SmallCardData = {
    img:string,
    location:string,
    distance:string
}

function SmallCard({img, location, distance}: SmallCardData) {
  return (
    <div className='flex items-center space-x-4 m-2 mt-5 rounded-xl cursor-pointer
        hover:bg-gray-100
        hover:scale-105
        transition transform duration-200
        ease-out
    '>
        <div className='relative h-16 w-16'>
            <Image
                className='rounded-lg'
                src={img}
                layout='fill'

            />
        </div>

        <div>
            <h2>{location}</h2>
            <h3>{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard