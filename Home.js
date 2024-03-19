import React from 'react'
import living from './bus4.jpg'
const Home = () => {
  return (
    <div>
        <div className='relative jj:w-[105%]'>
          <img src={living} className='w-full  h-screen object-cover opacity-70'alt='homw'/>
          <h1 class="absolute  text-7xl text-gray-500 top-[10%] left-[20%] font-bold font-sans">
            TIME TO TRAVEL</h1>
        </div>

    </div>
  )
}


export default Home