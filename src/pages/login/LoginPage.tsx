import * as React from 'react';
import Grid from '@mui/material/Grid';

import { LoginForm } from './components';

export default function LoginPage() {
  return (
    <Grid
      container
      component='section'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      sx={{ margin: 'auto' }}
    >
      <Grid
        item
      >
        <h1>Login</h1>
      </Grid>
      <Grid
        item
      >
        <LoginForm />
      </Grid>
    </Grid>
  );
}