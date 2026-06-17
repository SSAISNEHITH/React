import { useState } from "react";
function Fire(){
    const [name, setName] = useState("");
    return(
<>
<label>
    Name:<input type="text" onChange={(e)=>setName(e.target.value)}></input>
</label>
<h3>Name:{name}</h3>
</>
    );
}
function Master()
{
    const [sample , setName]=useState("Travel");
    return (
    <> <h1>{sample}</h1>
        <button style={{width:"fit-content"}}
        onDoubleClick={()=>setName("Journey")}
        >Change</button>
        </>
    );
}
function Classic()
{
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    return(
<>
<h1>Count:{count}</h1>
<button
style={{width:"5cm"}}
onClick={()=>setCount(count+1)}>Count Increment</button>
<h1>Count2:{count2}</h1>
<button
style={{width:"5cm"}}
onClick={()=>setCount2(count2-1)}>Count Decrease</button>
<Master></Master>
<Fire></Fire>
</>
    );
}
export default Classic;