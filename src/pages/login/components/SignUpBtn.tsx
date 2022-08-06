import * as React from 'react';
import Grid from '@mui/material/Grid';
import { CustomButton } from '../../../genericComponents';

import { useStyles } from '../../../styles/styles';

export default function SignUpBtn() {
  const { btn } = useStyles();
  return (
    <Grid
      item
      id='login-btn-container'
    >
      <CustomButton
        type='submit'
        className={btn}
        style={{
          color: 'white',
          background: 'green',
        }}
      >
        sign up and go
      </CustomButton>
    </Grid>
  );
}