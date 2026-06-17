//Consumer.
import { useContext }  from "react";
import UserContext  from "./context.js";
function Star(){
    const shinchan = useContext(UserContext);
    return(
        <h1>:{shinchan}</h1>
    );
} export default Star;
