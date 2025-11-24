import { useState } from "react"


const TomAndJerry = () => {
   let data = 2
    const datas =()=>{
       data ++
       data ++
      
 
    }

    const  [tom,SetTom] = useState(false)
    const [jerry,SetJerry] = useState(true)

    const tomchange =()=>{

        SetTom(!tom)
        SetJerry(!jerry)

    }

    const jerrychange =()=>{

        SetJerry(!jerry)
        SetTom(!tom)
    }

  return (
    <>
    <div className="flex justify-center items-center flex-col p-10">
<h1>{data}</h1>
<button  className="bg-amber-300 border p-1 rounded-2xl " >Click me</button>
</div>

<div className="felx justify-center items-center flex-col p-10">
    <div className="w-60">
        {tom &&  <img src="../src/assets/images/tom.jpg" alt="" />}
       {jerry &&  <img src="../src/assets/images/jerry.png" alt="" />}
    </div>
       
    <div>
        <button onClick={tomchange} className="bg-amber-400 p-1 mx-3 w-40 rounded-2xl">Tom</button>
        <button onClick={jerrychange} className="bg-amber-400 p-1 w-40 rounded-2xl">Jerry</button>
    </div>
</div>
    </>
  )
}

export default TomAndJerry
