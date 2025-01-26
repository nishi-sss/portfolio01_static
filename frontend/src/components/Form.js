import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" onChange={handleChange} required />
      <label>Email:</label>
      <input type="email" name="email" onChange={handleChange} required />
      <label>Message:</label>
      <textarea name="message" onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

