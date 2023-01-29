import {useState} from 'react';
function Calculator()
{
    const [calc , setcalc ]  = useState(0);
    const [calcp , setcalcp ]  = useState(0);
    const [ans , setans] = useState(0);
    // const [calcm , setcalcm ]  = useStatm(0);
    // const [calcd , setcalcd ]  = useStatd(0);
   const plus = () =>
   {
       setans(parseInt(calc) + parseInt(calcp))
   } 
   const sub =() =>
   {
    setans (parseInt(calc) - parseInt(calcp))
   }
   const mul =() =>
   {
    setans (parseInt(calc) * parseInt(calcp))
   }
   const div =() =>
   {
    setans (parseInt(calc) / parseInt(calcp))
   }
    return(
        <>
        <div className="calc">
        <input type="text"  onChange={(e) => {setcalc(e.target.value)}} /><br></br>
        <input type="text"  onChange={(a) => {setcalcp(a.target.value)}} /><br></br>
        <input type="button" value="+" onClick={plus} />
        <input type="button" value="-"  onClick={sub}/>
        <input type="button" value="*"  onClick={mul}/>
        <input type="button" value="/"  onClick={div}/><br></br>
        <input type="text" value={ans} />
        </div>
        </>
    )
}
export default Calculator;