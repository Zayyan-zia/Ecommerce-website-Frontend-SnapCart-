import React, { useEffect, useState,useMemo } from "react";
import Data from "./Context";
import axios from 'axios';
import Loader from "./loader";
import Loginsuccess from "./loginsuccess";
import Ordersuccess from "./ordersuccessmessage";
import Signupsuccess from "./signupsuccessmsg";
import Alert from "./contactsuccessmsg";
function AppProvider({children}){

const [quantity, setQuantity] = useState(1); // quantity for products

const [show,setshow]=useState(true); // showing password.

const [cartitem,setcartitem]=useState([]); //for cart items.

const [loader,setloader]=useState(''); // for loader.

const [shoes,setshoes]=useState([]); // for shoes page data 

const [detailpage,setdetailpage]=useState([]) // for setting detail page items .

const [total,settotal]=useState(null); // for cart total.

const [accessories,setaccessories]=useState([]) // for accessories page data.

const [search,setsearch]=useState(''); // for search products name.

const [products,setproducts]=useState([]) // the openai response will come here in this array.

const [subtotal,setsubtotal]=useState(null);  // for cart sub total.

const [productinfo,setproductinfo]=useState([]); // products Api

const [check,setcheck]=useState([]) // checking add to cart products

const [contactsuccess,setcontactsuccess]=useState(); // show alert after success contact

const [checkoutinfo,setcheckoutinfo]=useState({})  // for order confirmations .

const [wordcount,setwordcount]=useState(0); // for word count error.

const [contact, setcontact] = useState({
  
 // for contact us page.
});
const [signup,setsignup]=useState({
  // for signup page.
});
const [login,setlogin]=useState({
  // for login page.
});
// for Contact page(started)
const contactInput=(e)=>{
      const {name,value}=e.target;
      if(name==='message'){
         const mes=value.trim()===''?[]:value.trim().split(/\s+/);
    if(mes.length<=200){
          setwordcount(mes.length);
      setcontact({...contact,[name]:value});
      }
      }
      else{
        setcontact({...contact,[name]:value});
      }
}
const submitbtnClick = (e) => {
  e.preventDefault();
  setcontactsuccess(<Alert/>);
  setInterval(()=>{
    setcontactsuccess('');
  },1000000)
  const data = new FormData();
  data.append('contactname', contact.name);
  data.append('contactemail', contact.email);
  data.append('contactphoneno', contact.phone);
  data.append('contactsubject', contact.subject);
  data.append('contactissue', contact.message);
  setcontact({
    name:'',
    email:'',
    phone:'',
    subject:'',
    message:'',
    })
      setloader(<Loader/>)
    axios.post('/api/contact',data,{
        headers:{
        'Content-Type':'multipart/form-data'
      }
    })
    .then((res)=>{
      setloader('')
    })
};


// contact page ended(ended)


// Signup page(started)

const Signuppage=(e)=>{
    const {value,name}=e.target;
    setsignup({...signup,[name]:value});
}

const signupbtnclick=(e)=>{
     e.preventDefault();
     const signupdata=new FormData;
     signupdata.append('signupname',signup.signupname);
     signupdata.append('signupemail',signup.signupemail);
     signupdata.append('signuppassword',signup.signuppassword);
     setsignup({
      signupname:'',
      signupemail:'',
      signuppassword:'',
     });
     setloader(<Loader/>)
     localStorage.setItem('signupname',signup.signupname);
     setcontactsuccess(<Signupsuccess/>);

     axios.post('/api/signup',signupdata,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
     }).then((res)=>{
      setloader('')
     })
}

// Signup page(ended).


//Login page(started)

const loginpage=(e)=>{
      const {value,name}=e.target;
      setlogin({...login,[name]:value});
}

const loginbtnclick=(e)=>{
    e.preventDefault();
    const logindata=new FormData;
    logindata.append('loginemail',login.loginemail);
    logindata.append('loginpassword',login.loginpassword);
     setlogin({
      loginemail:'',
      loginpassword:'',
    });
    const isSignin=localStorage.getItem('signupname')?true:false;
    isSignin?setcontactsuccess(<Loginsuccess/>):'';
}

//Login page(ended)

// password showing
const showingpassword=()=>{
      setshow(prev=>!prev);
}
// product api backend

useEffect(()=>{
axios.get('/api/mainpageproduct')
.then((res)=>{
  setproductinfo(res.data);
})
.catch((err)=>{
  setproductinfo(err.message);
})

// getting localstorage items,
  const checkData = localStorage.getItem('check');
  const checking = checkData ? JSON.parse(checkData) : [];
  setcheck(checking);
},[])

// checking add to cart products when click on add to cart button 

const Addtocartbtn=(productid,productname)=>{
     const checking=check.some((pro)=>{
     return  pro===productid
     });
     if(checking){
      alert(`${productname} already in cart`);
     }
     else{
         setcheck(prev=>{
          const update=[...check,productid]
          localStorage.setItem('check',JSON.stringify(update));
          return update;
         });
          
          
          
     }
}

// calling loader



 // calling backend api for shoes page data

 useEffect(()=>{
  axios.get('/api/shoesproduct')
  .then((res)=>{
    setshoes(res.data);
  })
  .catch((err)=>{
    setshoes(err.message);
  })
 },[]);
 
  // calling backend api for shoes page data

  useEffect(()=>{
    axios.get('/api/accessoriesproduct')
    .then((res)=>{
      setaccessories(res.data);
    })
    .catch((err)=>{
      setaccessories(err.message);
    })
  },[]);


 // getting search product

 const searchproduct=(e)=>{
      const productname=e.target.value;
      setsearch(productname);
 }

 // for quantity handling 

   const handleLess = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleUpgrade = (qty) => {
    if(quantity<qty){
    setQuantity(quantity + 1);
    }
  };
 
  // cart logics 
  
      const allproducts=useMemo(()=>{
        return  [...shoes,...accessories,...productinfo];
      },[shoes,accessories,productinfo]);

      useEffect(()=>{
        const cartproduct =allproducts.filter((itm)=>
             check.includes(itm._id)
        );
        setcartitem(cartproduct);
        const subtotals=cartproduct.reduce((res,curr)=>res+Number(curr.price),0);
        const totals=subtotals+Number(150);
        settotal(totals);
        setsubtotal(subtotals);
        
      },[allproducts,check])

      const cartproductremove=(productId)=>{
         const updatedcart=check.filter((remove)=>remove !== productId)
         localStorage.setItem('check',JSON.stringify(updatedcart));
         setcheck(updatedcart);
      }

    // checkoutinfo

    const checkoutvalues=(e)=>{
         const {value,name}=e.target;
         setcheckoutinfo({...checkoutinfo,[name]:value});
    };

    const checkoutbtn=(productname,total)=>{
         localStorage.setItem('ordername',checkoutinfo.checkoutname);
      setcontactsuccess(<Ordersuccess/>)
      setloader(<Loader/>);
      const orderdata= new FormData;
      orderdata.append('name',checkoutinfo.checkoutname);
      orderdata.append('email',checkoutinfo.checkoutemail);
      orderdata.append('address',checkoutinfo.checkoutaddress);
      orderdata.append('city',checkoutinfo.checkoutcity);
      orderdata.append('country',checkoutinfo.checkoutcountry);
      orderdata.append('zipcode',checkoutinfo.checkoutzipcode);
      orderdata.append('productname',productname);
      orderdata.append('total',Number(total)+Number(150));

      axios.post('/api/orderconfirm',orderdata,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      })

      setcheckoutinfo({
        checkoutemail:'',
        checkoutaddress:'',
        checkoutcardcvv :'',
        checkoutcardexpiry :'',
        checkoutcardnumber :'',
        checkoutcity :'',
        checkoutcountry:'',
        checkoutname :'',
        checkoutzipcode:''
      });
      
    }


    return<>
    <Data.Provider
    value={{
       contactInput,
       submitbtnClick,
       wordcount,
       contact,
       signup,
       Signuppage,
       signupbtnclick,
       loginpage,
       loginbtnclick,
       setcontactsuccess,
       login,
       showingpassword,
       show,
       contactsuccess,
       productinfo,
       Addtocartbtn,
       shoes,
       products,
       search,
       setproducts,
       searchproduct,
       accessories,
       loader,
       setloader,
       detailpage,
       cartitem,
       setcartitem,
       handleLess,
       handleUpgrade,
       quantity,
       setQuantity,
       check,
       setdetailpage,
       subtotal,
       total,
       cartproductremove,
       checkoutvalues,
       checkoutinfo,
       checkoutbtn,
    }}
>
    {children}
    </Data.Provider>
    </>
}
export default React.memo(AppProvider);