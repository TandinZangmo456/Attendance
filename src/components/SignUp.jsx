import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up As</h2>
        <div className="role-buttons">
          <button
            className="role-button"
            onClick={() => navigate('/student-signup')}
          >
            Student
          </button>
          <button
            className="role-button"
            onClick={() => navigate('/teacher-signup')}
          >
            Lecturer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
