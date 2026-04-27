import React from 'react'
import { Copyright } from "lucide-react";
const Footer = () => {
  return (
    <div className='bg-[#222222] w-full px-3.5 py-8 text-white rounded-xl mt-36'>
        <div className='flex flex-col px-2.5 py-3.5 md:flex-row md:justify-between lg:justify-between lg:flex-row gap-11'>
            <div className='flex flex-col gap-3'>
             <h1 className='text-[38px] font-[500]'>FLA<span className='text-[#F8B444]'>VORIZ</span></h1>
             <p className='text-[17px] opacity-45 font-[300]'>Join Flavoriz now and embark on a culinary journey <br />to explore, create, and savor amazing recipes!</p>
            </div>
            <div className='flex flex-row gap-9'>
              <div className='flex flex-col gap-3.5'>
                  <h2 className='text-[20px] font-[500]'>Comapny</h2>
                <p className='text-[15px] opacity-35'>About Us</p>
                <p className='text-[15px] opacity-35'>Our Stories</p>
                <p className='text-[15px] opacity-35'>Work with Us</p>
                <p className='text-[15px] opacity-35'>User Testimonials</p>
              </div>
                 <div className='flex flex-col gap-3.5'>
                  <h2 className='text-[20px] font-[500]'>Support</h2>
                <p className='text-[15px] opacity-35'>FAQ</p>
                <p className='text-[15px] opacity-35'>Membership</p>
                <p className='text-[15px] opacity-35'>User Policy</p>
                <p className='text-[15px] opacity-35'>Customer Support</p>
              </div>
               <div className='flex flex-col gap-3.5'>
                  <h2 className='text-[20px] font-[500]'>Contact</h2>
                <p className='text-[15px] opacity-35'>Phone Number</p>
                <p className='text-[15px] opacity-35'>Email Address</p>
                <p className='text-[15px] opacity-35'>Social Media</p>
                <p className='text-[15px] opacity-35'>Company Location</p>
              </div>
            </div>
            
        </div>


        <div className='mt-11'>
 <hr className='h-[0.1px] w-full px-2 opacity-40 bg-white'/>
 <div className='flex flex-col md:justify-between md:flex-row lg:flex-row lg:justify-between px-3.5'>
 <div className='mt-2.5 flex  gap-1.5'>
    
        <p className='opacity-40 text-[15px]'>Copyright</p>
        <Copyright className='opacity-40 text-[15px] mt-1' size={16}/>
        <p className='opacity-40 text-[15px]'>2026 Flavoriz.</p>
 </div>
<div className='mt-2.5 flex  gap-1.5'>
<p className='opacity-40 text-[15px]'>Privacy Policy | Terms and Condition</p>
</div>


 </div>
        </div>
    </div>
  )
}

export default Footer