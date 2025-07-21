import { useEffect, useRef } from 'react';
import styles from './contact.module.css';
import gsap from 'gsap';
import { FaPhone } from "react-icons/fa6";
import Data from './Context';
import { useNavigate } from 'react-router-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLocationDot } from "react-icons/fa6";
import { useContext } from 'react';
import { MdEmail } from "react-icons/md";
function Contactus() {
  const formRef = useRef();
  const navigate=useNavigate();
  gsap.registerPlugin(ScrollTrigger);
  const {contactInput,submitbtnClick,wordcount,contact,contactsuccess,loader}=useContext(Data);
  useEffect(() => {
    const items=gsap.utils.toArray('[data-gsap]');
    const scroll=gsap.utils.toArray('[data-info]');
    gsap.set(scroll,{
      y:100,
      opacity:0,
    })
    gsap.to(scroll,{
      y:0,
      opacity:1,
      stagger:0.3,
      scrollTrigger:{
        trigger:scroll[0],
        scroller:'body',
        start:'top 80%',
      }
    })
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

  return <>
  {loader}
  <div className={styles.contactimagecontainer}>
  <img
    src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
    alt="Contact Support"
    className={styles.contactimage}
  />
  <div className={styles.contactoverlaytext}>
    Get in Touch With Us
  </div>
</div>

  <div className={styles.contactPage}>
    <h1 className={styles.loginHeading}><span>Have Questions</span> ? We're Here to Help</h1>
      <form ref={formRef} className={styles.contactForm} onSubmit={submitbtnClick}>
        <h2 className={styles.title}>Contact Us</h2>
        <input data-gsap value={contact.name||''} type="text" name="name" placeholder="Your Name" onChange={contactInput} className={styles.input} required />
        <input data-gsap value={contact.email||''} type="email" name="email" placeholder="Your Email" onChange={contactInput} className={styles.input} required />
        <input data-gsap value={contact.phone||''} type="text" name="phone" placeholder="Your Phone Number" onChange={contactInput} className={styles.input} required />
        <input data-gsap  type="text" name="subject" placeholder="Subject" onChange={contactInput} className={styles.input} value={contact.subject||''} required />
        <div className={styles.wordcount}>
        <textarea data-gsap  name="message" rows="5" onChange={contactInput} placeholder="Describe your issue..." className={styles.textarea} value={contact.message||''}></textarea>
        <span className={styles.textwords} style={{color:wordcount===200?'red':'black',display:wordcount===0?'none':'flex'}}>Wordcount: {wordcount}/200</span>
        </div>
        <button data-gsap disabled={!contact.name|| !contact.email || !contact.phoneno || !contact.subject || !contact.message } type="submit" onClick={()=>navigate('/')} className={styles.button}>Submit</button>
      </form>
    </div>
  <div className={styles.contactinfo}>
  <h1 className={styles.infohead}>Contact <span>Information</span></h1>
  <div className={styles.infoList}>
    <div data-info className={styles.infoItem}>
      <div className={styles.icn}><FaPhone /></div>
      <div className={styles.textGroup}>
        <span className={styles.label}>Phone</span>
        <span className={styles.value}>+92 3362271316</span>
      </div>
    </div>
    <div data-info className={styles.infoItem}>
      <div className={styles.icn}><MdEmail /></div>
      <div className={styles.textGroup}>
        <span className={styles.label}>Email</span>
        <span className={styles.value}>zayyanzia153@gmail.com</span>
      </div>
    </div>
    <div data-info className={styles.infoItem}>
      <div className={styles.icn}><FaLocationDot /></div>
      <div className={styles.textGroup}>
        <span className={styles.label}>Address</span>
        <span className={styles.value}>123 Street, Karachi, Pakistan</span>
      </div>
    </div>
  </div>
  <iframe data-info src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.217942403183!2d73.0479!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQxJzA0LjAiTiA3M8KwMDInNTIuNSJF!5e0!3m2!1sen!2s!4v1624038932436!5m2!1sen!2s" loading='lazy' className={styles.map}></iframe>
</div>
  </>;
}

export default Contactus;
