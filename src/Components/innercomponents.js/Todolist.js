import React from 'react'

const Todolist = ({newnames,deletebtn,checkbox}) => {
  return (
    <div>{(newnames.length)?(
       <ul>
            {newnames.map((item) => (
                <li key={item.id} className={item.checked ? 'sticky' : ''}>
                    <input onClick={()=>checkbox(item.id,item.checked)} type="checkbox" />
                    <label>{item.name}   </label>
                    <button onClick={()=>deletebtn(item.id)}> delete</button>
                    
                </li>
            ))}
        </ul>):(
            <p className='error'>Your array is empty</p>
        )}</div>
    
  )
}

export default Todolist