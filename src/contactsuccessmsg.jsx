import Data from "./Context";
import { useContext } from "react";
function Alert(){
    const {setcontactsuccess}=useContext(Data);
    return<>
<div className="thank-you-wrapper">
  <div className="thank-you-card">
    <div className="check-icon">&#10003;</div>
    <h2>Thank You!</h2>
    <p>Your message has been received. We'll get back to you soon.</p>
    <button onClick={()=>setcontactsuccess('')} className="back-button">OK</button>
  </div>
</div>
    </>
}
export default Alert;