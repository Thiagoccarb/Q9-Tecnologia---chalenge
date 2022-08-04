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
      sx={{ margin: 'auto' }}
    >
      <Grid
        item
      >
        <LoginForm />
      </Grid>
    </Grid>
  );
}