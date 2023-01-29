import { useState } from "react"

function Fcalculator() {
    const [num, setNum] = useState('0');
    const [oldNum, setOldNum] = useState('0');
    const [operator, setOperator] = useState();

    function Num(e) {
        var input = e.target.value
        setNum(num + input) //concat
        
        if(num == '0' || num=='00')
        {
            setNum(input)
        }
    }
    function clear() {
        setNum('');   
    }
    function back()
    {
        var x = num.substring(0,num.length-1)
        setNum(x)
    }

    function arithmetic(a) {
        let operator = a.target.value;
        setOperator(operator);
        setOldNum(num);
        setNum('');
    }

    function calculate() {
        if (operator == "/") {
            setNum(parseFloat(oldNum) / parseFloat(num));
        } else if (operator == "*") {
            setNum(parseFloat(oldNum) * parseFloat(num));
        } else if (operator == "-") {
            setNum(parseFloat(oldNum) - parseFloat(num));
        } else if (operator == "+") {
            setNum(parseFloat(oldNum) + parseFloat(num));
        }

        
    }
    

    return (
        <>
        <div className="heading">
            <p>React  Calculator</p>
        </div>
        <div className="button">
        <input type="text" value={num}  /><br></br>
            <button onClick={clear} className='ac'>AC</button>
            <button onClick={back} >C</button>
            <button onClick={arithmetic} value={'/'}>/</button><br></br>
            <button onClick={Num} value={7}>7</button>
            <button onClick={Num} value={8}>8</button>
            <button onClick={Num} value={9}>9</button>
            <button onClick={arithmetic} value={'*'}>*</button><br></br>
            <button onClick={Num} value={4}>4</button>
            <button onClick={Num} value={5}>5</button>
            <button onClick={Num} value={6}>6</button>
            <button onClick={arithmetic} value={'-'}>-</button><br></br>
            <button onClick={Num} value={1}>1</button>
            <button onClick={Num} value={2}>2</button>
            <button onClick={Num} value={3}>3</button>
            <button onClick={arithmetic} value={'+'}>+</button><br></br>
            <button onClick={Num} value={0}>0</button>
            <button onClick={Num} value={"."}>.</button>
            <button className="equal" onClick={calculate}>=</button>
        </div>
        </>
    )
}
export default Fcalculator 