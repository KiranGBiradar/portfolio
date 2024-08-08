

import React, { useState } from 'react'
import './Contact.css';
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';






const Contact = () => {

  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);

    const email = formData.get('email');
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');

    formData.append("access_key", "ecc4205d-75f9-4055-ad1f-1005bc30f0ff");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message);
      form.reset();
    } else {
      setError('Submission failed. Please try again.');
    }
  };


  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "ecc4205d-75f9-4055-ad1f-1005bc30f0ff");

  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);

  //   const res = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: json
  //   }).then((res) => res.json());

  //   if (res.success) {
  //     console.log("Success", res);
  //     alert(res.message)

  //     form.reset();
  //   }
  // };

    
  return (

    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        
      </div>

      <div className="contact-section">

        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently avaliable to take on new projects</p>
        
      
      <div className="contact-details">

        <div className='contact-detail'> 
            <img src={mail_icon} alt="" />
            <p>kirankumarses@gmail.com</p>
        </div>

        <div className='contact-detail'> 
            <img src={call_icon} alt="" />
            <p>+91 7019361588 </p>
        </div>

        <div className='contact-detail'> 
          <img src={location_icon} alt="" />
          <p>Bengaluru</p>
          </div>
        </div>
        </div>

<form onSubmit={onSubmit} className='contact-right'>

<label htmlFor="">Your Name</label>
<input type="text" placeholder='Enter Your Name' name='name' />
<label htmlFor="">Your Email</label>
<input type="email" placeholder='Enter Your email' name='email' />
<label htmlFor="">Write your message here</label>
<textarea name="message" rows="8" placeholder='Enter your message'></textarea>
{/* <button type='submit' className='contact-submit'> Submit now</button> */}

{error && <p className="error-message">{error}</p>}

<button type='submit' className='contact-submit'>Submit now</button>

</form>
        
      </div>


    </div>
  )
}

export default Contact



// const Contact = () => {

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);

//     formData.append("access_key", "ecc4205d-75f9-4055-ad1f-1005bc30f0ff");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//       alert(res.message);

//       // Reset the form
//       form.reset();
//     }
//   };

//   return (
//     <div id='contact' className="contact">
//       <div className="contact-title">
//         <h1>Get in touch</h1>
//       </div>

//       <div className="contact-section">
//         <div className="contact-left">
//           <h1>Let's talk</h1>
//           <p>I'm currently available to take on new projects</p>
        
//           <div className="contact-details">
//             <div className='contact-detail'> 
//               <img src={mail_icon} alt="" />
//               <p>kirankumarses@gmail.com</p>
//             </div>

//             <div className='contact-detail'> 
//               <img src={location_icon} alt="" />
//               <p>Bengaluru</p>
//             </div>
//           </div>
//         </div>

//         <form onSubmit={onSubmit} className='contact-right'>
//           <label htmlFor="name">Your Name</label>
//           <input type="text" placeholder='Enter Your Name' name='name' />
          
//           <label htmlFor="email">Your Email</label>
//           <input type="email" placeholder='Enter Your email' name='email' />
          
//           <label htmlFor="message">Write your message here</label>
//           <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          
//           <button type='submit' className='contact-submit'>Submit now</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;
