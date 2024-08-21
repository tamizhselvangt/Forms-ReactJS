
import { useState } from 'react'
import './Forms.css'

export default function SelectionFeild( {lableName="Name", options=[],  req="Field"}){
  const [val, setVal] = useState("Select");

  function changeValue(event){
    setVal(event.target.value);
  }
  return(
    <div className="selectionFeild field">
      <label for="cars">{lableName}</label>
       <select id="selection" className='input' onChange={changeValue}>
            {options.map((item)=> <option key={item} value={item}>{item}</option>) }
       </select>
       {val === "Select" && <div className="req">{req} is Required</div>}
    </div>
  )
}
