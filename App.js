import React, { useState } from 'react';
import './LoginPage.css'; // CSS file for styling

const LoginPage = () => 
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = (e) => // Function to handle form submission
  {
    e.preventDefault();
    console.log('Login attempt with:', { email, password }); // Reset input fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="login-form-container">
        <h2 className="login-heading">Sign in</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
      <div className="signup-form-container">
        <h2 className="signup-heading">Sign Up</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="signup-email">Email:</label>
            <input
              type="email"
              id="signup-email"
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Password:</label>
            <input
              type="password"
              id="signup-password"
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;