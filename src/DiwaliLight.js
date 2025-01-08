import React, { useEffect, useState } from "react";

const DiwaliLight = () => {
  const [startshow, setStartshow] = useState(false);
  const [blingking, setblinking] = useState(false);
  const [firstinterval, setFirstinterval] = useState(1);
  const [secondinterval, setSecondinterval] = useState(0);
  const[type,settype]=useState('');
  const colorNames = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
    "Brown",
    "Black",
    "White",
    "Cyan",
    "Magenta",
    "Lime",
    "Gray",
    "Teal",
  ];

  const [firstLight, setFirstlight] = useState(0);

  useEffect(() => {
    let first;
    if (startshow) {
      console.log("yse start sghhow is called ");
    //   if(firstinterval===0){
    //       setFirstlight(getRandomIndex(colorNames.length))
    //       return () => clearInterval(first);

    
    //   }
      const first = setInterval(() => {
        setFirstlight((prev) => (prev === 10 ? (prev = 1) : prev + 1));
        if(type!=='statick'){
        setblinking(!blingking);
        }
        console.log("inter called");
        console.log(firstinterval);
      }, firstinterval);
      console.log(firstLight);
      return () => clearInterval(first);

    }
    return () => clearInterval(first);
  }, [startshow,firstLight,type,firstinterval]);
  console.log(firstLight);
  const colorClass = `bg-${colorNames[firstLight]}-500`;
  console.log(colorClass);
console.log(type);
  return (
    <div className=" flex flex-col">
      <h1> Diwali Ligh ManageMent System</h1>
      <div className=" flex  border border-black   py-3 ">
        <button
          className={`border-black border ${colorClass}   bg-${
            blingking ? "  bg-lime-600 " : "bg-zinc-400"
          } w-16 h-12`}
        >
          bg
        </button>
        {console.log(` bg-${colorNames[firstLight]}-500`)}
        <label>
          Patter:
          <select onChange={(e)=>settype(e.target.value)}  >
            <option>statick</option>
            <option>blinking</option>
            <option>dynamic</option>
          </select>
        </label>
        <label>
          Interval:(sec)
          <input
            onChange={(e) => setFirstinterval(e.target.value===0 ? e.target.value+1*1000:  e.target.value*1000 )}
            type=" text"
          />
        </label>
      </div>
      <div className=" border-black   py-3 border flex">
        <button className=" border-black  border  w-16  h-12"> </button>
        <label>
          Patter:
          <select>
            <option>statick</option>
            <option>blinking</option>
            <option>dynamic</option>
          </select>
        </label>

        <label>
          Interval:(sec)
          <input
            onChange={(e) => setSecondinterval(e.target.value * 1000)}
            type=" text"
          />
        </label>
      </div>
      <button onClick={() => setStartshow(true)}> Start Show </button>
      {startshow && (
        <button onClick={() => {setStartshow(false);setFirstinterval(0)}}> Stop Show</button>
      )}
    </div>
  );
};

export default DiwaliLight;
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function getRandomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}
