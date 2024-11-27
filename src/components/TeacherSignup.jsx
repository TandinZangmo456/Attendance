import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

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

  const navigate = useNavigate(); // Get the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here (e.g., check if passwords match)

    // For now, let's just log the form data
    console.log('Form Data:', formData);

    // After successful form submission, navigate to the Teacher Dashboard
    navigate('/teacher-dashboard'); // Make sure '/teacher-dashboard' is the correct route
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <div style={styles.formGroup}>
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          value={formData.firstName} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          value={formData.lastName} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
        />
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
        <input 
          type="text" 
          name="contact" 
          placeholder="Contact" 
          value={formData.contact} 
          onChange={handleChange} 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
        />
        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm Password" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit" style={styles.submitButton}>Sign Up</button>
    </form>
  );
}

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '2px solid #AAB7B8',
    borderRadius: '10px',
    width: '350px',
    margin: '0 auto',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '10px',
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

export default TeacherSignup;