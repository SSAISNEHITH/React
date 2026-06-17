import { useRef } from "react";
function Reference(){
    const inputref =useRef();
    const inputref2 =()=>{
        inputref.current.focus();        
    }
    return(
    <>
    <h1>Reference Hook useRef</h1>
    <input ref={inputref} type="text"/>
    <button onClick={inputref2}>Submit</button>
    </>
    );
}
export default Reference; 