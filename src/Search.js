import React, { useEffect } from "react"
import { useState } from "react"



const Search=()=>{

    const[data,setdata]=useState(null);
const[showbigimagetru,setshowbigimagetru]=useState(false);
const[num,setnum]=useState(null);
    const getdata=async()=>{


    const data=await fetch("https://jsonplaceholder.typicode.com/photos");
    const gallary=await data.json();
    setdata(gallary);
}
const[show,setshow]=useState(false);
useEffect(()=>{
getdata();
},[]);
const [album,setalbum]=useState(1);
console.log(data);
if(!data) return;
return(
<div>

<div>

<div className=" flex    gap-5 text-red-600 ">
    
<button  onClick={()=>{setalbum(1); setshow(!show)}}  >  album 1 </button>
<button  onClick={()=>setalbum(2)} >  album 2 </button>
<button  onClick={()=>setalbum(3)} >  album 3 </button>
{/* <button  onClick={setalbum(4)} >  album 4 </button>
<button  onCanPlay={setalbum(5)} >  album 5 </button>
<button onCanPlay={setalbum(6)}>  album 6 </button>
<button  onClick={setalbum(7)} >  album 7 </button>
<button onCanPlay={setalbum(8)}>  album 8 </button> */}
<button>  album 9 </button>

</div>
</div>
{  show  &&   data.slice(0,1000).map((item,index)=>(
    <div>
        {item.albumId===album &&
        
        <div><img onClick={ ()=>{setshowbigimagetru(!showbigimagetru);   setnum(item.id)  } }   className={`${showbigimagetru  && num==item?.id ?   '  w-[1750px] ' : '' }`} src={item.url} alt=""/></div>
         }
    </div>
))}
</div>
)

}
export default Search;