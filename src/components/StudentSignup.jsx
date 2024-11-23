import React, { useState } from 'react';

function StudentSignup() {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    gender: '',
    email: '',
    studentNumber: '',
    programme: '',
    module: '',
    semester: '',
    year: '',
    contact: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form Data:', formData);
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
        />
        <input 
          type="date" 
          name="birthDate" 
          placeholder="Birth Date" 
          value={formData.birthDate} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="gender" 
          placeholder="Gender" 
          value={formData.gender} 
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
          name="studentNumber" 
          placeholder="Student Number" 
          value={formData.studentNumber} 
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
          name="module" 
          placeholder="Module" 
          value={formData.module} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="semester" 
          placeholder="Semester" 
          value={formData.semester} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="year" 
          placeholder="Year" 
          value={formData.year} 
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
      <button type="submit" style={styles.submitButton}>Sign up</button>
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
};

export default StudentSignup;
