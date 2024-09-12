// import React from 'react'

// const contact = () => {
  
//   return (
//     <div>
        
//     </div>
//   )
  
// }

// export default contact


import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    to_name: "Talgd",
    from_name: "",
    from_lastName: "",
    from_phoneNumber: "",
    from_email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'talgdoperations',            // Replace with your EmailJS Service ID
      'template_bqgsjnc',           // Replace with your EmailJS Template ID
      formData,                     // The data you want to send
      'ZowSu-RAoAcPJtjTI'                // Replace with your EmailJS User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message was sent successfully!');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send the message, please try again later.');
    });
  };

  return (
    <div className="contactbg">
      <div className="container contactbd2 pt-5 pb-5">
        <div className="teext pb-5"> 
          <h2>Connect <span>  With us</span> </h2>
          <p className="fs-5">Get in touch with our Customer Success Team.</p>
        </div>
        
        <form onSubmit={handleSubmit} class="row g-3">
            <div className=" col-md-6 mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="from_name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className=" col-md-6 mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="from_lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="from_email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="from_phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="comment"
                name="message"
                value={formData.comment}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
    
  );
};

export default ContactForm;

