import React, { useState } from 'react'
import CountryCards from './CountryCards.jsx'

const Tunisia = () => {

  return (

    <div name="tunisia" className=' w-full h-screen bg-[#eaeaea]'>
      <div className='relative flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2'>
          <div className='-translate-y-48 pb-8 pl-4'>
            <p className='sm:text-4xl font-bold inline border-b-4 border-[#606268] text-[#922e2e]'>Tunisia</p>
            <p className='py-4 mt-4 font-bold text-2xl'> Just doing my part for my country tourism ! : </p>

          </div>
        </div>
        <div className='relative left-5 top-52'>
          <CountryCards />
        </div>

      </div>



    </div>
  )
}

export default Tunisia