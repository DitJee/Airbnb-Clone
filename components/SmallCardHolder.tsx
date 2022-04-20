import React from 'react'
import { exploreData } from '../pages'
import SmallCard from './SmallCard'



function SmallCardHolder(props: exploreData) {
  return (
      <div>
        <h2 className='text-4xl font-semibold pb-10'>
            Explore the world
        </h2>

          <div className="grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3
          xl:grid-cols-4
          ">
            {props.exploreData.map(({img, location, distance}) => (
                  <h1 >
                    <SmallCard 
                      key={location}
                      img={img} 
                      location={location} 
                      distance={distance}                    
                    />
                  </h1>
                )
              )}
          </div>
    </div>
  )
}

export default SmallCardHolder