import * as React from 'react';
import Grid from '@mui/material/Grid';

import '../../styles/styles.css';

import { LoginForm } from './components';

export default function LoginPage() {
  return (
    <Grid
      container
      component='section'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      height='400px'
      width='80vw'
      sx={{ 
        margin: 'auto',
        maxWidth: '800px',
        position: 'relative',
        top: '30%',
        border: '1px solid black',
        borderRadius: '10px'
    }}
      rowGap={11}
    >
      <Grid
        item
      >
        <h1>Login</h1>
      </Grid>
      <Grid
        container
        component='div'
        justifyContent='center'
      >
        <LoginForm />
      </Grid>
    </Grid>
  );
}