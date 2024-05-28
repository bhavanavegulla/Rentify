import React, { useState } from 'react';
import AuthService from '../../services/AuthService';
import { useHistory } from 'react-router-dom';


const Register = ({ history }) => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await AuthService.register(formData);
      history.push('/login');
  } catch (error) {
      console.error('Registration error:', error);
      setError(error.message);
  }
};


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div
      className="register-page"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#3297a8', 
      }}
    >
    <div
      className="register-form"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px auto', 
        width: '400px',
        backgroundColor: '#f4f0ee', 
        color: '#333', 
        borderRadius: '5px', 
        padding: '20px', 
      }}
    >
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="firstName">
          First Name:
          <br />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            required
            style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }} 
          />
        </label>
        <br />
        <label htmlFor="lastName">
          Last Name:
          <br />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            required
            style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}
          />
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
            style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}
          />
        </label>
        <br />
        <label htmlFor="phone">
          Phone:
          <br />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            required
            style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
            style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}
          />
        </label>
        <br />
        <button type="submit" style={{ background: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px' }}>
          Register
        </button>
      </form>
    </div>
    </div>
  );
};

export default Register;
