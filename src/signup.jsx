import gsap from 'gsap';
import styles from './contact.module.css';
import { BiSolidShow } from "react-icons/bi";
import { useEffect,useRef,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSolidHide } from "react-icons/bi";
import Data from './Context';
function Signup(){
    const {Signuppage,signupbtnclick,signup,showingpassword,show,loader}=useContext(Data);
    const navigate=useNavigate();
    const formRef = useRef();
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
            {loader}
        <div className={styles.contactPage}>
          <h1 className={styles.loginHeading}>Create Your <span>SnapCart</span> Account </h1>
            <form ref={formRef} className={styles.contactForm} onSubmit={signupbtnclick}>
              <h2 className={styles.title}>Create your account</h2>
              <input data-gsap value={signup.signupname||''} onChange={Signuppage} type="text" name="signupname" placeholder="Your Name"  className={styles.input} required />

              <input data-gsap value={signup.signupemail||''} onChange={Signuppage}   type="email" name="signupemail" placeholder="Your Email" className={styles.input} required />

              <div className={styles.passwordWrapper}>
              <input data-gsap value={signup.signuppassword||''} onChange={Signuppage}  type={show?'password':'text'} name="signuppassword" placeholder="Your Password" className={styles.input} required />
                <span className={styles.icones} onClick={showingpassword}>
                                         {show?<BiSolidHide />:<BiSolidShow /> }
                                          </span>
              </div>
              <button data-gsap  type="submit" onClick={()=>{navigate('/')}}  className={styles.button}>Sign up</button>
            </form>
          </div>
    </>
}
export default Signup;