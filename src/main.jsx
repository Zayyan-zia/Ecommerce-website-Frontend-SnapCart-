import { StrictMode } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DetailView from './products-detailpage.jsx';
import App from './App.jsx'
import CheckoutPage from './checkout-page.jsx';
import CartPage from './cart.jsx';
import Signup from './signup.jsx'
import Accessoriespage from './accessories-page.jsx';
import Nav from './Navbar.jsx'
import Search from './search-products.jsx';
import Allproduct from './product-navbar.jsx';
import Contactus from './contact-us.jsx'
import AppProvider from './AppProvider.jsx'
import Aboutus from './Aboutus.jsx'
import Shoespage from './shoes-page.jsx';
import ReactDOM from "react-dom/client";
import Footer from './footer.jsx'
import Login from './Login.jsx'
import{createBrowserRouter,RouterProvider} from 'react-router-dom';
const routes=createBrowserRouter([{
  path:'/',
  element:<><App/></>
},
{
  path:'/contact',
  element:<><Nav/>,<Contactus/>,<Footer/></>
},
{
path:'/detail/:id',
element:<><Nav/>,<DetailView/>,<Footer/></>
},
{
  path:'/sign-up',
  element:<><Nav/>,<Signup/>,<Footer/></>
},
{
  path:'/login',
  element:<><Nav/>,<Login/>,<Footer/></>
},
{
  path:"/about-us",
  element:<><Nav/>,<Aboutus/>,<Footer/></>
},
{
  path:'/shoes-category',
  element:<><Nav/>,<Shoespage/>,<Footer/></>
},
{
  path:"/products",
  element:<><Nav/>,<Allproduct/>,<Footer/></>
},
{
  path:"/search-product/:id",
  element:<><Nav/>,<Search/>,<Footer/></>
},
{
  path:'/accessories-category',
  element:<><Nav/>,<Accessoriespage/>,<Footer/></>
},
{
  path:'/cart',
  element:<><Nav/>,<CartPage/>,<Footer/></>
},
{
  path:'/checkout/:id',
  element:<><Nav/>,<CheckoutPage/>,<Footer/></>
}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <RouterProvider router={routes}></RouterProvider>
    </AppProvider>
  </StrictMode>,
)
