

 import React, { useState } from 'react'

const Day_10 = () => {

     const [text,setText] = useState("")
    

  const takedata =(t)=>{

    setText(t.target.value)
   
    
  }

    

  return (
    <>
    
    <h1>From Handling</h1>

    <div className='bg-gray-900 text-white p-10 h-100 flex justify-center flex-col items-center'>
      <div className='bg-white text-black p-20 rounded'>
         <form>
      <label>Enter the name</label>
      <input type="number"  onChange={takedata} className='bg-gray-600' placeholder='enter name' /> 
    </form>
    <div>
        <h2>Input Text : {text}</h2> <br />
   
      </div>
      </div>

      
    </div>
   
    </>
  )
}

export default Day_10 