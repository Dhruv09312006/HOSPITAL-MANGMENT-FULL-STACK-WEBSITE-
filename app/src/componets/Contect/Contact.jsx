import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div
    
    id="contact"
    className="contact-container">
   
    <hr />
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions or need assistance? Get in touch with our hospital
          management team. We are here to help 24/7.
        </p>
      </div>

      <div className="contact-content">
     
        <div className="contact-info">
          <h2>Our Information</h2>
          <p><strong>📍 Address:</strong> 123 HealthCare Street, New Delhi</p>
          <p><strong>📞 Phone:</strong> +91 1234567891</p>
          <p><strong>✉️ Email:</strong> support@hospital.com</p>
        </div>

       <iframe className="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56316.70880227466!2d76.9310383486328!3d28.0918167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d33418f519cc7%3A0x57eb15bfd6c197e3!2sMission%20Hospital!5e0!3m2!1sen!2sin!4v1759990235452!5m2!1sen!2sin" frameborder="0"></iframe>
      </div>
      <hr />
          </div>
  );
}
