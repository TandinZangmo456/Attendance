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

  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Enforce exact 8-character length for specific fields
    if (name === 'studentNumber' || name === 'contact') {
      if (value.length > 8) return; // Prevent typing more than 8 characters
    }

    // Allow only digits for semester and year
    if ((name === 'semester' || name === 'year') && !/^\d*$/.test(value)) {
      return; // Allow only digits
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that the fields have exactly 8 characters
    if (formData.studentNumber.length !== 8) {
      alert('Student Number must be exactly 8 characters long.');
      return;
    }
    if (formData.contact.length !== 8) {
      alert('Contact must be exactly 8 characters long.');
      return;
    }

    // Validate semester and year
    if (!formData.semester || parseInt(formData.semester, 10) <= 0) {
      alert('Semester must be a positive integer.');
      return;
    }
    if (!formData.year || parseInt(formData.year, 10) <= 0) {
      alert('Year must be a positive integer.');
      return;
    }

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    // If everything is valid, reset password error and proceed
    setPasswordError('');
    console.log('Form Data:', formData);
    navigate('/student-dashboard');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <div style={styles.formGroup}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="birthDate"
          placeholder="Birth Date"
          value={formData.birthDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="studentNumber"
          placeholder="Student Number"
          value={formData.studentNumber}
          onChange={handleChange}
          maxLength="8"
          required
        />
        <input
          type="text"
          name="programme"
          placeholder="Programme"
          value={formData.programme}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="semester"
          placeholder="Semester"
          value={formData.semester}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          maxLength="8"
          required
        />
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
      {passwordError && <div style={styles.errorText}>{passwordError}</div>}
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
  submitButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  errorText: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  },
};

export default StudentSignup;
