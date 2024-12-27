import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage('Both fields are required');
      return;
    }
    if (username === 'user' && password === 'password') {
      setMessage('Welcome, user!');
      setIsLoggedIn(true);
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      {isLoggedIn ? (
        <p>{message}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {message && <p>{message}</p>}
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              placeholder='username'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Login;
