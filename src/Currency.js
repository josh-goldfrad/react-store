import { useState } from "react";

function Currency() {
   
    function flip_to_dollar(value) {
        setDollar(value*0.3)
        setNis(value)

    }
    function flip_to_nis(value) {
        setDollar(value)
        setNis(value*3.38)
    }
const[Nis,setNis]=useState()
const[Dollar,setDollar]=useState()


    return (
        <div id="Currency">
            <input key={"shekel"} id='nis'placeholder="enter amount in nis"  value={Nis} onInput={() => flip_to_dollar(window.event.target.value)}></input>
            <label htmlFor='nis'>NIS ₪</label><br></br>
            <input id='dollars' placeholder="enter amount in dollar" value={Dollar} onInput={() => flip_to_nis(window.event.target.value)}></input>
            <label key={"dollar"}htmlFor='dollars'>USD $</label>
        </div>
    )
}

export default Currency;