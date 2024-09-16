import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Handle login logic here
};
const navigate = useNavigate();

const gotoHome = () => {
    navigate('/pages/Home');
  };


return (
    <div className='container-centered'>
    <div className="login-container">
    <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder='Enter your email here!'
            style={{borderRadius: 5}}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder='Enter the password here!'
            value={password}
            style={{borderRadius: 5}}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={gotoHome}>Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
