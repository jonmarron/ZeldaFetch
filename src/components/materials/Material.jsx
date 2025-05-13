import React from 'react'

const Material = ({imgSrc, name, locations, cookingEffect}) => {

  return (
    <div className='rounded-2xl overflow-hidden max-w-3/12 flex flex-col shrink-0 hover:shadow-[0px_7px_14px_-6px_rgba(57,209,133,0.4)] transition-all'>
      <img className="w-full" src={imgSrc} alt="" />
      <div className='w-full bg-white text-gray-900 p-4 flex flex-col gap-2'>
        <h3 className='text-2xl font-bold uppercase tracking-wider'>{name}</h3>
        {locations && <div>
          <h3 className='font-semibold'>Common Locations:</h3>
          <ul>
            {locations.map((location, index) =>{
              return <li key={index}>- {location}</li>
            })}
          </ul>
        </div>}
        <div>
            <h3 className='font-semibold'>Cooking effect:</h3>
            <p>- {cookingEffect}</p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Material