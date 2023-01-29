import { useState } from 'react';

function Counter() {
  const [count , setcount] = useState(0);


 const counterplus = ()=>
 {
   setcount(count + 1)
 }
 const countersub =()=>
 {
  if(count==0)
  {
      setcount(count=0)
  }
  setcount(count-1)
}

  return (
    <div className="App">
      <input type="text" value={count} />
       <input type="button" value="+" onClick={counterplus} />
       <input type="button" value="-" onClick={countersub}/>


    </div>
  );
}

export default Counter
