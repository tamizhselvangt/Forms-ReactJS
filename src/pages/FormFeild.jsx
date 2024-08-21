import { useState } from "react"




export default function FormFeild({lableName= "Name", placeHol="Name" , req = "Name" , type = "text"}){
  const [val, setVal] = useState(" ");
   function updateVal(value){
    setVal(()=>value);
   }

  return(
    <div>
       <label>{lableName}</label>
      <input type={type} placeholder={"Enter your "+ placeHol} value={val} onChange={(e)=>updateVal(e.target.value)} />
      {val === "" && <div>{req} is Required</div>}
    </div>
  )
}
