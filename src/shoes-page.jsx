import { useContext, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Data from "./Context";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger); // Register once at module level

function Shoespage() {
  const { shoes, Addtocartbtn } = useContext(Data);
  const navigate=useNavigate();

  useEffect(() => {
    if (!shoes || shoes.length === 0) return;

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
            start: "top 80%", // trigger when item is 80% from top of viewport
            toggleActions: "play none none none",
          },
        }
      );
    });
  
  }, []);

  return (
    <>
      <div className="products-container" id="shoes">
        <h1>Shoes for Every Step</h1>
        <p>
         Step up your shoe collection with versatile designs, premium materials, and unmatched support. Shop now for sneakers, trainers, and more — built to perform and styled to impress.
        </p>
        <hr />
        <div className="products">
          {shoes.map((itm) => (
            <div className="products-items" onClick={()=>navigate(`/detail/${itm._id}`)} key={itm._id}>
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
      </div>
    </>
  );
}

export default Shoespage;
