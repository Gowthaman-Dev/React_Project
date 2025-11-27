import React, { useState } from 'react'

const Day_10_CollectionFrom = () => {

    const [data,setData]= useState({name:"",email:"",number:""})
    
    

    const datachange =(e)=>{

       setData({...data,[e.target.name]:e.target.value})

    }
   
    

    const dataclick =(e)=>{
      e.preventDefault()

      

      const changedata = JSON.stringify(data)

      localStorage.setItem("userdatas",changedata)
       console.log(changedata);
     alert("Welcome to Gowtham Webpage ")  

     setData({fullName:"",email:"",Number:""})

    }

    
    
  return (
    <>
    
    <div className='bg-gray-900 text-white p-10 h-100 flex justify-center flex-col items-center'>
      <div className='bg-white text-black p-20 rounded'>
         <form className='flex flex-col gap-3 justify-center items-center bg-amber-100 p-3 rounded-2xl'>
            <div>
                 <label>Enter the name</label>
      <input type="text" name="fullName" value={data.fullName} onChange={datachange}   className='bg-gray-600 mx-6 text-white p-1 rounded' placeholder='enter name' />
            </div>
      <div>
         <label>Enter the Eamil</label>
      <input type="email" name='email' value={data.email} onChange={datachange}   className='bg-gray-600 mx-6 text-white p-1 rounded' placeholder='enter email' />
      </div>
      <div>
         <label>Enter the Number</label>
      <input type="number" name='Number' value={data.Number} onChange={datachange} className='bg-gray-600 mx-6 text-white p-1 rounded' placeholder='enter number' />
      </div>

      <div>
        <button className='bg-gray-950 text-white rounded  p-2' onClick={dataclick}>Register</button>
      </div>
    </form>
    </div>
       
      
    </div>
    </>
  )
}

export default Day_10_CollectionFrom