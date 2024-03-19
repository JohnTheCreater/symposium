import React, { useEffect,useState } from 'react'
import axios from 'axios'


const Businformation = () => {
  const [status, setstatus] = useState([])
  const dummy=[{Busname:'govt',BusNumber:'TN2034u9',busstatus:true,ToArea:'madurai'},
  {Busname:'govt',BusNumber:'TN2034u9',busstatus:false,ToArea:'madurai'}]


     useEffect(()=>{
        axios.get('http://localhost:2718/api/get').then(status=>setstatus(status.data)).catch(err=>console.log(err))
     },[status])
   

  return (//jj:mx-[25rem] jj:my-[25rem] lg:mx-0 lg:my-0
   <div className='  ' >
 
            <div className=' flex justify-center items-center  jj:w-[100%] text-center  table-auto my-10 '>
            <table className='  lg:w-[50%] xl:w-[50%]  shadow-md rounded  text-black mx-[25%] '>
              <thead>
             <tr className='border-b hover:bg-blue-300'>
            <th className='px-5 py-5'><h1>Bus name  </h1></th>
            <th className='px-5 py-5'><h1>Bus number</h1></th>
            <th className='px-5 py-5'><h1>Bus status</h1></th>
            <th className='px-5 py-5'><h1>TO Area </h1></th>
             </tr>
             </thead>
             <tbody>{
              dummy.map(user=>{
                return( 
                    <tr className='border-b hover:bg-blue-300'>
                <td className='py-5 px-3 min-w-24 max-w-40'>{user.Busname}</td>
                <td className='py-5 px-4'>{user.BusNumber}</td>
                <td className='py-1 px-4'>{
                  user.busstatus? <button className='w-[40%] jj:w-20 h-[70%] p-2 m-4 bg-green-600 text-white rounded  hover:bg-green-400' > Inside</button>
                  : <button className='w-[40%] h-[70%] jj:w-20 p-2 m-4 bg-red-400 text-white rounded  hover:bg-red-400 '  >Outside</button>

                 
                }</td>
                <td className='py-1 px-4'>{user.ToArea}</td>
                {console.log(user.busstatus)}
              </tr>)
              })


                          
              }
            
           
            
           
             </tbody>
            
            </table>
            </div>
      
            </div>
       
       
            
  
  )
}

export default Businformation