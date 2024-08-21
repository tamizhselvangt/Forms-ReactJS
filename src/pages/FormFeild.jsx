import { useState } from "react"
import './Forms.css'



export default function FormFeild({lableName= "Name", placeHol="Name" , req = "Name" , type = "text"}){
  const [val, setVal] = useState("");
   function updateVal(value){
    setVal(()=>value);
   }

  return(
    <div className="field">
       <label>{lableName}</label>
      <input type={type} placeholder={"Enter your "+ placeHol} value={val} onChange={(e)=>updateVal(e.target.value)} />
      {val === "" && <div className="req">{req} is Required</div>}
    </div>
  )
}
