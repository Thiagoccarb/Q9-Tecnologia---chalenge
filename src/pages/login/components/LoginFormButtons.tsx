import * as React from 'react';
import Grid from '@mui/material/Grid';
import { CustomButton } from '../../../genericComponents';

import { useStyles } from '../../../styles/styles';

export default function LoginPage() {
  const { btn } = useStyles();
  return (
    <Grid
      item
      id='login-btn-container'
    >
      <CustomButton
        className={btn}
        style={{ 
          color: 'white',
          background: 'blue', 
        }}
      >
        login
      </CustomButton>
      <CustomButton
        className={btn}
        style={{ 
          color: 'white',
          background: 'green', 
        }}
      >
        sign up
      </CustomButton>
    </Grid>
  );
}