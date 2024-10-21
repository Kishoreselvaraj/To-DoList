// import Simplearray from "./innercomponents.js/simplearray";
import Todolist from "./innercomponents.js/Todolist";
import Inputbar from './Inputbar';

// import {useState} from 'react'
function Content({nameof,changename,newnames,deletebtn,checkbox,setnewnames}) {
    return (
        <div className="content">
            {/* <Simplearray 
                nameof={nameof}
                changename={changename}
            /> */}
            <br />
            <Inputbar 
                newnames={newnames}
                setnewnames={setnewnames}
      />
            <Todolist 
                newnames={newnames}
                deletebtn={deletebtn}
                checkbox={checkbox}
            />
        </div>
    );
}

export default Content;
