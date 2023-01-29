import { useState } from "react"

function Calc()
{
    const [thecalc , setcalc] = useState(0);
    const [thecalcp , setcalcp] = useState(0);
    const [ans , setans] = useState(0);
    const plus = () =>{

        setans (parseInt(thecalc) + parseInt(thecalcp))
    }
    const sub = () =>{

        setans (parseInt(thecalc) - parseInt(thecalcp))
    }
    return(
        <>
       <div className="calc">
        <input type="text"  onChange={(e) => {setcalc(e.target.value)}} /><br></br>
        <input type="text"  onChange={(a) => {setcalcp(a.target.value)}} /><br></br>
        <input type="button" value="+" onClick={plus} />
        <input type="button" value="-" onClick={sub} /><br></br>
        <input type="text" value={ans} />

        </div>
        </>
    )
}
export default Calc