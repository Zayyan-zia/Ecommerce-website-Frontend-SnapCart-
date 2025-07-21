import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { MdShoppingCart } from "react-icons/md";
import Data from './Context';
import { useContext } from 'react';
function Nav() {
 const elm=useRef();
 const navigate=useNavigate();
 const {searchproduct,search,check}=useContext(Data);
  const navigating=()=>{
  navigate('/sign-up')
 }
 const results = (e) => {
  if (e.key === 'Enter') {
    const keyword = e.target.value.trim();
    console.log("Search value at Enter:", keyword); 
    if (!keyword) return;
     navigate(`/search-product/${keyword}`);   
  }
};

 const navgatinglogin=()=>{
  navigate('/login')
 }
 useEffect(() => {
  const navItems = gsap.utils.toArray('.nav-item');
  gsap.set(navItems, {
    opacity: 0,
    y: 100
  });
  gsap.set(elm.current,{
    opacity:0,
    scale:0,
  })
  gsap.to(elm.current,{
    opacity:1,
    scale:1,
    duration:1,
  })
  gsap.to(navItems, {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration:1,
    ease: 'power2.out',
  });
}, []);
  return (
    <header style={{zIndex:'1000'}} className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <NavLink to="/" style={{textDecoration:'none'}} id="nav-logo">
          <h2 className="logo" ref={elm}>Snap<span>Cart</span></h2>
          </NavLink>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li  id="nav" className="nav-item">
              <NavLink
                to="/"
                className="nav-link px-2"
                style={({ isActive }) => ({
                  color: isActive ? 'rgba(228, 228, 10, 0.825)' : 'white',
                })}
              >
                Home
              </NavLink>
            </li>
            <li id="nav" className="nav-item">
              <NavLink
                to="/products"
                className="nav-link px-2"
                style={({ isActive }) => ({
                  color: isActive ? 'rgba(228, 228, 10, 0.825)' : 'white',
                })}
              >
                Products
              </NavLink>
            </li>
            <li id="nav" className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link px-2"
                style={({ isActive }) => ({
                  color: isActive ? 'rgba(228, 228, 10, 0.825)' : 'white',
                })}
              >
                Contact
              </NavLink>
            </li>
            <li id="nav" className="nav-item">
              <NavLink
                to="/about-us"
                className="nav-link px-2"
                style={({ isActive }) => ({
                  color: isActive ? 'rgba(228, 228, 10, 0.825)' : 'white',
                })}
              >
                About Us
              </NavLink>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search products..."
              aria-label="Search"
              id='inpt'
              value={search||''}
              onChange={searchproduct}
              onKeyDown={results}
            />
          </form>

          <div className="text-end">
            <button type="button" onClick={navgatinglogin} className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" onClick={navigating} className="btn btn-warning">Sign-up</button>
          </div>
          <div className="cart-icon-wrapper position-relative ms-3">
  <NavLink to="/cart">
    <MdShoppingCart id="cart" />
    <span
      className=" num cart-count-badge position-absolute top-0 start-100 translate-middle badge rounded-pill"
      style={{
        display: check.length === 0 ? 'none' : 'flex',
    
      }}
    >
      {check.length}
    </span>
  </NavLink>
</div>

        </div>
      </div>
    </header>
  )
}

export default Nav;
