import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Data from "./Context";
import { useContext } from "react";
import axios from "axios";
const CheckoutPage = () => {
    const {checkoutvalues,checkoutinfo,checkoutbtn,loader,setloader}=useContext(Data);
    const [checkout,setcheckout]=useState([]);
    const {id}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
       axios.get(`/api/checkout/${id}`)
       .then((res)=>{
        setcheckout(res.data);
       })
       .catch((err)=>{
        setcheckout(err);
       })
       .finally(()=>{
        window.scrollTo({top:'0%',behavior:"smooth"});
        setloader('');
       })
    },[]);
  return <>
  {loader}
    <div className="checkout-container" style={{marginTop:'5%'}}>
      <div className="checkout-grid">
        {/* Billing & Shipping Form */}
        <div className="checkout-form">
          <h2>Billing Details</h2>
          <form >
            <label>
              Full Name
              <input type="text" placeholder="John Doe" required value={checkoutinfo.checkoutname||''} name="checkoutname" onChange={checkoutvalues} />
            </label>
            <label>
              Email
              <input type="email" placeholder="john@example.com" required value={checkoutinfo.checkoutemail||''}  name="checkoutemail" onChange={checkoutvalues}/>
            </label>
            <label>
              Address
              <input type="text" placeholder="123 Main St" required name="checkoutaddress" value={checkoutinfo.checkoutaddress||''}  onChange={checkoutvalues} />
            </label>
            <div className="two-columns">
              <label>
                City
                <input type="text" placeholder="City" required value={checkoutinfo.checkoutcity||''}  name="checkoutcity" onChange={checkoutvalues} />
              </label>
              <label>
                Zip
                <input type="number" required placeholder="12345" name="checkoutzipcode" value={checkoutinfo.checkoutzipcode||''}  onChange={checkoutvalues}/>
              </label>
            </div>
            <label>
              Country
              <input type="text" placeholder="USA" required name="checkoutcountry" value={checkoutinfo.checkoutcountry||''}  onChange={checkoutvalues} />
            </label>
          </form>
        </div>

        {/* Order Summary */}
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>{checkout.title}</span>
            <span>{checkout.price}</span>
          </div>
          <hr />
          <div className="summary-item">
            <span>Subtotal</span>
            <span>{checkout.price}</span>
          </div>
          <div className="summary-item">
            <span>Shipping</span>
            <span>150</span>
          </div>
          <hr />
          <div className="summary-total">
            <span>Total</span>
            <span>{Number(checkout.price)+Number(150)} </span>
          </div>

          <h3>Payment Info</h3>
          <label>
            Card Number
            <input type="number" required placeholder="1234 5678 9012 3456" value={checkoutinfo.checkoutcardnumber||''}  name="checkoutcardnumber" onChange={checkoutvalues}/>
          </label>
          <div className="two-columns">
            <label>
              Expiry
              <input type='text' placeholder="MM/YY" required name="checkoutcardexpiry" value={checkoutinfo.checkoutcardexpiry||''}  onChange={checkoutvalues} />
            </label>
            <label>
              CVV
              <input type="text" placeholder="123" required name="checkoutcardcvv" value={checkoutinfo.checkoutcardcvv||''}  onChange={checkoutvalues}/>
            </label>
          </div>

          <button className="checkout-button" type='submit' onClick={()=>{navigate('/');checkoutbtn(checkout.title,checkout.price)}} disabled={!checkoutinfo.checkoutcardcvv||!checkoutinfo.checkoutaddress|| !checkoutinfo.checkoutemail || !checkoutinfo.checkoutcardexpiry || !checkoutinfo.checkoutcardnumber || !checkoutinfo.checkoutcity || ! checkoutinfo.checkoutcountry || !checkoutinfo.checkoutname || !checkoutinfo.checkoutzipcode}>Complete Purchase</button>
        </div>
      </div>
    </div>
  </>
};

export default CheckoutPage;
