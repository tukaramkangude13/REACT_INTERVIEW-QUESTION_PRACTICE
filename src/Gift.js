import React, { useState } from 'react'

const Gift = () => {
  const [name,setname]=useState('');
  const[data,setdata]=useState([
{
    name:"rahul",
    gift:null,
},
  ]);
    const addperson=()=>{
        if(!name) return;
        setdata([...data,{
            name:name,
            gift:null

        }])
        setname('');
    }
    const predefinedGifts = [
        "Sweets",
        "Lights",
        "Candles",
        "Decorations",
        "Diyas",
        "Firecrackers",
      ];
    console.log(data);
    const filter=(id)=>{
        setdata(data.filter((item,index)=>index!==id))   }
  return (
    <div>
        <input  className=" border-black  border   py-2    "  value={name}  type='text' placeholder='enter participent name'    onChange={(e)=>setname(e.target.value)}  />
        <button onClick={()=>addperson()} >Add Person</button>

   {data.map((item,index)=>(      
    <div className='  flex  gap-4  '><p>{item.name}</p>
    <button className=' cursor-pointer'>  No gift   </button>
    
    <button    onClick={()=>filter(index)} >remove</button>
    </div>
    
     ))}
    </div>
  )
}

export default Gift