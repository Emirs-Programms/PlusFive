import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <h1>{num}</h1>
      
     <button onClick={()=>{
    if(num<15)setNum(num + 1);
     }}>+1</button>
      <button onClick={()=>{
    if(num>0) setNum(num - 1);
    
     }}>-1</button>
     
     <button onClick={()=>{
      if(num<12){
        setNum(num + 5)
      }else{
        setNum(15)
      }


      
     
      
    // if(num<15){
    //   setNum(num + 5)
    // }else if(num >15){
    //   setNum(15)
    // }
     
    
     }}>+5</button>
     <button onClick={()=>{
      if(num>0) setNum(num - 5);
      if(num<5)setNum(0)
     }}>-5</button>
     <button onClick={()=>{
       
       setNum(0)
     }}>reset</button>
    </div>
  );
}

export default App;
