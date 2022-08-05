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
      height='100vh'
      sx={{ margin: 'auto' }}
      rowGap={2}
    >
      <Grid
        item
      >
        <h1>Login</h1>
      </Grid>
      <Grid
        container
        component='section'
        justifyContent='center'
      >
        <LoginForm />
      </Grid>
    </Grid>
  );
}