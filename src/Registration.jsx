// src/Registration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    role: 'CUSTOMER'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to handle registration (e.g., save to a database)
    navigate('/login');
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label>
          First Name:
          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </label>
        <label>
          Role:
          <select name="role" value={form.role} onChange={handleChange} required>
            <option value="CUSTOMER">CUSTOMER</option>
            <option value="DOCUMENT_VERIFIER">DOCUMENT_VERIFIER</option>
            <option value="SUPER_VISOR">SUPER_VISOR</option>
          </select>
        </label>
        <button type="submit">Register</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Registration;
