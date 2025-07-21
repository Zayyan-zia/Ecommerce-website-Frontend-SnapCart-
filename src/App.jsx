import Nav from "./Navbar";
import Footer from "./footer";
import Testimonial from "./testimonials";
import Category from "./category";
import Products from "./main-product";
import Data from "./Context";
import { useContext } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Imageslider from "./image-slider";
function App(){
const {contactsuccess}=useContext(Data);
return<>
<Nav/>
{contactsuccess}
<Imageslider/>
<Category/>
<Products/>
<Testimonial/>
<Footer/>
</>
}
export default App;