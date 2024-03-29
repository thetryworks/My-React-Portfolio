import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';

import { validateEmail } from '../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const form = useRef();
  

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_s7sjo6o', form.current, 'eQ6SGPj5aQW5FPcN9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    
<section id="contact" className="mb-4 pa mx-4">
    <h2 className=" h1-responsive font-weight-bold text-center text-uppercase my-4 mt-5">Contact Me</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly. I will get back to you within
        24 hours.</p>
    <div className="row">
        <div className="col-lg-6 offset-lg-3">
            <form ref={form} id="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" defaultValue={''} onBlur={handleChange} className="form-control"/>
                            <label for="name" className="">Your name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" defaultValue={''} onBlur={handleChange} className="form-control"/>
                            <label for="email" className="">Your email</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" defaultValue={''} onBlur={handleChange} className="form-control md-textarea"></input>
                            <label for="subject">Subject</label>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" defaultValue={''} onBlur={handleChange} className="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>
                    </div>
                </div>
                <div className="text-center text-md-left mb-3">
                    <button className="btn btn-primary" type="submit" value='Send'>Submit</button>
                </div>
            </form>
            {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
          <div className="status"></div>
        </div>
       <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><FontAwesomeIcon icon={ faMapMarkerAlt } style={{ color: "#000000" }}/>
                    <p>Nashville, TN 37206, USA</p>
                </li>

                <li><FontAwesomeIcon icon={ faPhone } style={{ color: "#000000" }}/>
                    <p>501-960-0275</p>
                </li>

                <li><FontAwesomeIcon icon={ faEnvelope } style={{ color: "#000000" }}/>
                    <p>natesmyth1@gmail.com</p>
                </li>
            </ul>
        </div>
    </div>

</section>

  );
}

export default ContactForm;
