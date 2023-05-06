import './Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact()
{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_znv6r7e', 'template_mtcr415', form.current, '1-McxHpaqZCgB0Mnj')
          .then((result) => {
              console.log(result.text);
              console.log("message sent");
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <div className='contact'>
            <h1>Contact Me</h1>
            <div className='left-right'>
                <div className='left-side'>
                    <div className='contact-me'>
                        <div className='call'><i class="ri-phone-fill"></i></div>
                        <div className='my-mail'>7592063720</div>
                    </div>
                    <div className='contact-me'>
                        <div className='call'><i class="ri-mail-fill"></i></div>
                        <div className='my-mail'>adilmohamedmp1@gmail.com</div>
                    </div>
                    <div className='contact-me'>
                        <div className='call'><i class="ri-map-pin-line"></i></div>
                        <div className='my-mail'>Kochi, Kerala, India</div>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className='right-side' >
                    <input placeholder='Your Name' type="text" className='your-name' name="user_name" />
                    <input placeholder='Your Mail' type="email" className='your-name' name="user_email" />
                    <textarea placeholder='Message' className='your-message' name="message" />
                    <input type="submit" className='your-name' value="Send" />
                </form>
            </div>  

        </div>
    )
}