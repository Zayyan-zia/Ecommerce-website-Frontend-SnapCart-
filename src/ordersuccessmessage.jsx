import Data from "./Context";
import { useContext } from "react";
function Ordersuccess(){
    const {setcontactsuccess}=useContext(Data);
    const ordername=localStorage.getItem('ordername');
    const  removeordername=()=>{
        localStorage.removeItem('ordername');
    }
    return<>
    <div className="thank-you-wrapper">
      <div className="thank-you-card">
        <div className="check-icon">&#10003;</div>
        <h2>Thanks For Order, {ordername}!</h2>
        <p>We will deliver your order within 3-4 working days.</p>
        <button onClick={() =>{setcontactsuccess('');removeordername()}} className="back-button">OK</button>
      </div>
    </div>
    </>
}
export default Ordersuccess;