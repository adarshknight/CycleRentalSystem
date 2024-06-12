import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }
    // Check if password contains a capital letter
    if (!/[A-Z]/.test(password)) {
      setError('Password must contain at least one capital letter.');
      return;
    }
    // Simulate login process (replace with actual authentication logic)
    if (username === 'admin' && password === 'Password1') {
      handleLogin(username);
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="login-center-container">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="error">{error}</div>}
          <div className="input-group">
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
