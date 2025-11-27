import React, { useState } from 'react'

const Day_10_CollectionFrom = () => {

    const [name,setName]= useState("")

    const [email,setemail] = useState("")

    const [number,setnumber] = useState("")

    const datachange =(e)=>{

        setName(e.target.value)
        setemail(e.target.value)
        setnumber(e.target.value)

        const data = {name,email,number}
        console.log(data);
        

    }

  return (
    <>
    
    <div className='bg-gray-900 text-white p-10 h-100 flex justify-center flex-col items-center'>
      <div className='bg-white text-black p-20 rounded'>
         <form className='flex flex-col gap-3 justify-center items-center bg-amber-100 p-3 rounded-2xl'>
            <div>
                 <label>Enter the name</label>
      <input type="text" onChange={datachange}   className='bg-gray-600 mx-6 text-white p-1 rounded' placeholder='enter name' />
            </div>
      <div>
         <label>Enter the Eamil</label>
      <input type="email" onChange={datachange}   className='bg-gray-600 mx-6 text-white p-1 rounded' placeholder='enter email' />
      </div>
      <div>
         <label>Enter the Number</label>
      <input type="number"  onChange={datachange} className='bg-gray-600 mx-6 text-white p-1 rounded' placeholder='enter number' />
      </div>

      <div>
        <button>Register</button>
      </div>
    </form>
    </div>
       
      
    </div>
    </>
  )
}

export default Day_10_CollectionFrom