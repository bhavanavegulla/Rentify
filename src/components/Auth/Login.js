import React, { useState } from 'react';
import AuthService from '../../services/AuthService'; // Assuming your AuthService

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State for error message
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State for password visibility

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password);
      history.push('/properties');
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message || 'Login failed!');
    }
  };

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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
      className="login-container"
      style={{
        display: 'flex',
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
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}
            />
            <i
              className="fas fa-eye" 
              onClick={handlePasswordVisibility}
              style={{ marginLeft: '5px', cursor: 'pointer' }} 
            ></i>
          </div>
          {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>} {/* Display error message in red */}
          <button type="submit" style={{ background: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px' }}>
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
