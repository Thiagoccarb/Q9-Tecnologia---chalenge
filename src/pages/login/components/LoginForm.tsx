import * as React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { InputAdornment } from '@mui/material';

import { LoginFormButtons } from '.';
import { useStyles } from '../../../styles/styles';

export default function LoginForm() {
  const { loginInputStyles } = useStyles();
  const [error, setError] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');

  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+.*?[a-z]+/;

  const validateEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidEmail = emailRegex.test(email);
    setError(!isValidEmail);
  }

  const handleChange = (e: React.SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setEmail(value);
  };

  const clearEmail = () => setEmail('')

  return (
    <form style={{ width: '100%' }} onSubmit={validateEmail} >
      <Grid
        container
        flexDirection='column'
        margin='auto'
        width='80%'
        rowGap={8}
      >
        <Grid
          item
        >
          <TextField
            error={error}
            onChange={handleChange}
            value={email}
            className={loginInputStyles}
            type='text'
            name='email'
            fullWidth
            data-testid='email'
            variant='standard'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <EmailOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  {
                    <IconButton
                      edge='end'
                      onClick={clearEmail}
                    >
                      <ClearOutlinedIcon />
                    </IconButton>
                  }
                </InputAdornment>
              ),
            }}
            label='Email'
          />
        </Grid>
      </Grid>
      <LoginFormButtons />
    </form>
  );
}