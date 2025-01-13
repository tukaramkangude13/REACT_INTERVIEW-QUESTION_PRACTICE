import react from "react"

const ApplicationCounter = () => {
  const tasks=[
    {
      "id": 1,
      "name": "Learn React basics",
      "status": "Pending"
    },
    {
      "id": 2,
      "name": "Complete the portfolio website",
      "status": "Completed"
    },
    {
      "id": 3,
      "name": "Prepare for coding interviews",
      "status": "Pending"
    },
    {
      "id": 4,
      "name": "Submit the internship application",
      "status": "Completed"
    },
    {
      "id": 5,
      "name": "Review JavaScript concepts",
      "status": "Pending"
    }
  ]
  const[pending,setpendig]=react.useState(false);
  
    return (
   <div>


    <div>  takse:</div>

<div className="   h-screen bg-black text-white"> 

<button> ALL</button>
<button onClick={()=>setpendig(!pending)}>Pending</button>
<button>completed</button>

{tasks.map((item,index)=>(
    <div key={item.id}>
        <p className=" flex flex-col">{item.name}</p>

    </div>
))}
  </div>   </div>
  )
}

export default ApplicationCounter