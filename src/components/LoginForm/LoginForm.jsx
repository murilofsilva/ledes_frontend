import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginForm.css';
import loginService from '../../services/loginService';
import { useAuth } from '../../auth/AuthContext';
import loginImage from '../../assets/pge_login_image.jpeg';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginService.login(email, password);
      console.log('Login successful:', response);
      login();
      navigate('/main');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to login. Please check your email and password.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box className="login-container">
        <Typography component="h1" variant="h5" className="login-title">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} className="login-form">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="login-button"
          >
            Entrar
          </Button>
        </Box>
        <img src={loginImage} alt="Login" className="login-image" />
        <ToastContainer />
      </Box>
    </Container>
  );
};

export default LoginForm;