import Data from "./Context";
import { useContext, useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function CartPage  ()  {
    const {cartitem,subtotal,total,cartproductremove}=useContext(Data);
    const navigate=useNavigate();
    useEffect(()=>{
         window.scrollTo({top:'0%',behavior:'smooth'})
    },[])
  return (
    <div className="cart-page" style={{marginTop:'7%'}}>
      <h1 className="cart-title">🛒 Your Cart</h1>
      <hr id="customershr"/>
      <div className="cart-list">
    {
        cartitem.length===0?
     <div className="empty-cart">
     <FaCartShopping className="cart" />
      <h2>Your Cart is Empty</h2>
      <p>Looks like you haven't added anything yet.</p>
      <button className="shop-btn" onClick={() => navigate('/')}>
        🛍️ Continue Shopping
      </button>
    </div>:
        cartitem.map((itm)=>(
        <div className="cart-card" onClick={()=>navigate(`/detail/${itm._id}`)} >
          <div className="cart-card-left">
            <img
          src={`/api/allproductimages/${itm._id}`}
          alt={itm.title}
              className="cart-image"
              
            />
            <div>
              <h2 className="product-title">{itm.title}</h2>
              <div className="cart-actions">

                <button className="remove-btn" onClick={(e)=>{e.stopPropagation();cartproductremove(itm._id)}}>Remove</button>
              </div>
            </div>
          </div>
          <div className="cart-card-right">
            <p className="price">{itm.price}</p>
          </div>
        </div>
  ))}      
      </div>
{
    cartitem.length===0?'':

      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>Rs: {subtotal}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>Rs: 150</span>
        </div>
        <div className="summary-total">
          <span>Total</span>
          <span>Rs: {total}</span>
        </div>
      </div>
}
    </div>

  );
};

export default CartPage;
