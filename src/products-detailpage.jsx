import { useState } from "react";
import Data from "./Context";
import axios from "axios";
import Loader from "./loader";
import { useContext, useEffect, useMemo} from "react";
import gsap from "gsap";
import { useNavigate, useParams} from "react-router-dom";
function Detailview () {
     const {Addtocartbtn,shoes,productinfo,accessories,setdetailpage,detailpage,loader,setloader,handleLess,handleUpgrade,quantity,setQuantity}=useContext(Data);
        const foryou = useMemo(() => [...shoes, ...productinfo, ...accessories], [shoes, productinfo, accessories]);
        const {id}=useParams();
        const navigate=useNavigate();
    useEffect(() => {
    if (!foryou || foryou.length === 0) return;
    // Animate each shoe item
    const items = gsap.utils.toArray(".products-items");

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
         
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%", 
            toggleActions: "play none none none",
          },
        }
      );
    });
  
  }, []);

  useEffect(()=>{
    setQuantity(0);
    axios.get(`/api/detail-product/${id}`)
    .then((res)=>{
        setdetailpage([res.data]);
    })
    .catch((err)=>{
        setdetailpage([]);
    })
    .finally(()=>{
       setloader('');
    })
  },[id])

  useEffect(() => {
  if (detailpage.length > 0) {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}, [detailpage]);



  const product = {
    rating: 4.5,
    totalStars: 5,
  };
  
  return (
    <> 
    {
        loader?
       ( loader ):
            detailpage.map((itm)=>(
    <div key={itm._id} className="product-detail-page">
      <div className="product-image-area">
        <img
           src={`/api/allproductimages/${itm._id}`}
          alt={itm.title}
          className="product-main-image"
        />
      </div>

      <div className="product-info-area">
        <h1 className="product-main-title">{itm.title}</h1>

        <div className="product-rating">
          {Array.from({ length: product.totalStars }, (_, i) => (
            <span key={i} className={i < Math.floor(product.rating) ? "star filled" : "star"}>
              ★
            </span>
          ))}
          <span className="rating-value">({product.rating.toFixed(1)} / 5)</span>
        </div>

        <p className="product-main-description">{itm.description}</p>
        <p>Total quantity: {itm.quantity}</p>
        <div className="quantity-section">
          <label className="qty-label">Quantity:</label>
          <div className="quantity-control">
            <button onClick={handleLess}>-</button>
            <span className="quantity">{quantity}</span>
            <button onClick={()=>handleUpgrade(itm.quantity)}>+</button>
          </div>
        </div>

        <div className="product-buttons">
          <button className="add-to-cart-button" onClick={() => Addtocartbtn(itm._id, itm.title)}>Add to Cart</button>
          <button className="buy-now-button"  onClick={(e)=>{
                  e.stopPropagation();
                  navigate(`/checkout/${itm._id}`)
                }}>Buy Now</button>
        </div>
      </div>
    </div>
  ))}
       <hr id="customershr" style={{marginTop:'4%'}}/> 
 
    
    <h2 style={{marginTop:'2%',width:'100%',textAlign:'center',marginBottom:'3%'}}>You Might Also Like</h2> 
            <div className="products">
            {foryou.map((itm)=>(
           <div className="products-items" onClick={
            ()=>{navigate(`/detail/${itm._id}`),setloader(<Loader/>)}
            } data-products key={itm.title}>
             <img
              src={`/api/allproductimages/${itm._id}`}
              alt="Product"
              className="product-image"
            />
            <h3 className="product-title">{itm.title}</h3>
            <p className="product-price">Rs:{itm.price}</p>
            <div className="product-buttons">
              <button className="buy-btn">Buy Now</button>
              <button className="cart-btn"  onClick={(e) => {e.stopPropagation();Addtocartbtn(itm._id, itm.title)}}>Add to Cart</button>
            </div>
             </div>
                ))}   
        </div>
        </>
  );
};

export default Detailview;
