import gsap from 'gsap';
import styles from './contact.module.css';
import { BiSolidHide } from "react-icons/bi";
import { NavLink,useNavigate } from 'react-router-dom';
import { BiSolidShow } from "react-icons/bi";
import { useEffect,useRef,useContext } from 'react';
import Data from './Context';
function Login(){
    const {loginpage,loginbtnclick,login,showingpassword,show}=useContext(Data);
        const formRef = useRef();
        const navigate=useNavigate();
          const isSignin=localStorage.getItem('signupname')?true:false;
     useEffect(() => {
    const items=gsap.utils.toArray('[data-gsap]');
    gsap.set(items,{
      opacity: 0,
      y: 50,
    })
    gsap.to(items,{
       opacity: 1,
      y: 0,
      ease: 'power3.out',
      stagger:0.3,
    })
    gsap.set(formRef.current,{
         opacity: 0,
      y: 50,
    })
    gsap.to(formRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

    return<>
        <div className={styles.contactPage}>
          <h1 className={styles.loginHeading}>Login With Your <span>SnapCart</span> Account</h1>
          <h4>or <NavLink className={styles.createacc} to={'/sign-up'}>create new account</NavLink> now</h4>
            <form ref={formRef} className={styles.contactForm} onSubmit={loginbtnclick}>
              <h2 className={styles.title}>Login</h2>
              <input data-gsap value={login.loginemail||''} onChange={loginpage}   type="email" name="loginemail" placeholder="Your Email" className={styles.input} required />
              <input data-gsap value={login.loginpassword||''} onChange={loginpage}  type={show?'password':'text'} name="loginpassword" placeholder="Your Password" className={styles.input} required />
              <span className={styles.icone} onClick={showingpassword}>
                           {show?<BiSolidHide />:<BiSolidShow /> }
                            </span>
              <button data-gsap  type="submit" onClick={()=>{isSignin?navigate('/'):navigate('/sign-up')&&alert('you are not sign in you need to sign in first.')}} className={styles.button}>Login</button>
            </form>
          </div>
          </>
}
export default Login;