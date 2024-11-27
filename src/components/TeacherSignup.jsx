import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Adjusted path if `styles.css` is in the `src` folder

function TeacherSignup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    programme: '',
    moduleTaught: '',
    contact: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation check for passwords (can be extended)
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Simulate form submission logic (e.g., backend call)
    console.log('Form Data:', formData);

    // After successful submission, navigate to the TeacherDashboard
    navigate('/teacher-dashboard');
  };

  return (
    <div className="signup-container">
      <h2>Teacher Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="programme"
            placeholder="Programme"
            value={formData.programme}
            onChange={handleChange}
          />
          <input
            type="text"
            name="moduleTaught"
            placeholder="Module Taught"
            value={formData.moduleTaught}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default TeacherSignup;
