import Data from "./Context";
import { useContext } from "react";
function Signupsuccess(){
    const {setcontactsuccess}=useContext(Data);
    const fullname=localStorage.getItem('signupname')
    return<>
    <div className="thank-you-wrapper">
      <div className="thank-you-card">
        <div className="check-icon">&#10003;</div>
        <h2>Welcome, { fullname|| "User"}!</h2>
        <p>Your sign-up was successful. You are now signed in.</p>
        <button onClick={() => {setcontactsuccess('')}} className="back-button">OK</button>
      </div>
    </div>
    </>
}
export default Signupsuccess;