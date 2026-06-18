import UserContext from "./context.js";
import Recieve from "./Recieve.jsx"
function Variant1(){
    return (
        <UserContext.Provider value="Welcome to useContext">
            <Recieve></Recieve>
        </UserContext.Provider>
    );
}export default Variant1;