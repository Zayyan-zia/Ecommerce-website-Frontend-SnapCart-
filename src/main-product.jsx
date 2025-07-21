import Data from "./Context";
import { useContext, useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Products(){
 const {productinfo,Addtocartbtn}=useContext(Data);
 const navigate=useNavigate();
      useEffect(() => {
         if (!productinfo || productinfo.length === 0) return;
    gsap.registerPlugin(ScrollTrigger); // register plugin once
    const items = gsap.utils.toArray('[data-products]');

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            scroller: 'body',
            start: 'top 75%',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill()); // clean up on unmount
    };
  }, [productinfo]);
 
    return<>
    <div className="products-container">
        <h1>Shop Our Products</h1>
        <p>Discover our wide range of quality products carefully curated to suit your everyday needs. Shop now and enjoy great value with fast shipping.</p>
        <hr />
        <div className="products">
            {productinfo.map((itm)=>(
           <div className="products-items" onClick={()=>navigate(`/detail/${itm._id}`)} data-products key={itm.title}>
             <img
              src={`/api/allproductimages/${itm._id}`}
              alt="Product"
              className="product-image"
            />
            <h3 className="product-title">{itm.title}</h3>
            <p className="product-price">Rs:{itm.price}</p>
            <div className="product-buttons">
              <button className="buy-btn"  onClick={(e)=>{
                  e.stopPropagation();
                  navigate(`/checkout/${itm._id}`)
                }}>Buy Now</button>
              <button className="cart-btn"  onClick={(e) => {e.stopPropagation();Addtocartbtn(itm._id, itm.title)}}>Add to Cart</button>
            </div>
             </div>
                ))}   
        </div>
    </div>
    <hr id="customershr"/>
    </>
}
export default Products;