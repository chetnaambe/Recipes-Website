import React from 'react'
import Hero from '../assets/hero.png'
const hero = () => {
  return (
    <div className='h-full w-full flex flex-col md:flex-row lg:flex-row bg-[#FFFFFF] '>
       <div className='w-full md:w-[60%] lg:w-[60%] mt-1 px-11 md:px-8 lg:px-11 py-20 md:py-28 lg:py-36'>
          <h2 className='text-[38px] md:text-[44px] lg:text-[54px] font-[700] leading-tight lg:leading-16 '>Cook Like a Pro with <br /> Our <span className='text-[#F8A725]'>Easy</span> and <span className='text-[#F8A725]'>Tasty</span> <br />Recipes</h2>
       </div>
       <div className='w-full md:w-[40%] lg:w-[40%] mt-1'>
       <img className='w-full' src= {Hero} alt="" />
       </div>
      </div>
  )
}

export default hero