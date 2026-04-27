import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='font-thin  bg-[#E7EBF4] text-black'>
 <div className='max-w-[1300px] bg-[#FFFFFF] mx-auto  min-h-screen'>
   <Navbar />
   <Mainroutes />
     
 </div>
       
    </div>
  )
}

export default App