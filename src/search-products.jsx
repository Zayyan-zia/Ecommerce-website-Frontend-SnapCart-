import Data from "./Context";
import { useContext, useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Search(){
  const navigate=useNavigate();
    const {products,Addtocartbtn,shoes,productinfo,setproducts,accessories,loader}=useContext(Data);
    const foryou=[...shoes,...productinfo,...accessories];
    const {id} = useParams();
      useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // register plugin once
    const pro=gsap.utils.toArray('[data-pro]');
    const items = gsap.utils.toArray('[data-products]');
   gsap.set(pro,{
      y:100,
      opacity:0
    });
    gsap.to(pro,{
      y:0,
      opacity:1,
      stagger:1
    })
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
  }, [products]);

useEffect(()=>{
        const data= new FormData;
        data.append('query',id);
      axios.post('/api/search-product',data,{
         headers:{
        'Content-Type':'multipart/form-data'
      }
      })
        .then(res => {
          setproducts(res.data);
         // setloader('');
        })
        .catch(err => {
        
          setproducts([]);
        });
},[id]);


    return<>
    {loader}
           <div className="products-container">
        <h1 data-pro style={{marginTop:'3%'}}>Search Results For {id}</h1>
        <p data-pro id="searchpara">{products.length} products found for {id}</p>
        {products.length===0
        && 
        <h2 data-pro style={{marginTop:'2%'}}>Sorry, no results found</h2>
        }
        <hr id="customershr" />
        <div className="products">
            {products.map(({item:itm})=>(
           <div className="products-items" onClick={()=>navigate(`/detail/${itm._id}`)} data-products key={itm.title}>
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
  {
    !(products.length===0)&& <hr style={{marginTop:'4%'}}/> 
  }
    
    <h2 style={{marginTop:'2%'}}>Recommended For You</h2> 
            <div className="products">
            {foryou.map((itm)=>(
           <div className="products-items" onClick={()=>navigate(`/detail/${itm._id}`)} data-products key={itm.title}>
             <img
              src={`/api/allproductimages/${itm._id}`}
              
              alt="Product"
              className="product-image"
            />
            <h3 className="product-title">{itm.title}</h3>
            <p className="product-price">Rs:{itm.price}</p>
            <div className="product-buttons">
              <button className="buy-btn" onClick={(e)=>{
                  e.stopPropagation();
                  navigate(`/checkout/${itm._id}`)
                }}>Buy Now</button>
              <button className="cart-btn"  onClick={(e) => {e.stopPropagation();Addtocartbtn(itm._id, itm.title)}}>Add to Cart</button>
            </div>
             </div>
                ))}   
        </div>
    </div>  
    </>
}
export default Search;