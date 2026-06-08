import React, { useState } from "react";
import API from "../services/api";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await API.post("/contact", formData);

      alert("Message Sent Successfully");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="contact">

      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>Feel free to reach out for collaborations or just a friendly hello!</p>
          <ul>
            <li><strong>Email:</strong> vamsivalluri52@gmail.com</li>
            <li><strong>Location:</strong> India</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/vamsivalluri-19" target="_blank" rel="noreferrer">vamsivalluri-19</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">Vamsi Valluri</a></li>
          </ul>
        </div>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Send Message
        </button>

      </form>
      </div>

    </section>
  );
};

export default Contact;