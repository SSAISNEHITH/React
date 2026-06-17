//Provider
import UserContext from "./context.js";
import Recieve from "./Recieve.jsx"
function Variant(){
    return (
        <UserContext.Provider value="SaiSnehith">
            <Recieve></Recieve>
        </UserContext.Provider>
    );
}export default Variant;

