import * as React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { InputAdornment } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useStyles } from '../../../styles/styles';

export default function LoginForm() {
  const { loginInputStyles } = useStyles();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [loginCredentials, setLoginCredentials] = React.useState<{
    email: string, password: string
  }>({
    email: '',
    password: '',
  })

  const handleChange = (e: React.SyntheticEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    setLoginCredentials({
      ...loginCredentials,
      [name]: value,
    });
  }

  const clearEmail = () => setLoginCredentials({ ...loginCredentials, email: '' })

  const handlePasswordInputType = () => setShowPassword(!showPassword);

  return (
    <form>
      <Grid
        item>
        <TextField
          onChange={handleChange}
          value={loginCredentials.email}
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
      <Grid
        item
      >
        <TextField
          onChange={handleChange}
          value={loginCredentials.password}
          type={showPassword ? 'text' : 'password'}
          className={loginInputStyles}
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
                  onClick={handlePasswordInputType}
                >
                  {showPassword && <VisibilityIcon />}
                  {!showPassword && <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          label='Password'
        />
      </Grid>
    </form>
  );
}