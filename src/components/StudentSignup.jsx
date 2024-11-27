import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentSignup() {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    gender: '',
    email: '',
    studentNumber: '',
    programme: '',
    semester: '',
    year: '',
    contact: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Enforce an 8-character limit for specific fields
    if (name === 'studentNumber' || name === 'contact') {
      if (value.length > 8) return; // Stop input beyond 8 characters
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate studentNumber and contact length
    if (formData.studentNumber.length !== 8) {
      alert('Student Number must be exactly 8 characters long.');
      return;
    }
    if (formData.contact.length !== 8) {
      alert('Contact must be exactly 8 digits long.');
      return;
    }

    console.log('Form Data:', formData);
    navigate('/student-dashboard');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <div style={styles.formGroup}>
        {/* General input fields */}
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="date"
          name="birthDate"
          placeholder="Birth Date"
          value={formData.birthDate}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {/* Restricted length fields */}
        <Input
          type="text"
          name="studentNumber"
          placeholder="Student Number"
          value={formData.studentNumber}
          onChange={handleChange}
          maxLength="8"
          required
        />
        <Input
          type="text"
          name="programme"
          placeholder="Programme"
          value={formData.programme}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="semester"
          placeholder="Semester"
          value={formData.semester}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          maxLength="8"
          required
        />
        {/* Password fields */}
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" style={styles.submitButton}>Sign Up</button>
    </form>
  );
}

// Reusable Input Component
const Input = ({ type, name, placeholder, value, onChange, maxLength, required }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    maxLength={maxLength}
    required={required}
    style={styles.input}
  />
);

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '2px solid #007BFF',
    borderRadius: '10px',
    width: '400px',
    margin: '0 auto',
  },
  formGroup: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default StudentSignup;
