import './App.css';
import { useEffect, useState } from 'react';
import Content from './Components/contentPage';
import Footer from './Components/footer';
import Header from './Components/header';
import Inputbar from './Components/Inputbar';
function App() {
  const AIP_KEY="http://localhost:3434/details"
  const names = ["kishore", "kannan", "hasif"];
    const [nameof, setnameof] = useState(names[0])
  
    const changename=()=>{
        const indexof=Math.floor(Math.random()*names.length)
        setnameof(names[indexof])
        
    }
    const [newnames, setnewnames] = useState(() => {
      const saved = localStorage.getItem("todolist");
      return saved ? JSON.parse(saved) : [];
    });
//   [
//     {
//         id:1,
//         name:"Play Game ",
//         checked:false
        
//     },
//     {
//         id:2,
//         name:"Study React",
//         checked:false 
//     },
//     {
//         id:3,
//         name:"Read books",
//         checked:false
//     },
//     {
//         id:4,
//         name:"Cook lunch",
//         checked:false
//     }
// ]
useEffect(()=>{
  const fetchdata= async()=>{
    try{
      const response= await fetch(AIP_KEY)
      const listdata= await response.json()
      setnewnames(listdata)

    }
    catch(err){
      console.log(err.stack)

    }
  }
  fetchdata()
},[])
  function checkbox(id,checked1){
      const checkedItem=newnames.map((item)=>
        item.id === id ? { ...item, checked: true } : item
      )
      setnewnames(checkedItem)

      console.log({id ,checked1});
      console.log({newnames})
      localStorage.setItem("todolist",JSON.stringify(checkedItem))

  }
  const deletebtn=(itemid)=>{
      const deleteid=newnames.filter((item)=>
          item.id!==itemid)
      setnewnames(deleteid)
      localStorage.setItem("todolist",JSON.stringify(deleteid))
      
     
  }
  return (
    <div className="App">
      <Header />
      {/* <Inputbar 
        newnames={newnames}
        setnewnames={setnewnames}
      /> */}
      <Content 
        nameof={nameof}
        changename={changename}
        newnames={newnames}
        deletebtn={deletebtn}
        checkbox={checkbox}
        setnewnames={setnewnames}
      />
      <Footer 
        length={newnames.length}
      />
    </div>
  );
}

export default App;
