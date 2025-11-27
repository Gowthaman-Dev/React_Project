import React, { useEffect, useState } from 'react'

const Day_10_showdatas = () => {

    const [datas,setDatas] = useState({})
        const showData = ()=>{
        const data = localStorage.getItem("userdatas")
        console.log(data);

        const changedatas = JSON.parse(data)
        //console.log(changedatas);

        setDatas(changedatas)
        
        
        }

        useEffect(()=>{
            (async()=>{
                await showData()
            }
            )()
            


        },[])
    
  return (
    <>
    <div className='bg-blue-500 gap-2 p-20 h-100'>
        <div className='bg-white w-80 gap-2.5 h-50 rounded p-5'>
            <h1>Name : {datas.fullName}</h1>
            <p>Email :{datas.email}</p>
            <p>Mobile : {datas.Number}</p>
        </div>
        <div>
            <button className='bg-yellow-400 p-1 w-40 rounded'>Show</button>
        </div>
    </div>
    </>
  )
}

export default Day_10_showdatas