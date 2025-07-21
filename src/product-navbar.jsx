import { useContext, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import Data from "./Context";
function Allproduct(){
  const navigate=useNavigate();
    gsap.registerPlugin(ScrollTrigger);
      const { shoes, Addtocartbtn,productinfo,accessories,callingloader } = useContext(Data);
       useEffect(() => {
          if (!shoes || shoes.length === 0 ||!Addtocartbtn || Addtocartbtn.length === 0) return;
      
          // Animate each shoe item
          const items = gsap.utils.toArray(".products-items");
      
          items.forEach((item) => {
            gsap.fromTo(
              item,
              { y: 100,
                 opacity: 0 
              },
              {
                y: 0,
                opacity: 1,
               
                ease: "power2.out",
                scrollTrigger: {
                  trigger: item,
                  start: "top 80%", // trigger when item is 80% from top of viewport
                  toggleActions: "play none none none",
                },
              }
            );
          });
      
          // Cleanup on unmount
        
        }, []);
    return<>
          <div className="products-container" id="shoes">
        <h1>Explore All Products</h1>
        <p>
         Browse our full range of high-quality products across every category.
        </p>
        <hr />
             <h2>Shoes Category</h2>
        <div className="products">
          {shoes.map((itm) => (
            <div className="products-items" onClick={()=>{navigate(`/detail/${itm._id}`);callingloader()}} key={itm._id}>
              <img
                src={`/api/allproductimages/${itm._id}`}
                alt="Product"
                className="product-image"
              />
              <h3 className="product-title">{itm.title}</h3>
              <p className="product-price">Rs: {itm.price}</p>
              <div className="product-buttons">
                <button className="buy-btn"  onClick={(e)=>{
                  e.stopPropagation();
                  navigate(`/checkout/${itm._id}`)
                }}>Buy Now</button>
                <button
                  className="cart-btn"
                  onClick={(e) => {e.stopPropagation();Addtocartbtn(itm._id, itm.title)}}
                  
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <hr id="gadgetshr"/>
        <h2 id="gadgets">Innovative Gadgets for a Smarter Life</h2>
                <div className="products">
          {productinfo.map((itm) => (
            <div className="products-items" onClick={()=>navigate(`/detail/${itm._id}`)} key={itm._id}>
              <img
                src={`/api/allproductimages/${itm._id}`}
                alt="Product"
                className="product-image"
              />
              <h3 className="product-title">{itm.title}</h3>
              <p className="product-price">Rs: {itm.price}</p>
              <div className="product-buttons">
                <button className="buy-btn" onClick={(e) => {e.stopPropagation();navigate(`/checkout/${itm._id}`)}}>Buy Now</button>
                <button
                  className="cart-btn"
                   onClick={(e)=>{
                  e.stopPropagation();
                  navigate(`/checkout/${itm._id}`)
                }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
         <hr id="gadgetshr"/>
        <h2 id="gadgets">Stylish Accessories for Every Occasion</h2>
                <div className="products">
          {accessories.map((itm) => (
            <div className="products-items" onClick={()=>navigate(`/detail/${itm._id}`)} key={itm._id}>
              <img
                src={`/api/allproductimages/${itm._id}`}
                alt="Product"
                className="product-image"
              />
              <h3 className="product-title">{itm.title}</h3>
              <p className="product-price">Rs: {itm.price}</p>
              <div className="product-buttons">
                <button className="buy-btn"
                onClick={(e)=>{
                  e.stopPropagation();
                  navigate(`/checkout/${itm._id}`)
                }}
                >Buy Now</button>
                <button
                  className="cart-btn"
                   onClick={(e) => {e.stopPropagation();Addtocartbtn(itm._id, itm.title)}}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
}
export default Allproduct; 