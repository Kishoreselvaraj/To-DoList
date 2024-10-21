import React from 'react'
import { useState } from 'react'
const Inputbar = ({newnames,setnewnames}) => {
    const [input, setinput] = useState('')
    const onchange=(e)=>{
        
        setinput(e.target.value)
        localStorage.setItem("todolist",JSON.stringify(e.target.value))
    }
    const handleonchange=(e)=>{
        e.preventDefault();
        console.log(e.target.value)
        const newId = newnames.length ? newnames[newnames.length - 1].id + 1 : 0;

        const newinput=[...newnames,{
            id:newId,
            name:e.target.value,
            checked:false
            
        }]
        setnewnames(newinput)
        setinput('')
        localStorage.setItem("todolist",JSON.stringify(newinput))
        
    }
  return (
    <div className='input input-bar'>
        <input 
            type="text"
            value={input}
            onChange={onchange}
            className='input-field'
            placeholder="Enter ToDo List"
            required

        />
        <button onClick={handleonchange}
            type='submit'
            value={input}
            className='submit-button'
            
        >Submit</button>
    </div>
  )
}

export default Inputbar