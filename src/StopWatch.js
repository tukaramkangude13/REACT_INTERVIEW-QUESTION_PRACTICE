import React, { useEffect, useState } from 'react'

const StopWatch = () => {

    const[secons,setsecond]=useState(0);
    const[isrunnig,setisrunning]=useState(false);
    useEffect(()=>{
        let timer;
        if(isrunnig){
            timer=setInterval(() => {
                setsecond((prevsecond)=>prevsecond+1)
            }, 1000);
        }
        else{
            clearInterval(timer);
    }
    {console.log(timer)}

    return()=>clearInterval(timer);
    },[isrunnig]);
    const handlereset=()=>{
        setsecond(0);
        setisrunning(false);
    }
const handlepause=()=>{
    setisrunning(!isrunnig);
}

console.log(secons);
  return (
    <div>

<button onClick={handlepause}>
{isrunnig ? "Pause" : "Start"}

</button>
<h1>timer:{secons}</h1>

<button  onClick={handlereset}>reset</button>

    </div>
  )
}

export default StopWatch