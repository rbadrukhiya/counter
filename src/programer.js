import { useState } from "react"

function Program() {
    const [num, setNum] = useState('0');
    const [oldNum, setOldNum] = useState('0');
    const [operator, setOperator] = useState();
    const [hexa, sethexa] = useState();
    const [oct, setoct] = useState();
    const [bin, setbin] = useState();
    const [disableb, setdisableb] = useState(false);
    const [disableo, setdisableo] = useState(false);
    const [decid, setdecimald] = useState(false);
    const [dec, setdec] = useState();
    var input
    var module
    


    function binary() {
        setdisableb(true)
        setdisableo(true)
    }
    function octal() {
        setdisableo(true)
        setdisableb(false)
    }
    function hexadecimal() {
        setdisableb(false)
        setdisableo(false)
        setdecimald(false)
    }
    function decimal(){
        setdecimald(true)
        setdisableb(false)
        setdisableo(false)
    }

    function Num(e) {
        input = e.target.value
        setNum(num + input) //concat
        if (num == '0' || num == '00') {
            setNum(input)
        }
    }
    function clear() {
        setNum('');
        sethexa('')
        setbin('')
        setdec('')
        setoct('')
        setdisableo(false)
        setdisableb(false)
        setdecimald(false)
        window.location.reload(false);
        
        
        
        

    }
    function back() {
        var x = num.substring(0, num.length - 1)
        setNum(x)
    }
    function convert(d) {
        //    var o= u.target.value
        sethexa(Number(d).toString(16))
        setbin(Number(d).toString(2))
        setoct(Number(d).toString(8))
        setdec(d)
        // alert(d);

    }
    function calculate() {
        if (operator == "/") {
            module = (parseFloat(oldNum) / parseFloat(num));
            // alert(module);
            setNum(module)
            convert(module);
        } else if (operator == "*") {
            module = (parseFloat(oldNum) * parseFloat(num));
            setNum(module)
            // alert(module)
            convert(module);
        } else if (operator == "-") {
            module = (parseFloat(oldNum) - parseFloat(num));
            setNum(module)
            convert(module);
        } else if (operator == "+") {
            module = (parseFloat(oldNum) + parseFloat(num));
            setNum(module)
            convert(module);
        }
        else {
            convert(num);
        }


    }

    function arithmetic(a) {
        let operator = a.target.value;
        setOperator(operator);
        setOldNum(num);
        setNum('');
    }


    return (
        <>
            <div className="heading">
                {/* <p>React Programing Calculator</p> */}
            </div>
            <div className="button">
                <div className="display">
                    ans<input type="text" value={num} /><br></br>
                    hex<input type="text" value={hexa} placeholder='hexadecimal' onClick={hexadecimal} /><br></br>
                    dec<input type="text" value={dec} placeholder='decimal' onClick={decimal} /><br></br>
                    bin<input type="text" value={bin} placeholder='binary' onClick={binary} /><br></br>
                    oct<input type="text" value={oct} onClick={octal} placeholder='octal' /><br></br>
                </div>





                <div className="container">
                    <div className="row">
                        <div className="col-auto m-0 p-0">
                            <button onClick={clear} className='ac'>AC</button>
                        </div>
                        <div className="col-auto m-0 p-0">
                            <button onClick={back} >x</button>
                        </div>
                        <div className="col-auto m-0 p-0">
                            <button onClick={arithmetic} value={'/'}>/</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto p-0 m-0">
                            <button onClick={Num} disabled={disableb}  value={7}>7</button>
                        </div>
                        <div className="col-auto p-0">
                            <button onClick={Num} disabled={disableb + disableo}  value={8}>8</button>
                        </div>
                        <div className="col-auto m-0 p-0">
                            <button onClick={Num} disabled={disableb + disableo}  value={9}>9</button>
                        </div>
                        <div className="col-auto m-0 p-0">
                            <button onClick={arithmetic} value={'*'}>*</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto m-0 p-0">
                            <button onClick={Num} disabled={disableb}  value={4}>4</button>
                        </div>
                        <div className="col-auto m-0 p-0">
                            <button onClick={Num} disabled={disableb}  value={5}>5</button>
                        </div>
                        <div className="col-auto m-0 p-0">
                            <button onClick={Num} disabled={disableb}  value={6}>6</button>
                        </div>
                        <div className="col-auto m-0 p-0">
                            <button onClick={arithmetic} value={'-'}>-</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto m-0 p-0">
                            <button onClick={Num}  value={1}>1</button>
                        </div>
                        <div className="col-auto m-0 p-0">
                            <button onClick={Num} disabled={disableb}  value={2}>2</button>
                        </div>
                        <div className="col-auto m-0 p-0">
                            <button onClick={Num} disabled={disableb}  value={3}>3</button>
                        </div>
                        <div className="col-auto m-0 p-0">
                            <button onClick={arithmetic} value={'+'}>+</button><br></br>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto p-0 m-0">
                            <button onClick={Num} id='zero' value={0}>0</button>
                        </div>
                        <div className="col-auto p-0 m-0">
                            <button onClick={Num} value={"."}>.</button>
                        </div>
                        <div className="col-auto p-0 m-0">
                            <button className="equal" onClick={calculate}>=</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto p-0 m-0">
                            <button onClick={Num} disabled={disableb + disableo + decid} value={'a'}>a</button>
                        </div>
                        <div className="col-auto p-0 m-0">
                            <button onClick={Num} disabled={disableb + disableo + decid} value={'b'}>b</button>
                        </div>
                        <div className="col-auto p-0 m-0">
                            <button onClick={Num} disabled={disableb + disableo + decid} value={'d'}>d</button><br></br>
                        </div>
                        <div className="col-auto p-0 m-0">
                            <button onClick={Num} disabled={disableb + disableo + decid} value={'c'}>c</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto p-0 m-0">
                            <button onClick={Num} disabled={disableb + disableo + decid} value={'e'}>e</button>
                        </div>
                        <div className="col-auto p-0 m-0">
                            <button onClick={Num} disabled={disableb + disableo + decid} value={'f'}>f</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Program