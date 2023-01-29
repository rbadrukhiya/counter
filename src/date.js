function Date()
{
    // const [date , setdate]
    function num(d)
    {
        var i=d.target.value
        alert(i);
    }
    return(
        <>
        <input type="date" placeholder="ENTER START DATE" onClick={num}/>
        <input type="date" placeholder="ENTER END DATE"/>
        </>
    )
}
export default Date