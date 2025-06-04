import axios from 'axios';
import { useState } from 'react';
import './contactform.css'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://harmonds-api.onrender.com/api/contact', form);
      alert('Message sent!');
    } catch (error) {
      console.error('Sending failed:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit} id="con" className="container mt-5 contact-section" style={{ maxWidth: '600px' }}>
  <h2 className="text-center mb-4">Contact Us</h2>

  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input
      type="text"
      name="name"
      id="name"
      className="form-control"
      placeholder="Your Name"
      value={form.name}
      onChange={(e) => setForm({ ...form, name: e.target.value })}
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      className="form-control"
      placeholder="Your Email"
      value={form.email}
      onChange={(e) => setForm({ ...form, email: e.target.value })}
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="message" className="form-label">Message</label>
    <textarea
      name="message"
      id="message"
      className="form-control"
      placeholder="Your Message"
      rows="5"
      value={form.message}
      onChange={(e) => setForm({ ...form, message: e.target.value })}
      required
    ></textarea>
  </div>

  <div className="d-grid">
    <button type="submit" className="btn btn-success">Send Message</button>
  </div>
</form>

  );
}

export default ContactForm;
