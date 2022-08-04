import * as React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { InputAdornment } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function LoginForm() {
  const [loginCredentials, setLoginCredentials] = React.useState<{
    email: string, password: string
  }>({
    email: '',
    password: '',
  })

  
  return (
    <Grid
      item
    >
      <form>
        <TextField
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
                    edge='end'>
                    <ClearOutlinedIcon />
                  </IconButton>
                }
              </InputAdornment>
            ),
          }}
          label='Email'
        />
        <TextField
          name='password'
          data-testid='password'
          fullWidth
          variant='standard'
          InputProps={{
            className: 'login',
            startAdornment: (
              <InputAdornment position='start'>
                <LockOutlinedIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>

                <IconButton
                  edge='end'
                >
                </IconButton>
              </InputAdornment>
            ),
          }}
          label='Password'
        />
      </form>
    </Grid>
  );
}