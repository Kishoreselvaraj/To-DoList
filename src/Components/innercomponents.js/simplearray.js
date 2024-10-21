import React from 'react'

const Simplearray = ({nameof,changename}) => {
  return (
    <div>
        <p>{nameof}</p>
            <button onClick ={changename}
                type="submit"
                value="submit">
                Submit
            </button>
    </div>
    
  )
}

export default Simplearray