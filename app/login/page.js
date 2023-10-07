// components/LoginForm.js
'use client';
import React, { useState } from 'react';
import { Button, TextField, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer la lógica de autenticación.
    console.log(email, password);
  };

  return (
    <Paper elevation={3} style={{ padding: '2em', maxWidth: '400px', margin: '2em auto' }}>
      <Typography variant="h5" gutterBottom>
        Iniciar sesión
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Correo electrónico"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Contraseña"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <Button fullWidth variant="contained" color="primary" type="submit" style={{ marginTop: '1em' }}>
          Entrar
        </Button>

        <Button fullWidth variant="contained" color="primary"  style={{ marginTop: '1em' }}
        onClick={(e ) =>{
    
         router.push('/login/new')
        }}
        >
          Registrarme 
        </Button>

      </form>
    </Paper>
  );
};

export default LoginForm;
