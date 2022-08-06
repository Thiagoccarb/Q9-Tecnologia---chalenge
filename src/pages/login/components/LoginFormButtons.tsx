import * as React from 'react';
import Grid from '@mui/material/Grid';
import { CustomButton } from '../../../genericComponents';

import { useStyles } from '../../../styles/styles';

interface IProps {
  registerNewUser: (e: React.FormEvent<HTMLFormElement>) => null | Promise<any>
}

export default function LoginFormButtons({ registerNewUser }: IProps) {
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
          background: 'blue',
        }}
      >
        login
      </CustomButton>
      <CustomButton
        className={btn}
        onClick={registerNewUser}
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