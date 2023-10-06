import React, { useRef } from 'react';
import walmart from '../../assets/walmart.png';
import adobe from '../../assets/adobe.png';
import microsoft from '../../assets/microsoft.png';
import facebook from '../../assets/facebook.png';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import './contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6pahkfg', 'template_6gjnqu9', form.current, 'vLT0229N59UYjRwtV')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email send!')
            }, (error) => {
              console.log(error.text);
            });
      };
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My clients</h1>
            <p className="clientDesc">I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with includes</p>
            <div className="clientImgs">
                <img src={walmart} alt="" className="clientImg" />
                <img src={adobe} alt="" className="clientImg" />
                <img src={microsoft} alt="" className="clientImg" />
                <img src={facebook} alt="" className="clientImg" />
            </div>
        </div>

        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Fill out the form below to discuss any work opportunities,</span>
            <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                <textarea name="message" className='message' id="" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn' >Submit</button>
                <div className="links">
                    <img src={facebookIcon} alt="facebook" className="link" />
                    <img src={twitterIcon} alt="twitter" className="link" />
                    <img src={youtubeIcon} alt="youtube" className="link" />
                    <img src={instagramIcon} alt="instagram" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact