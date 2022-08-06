import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { InputAdornment } from '@mui/material';

import { registerUser } from '../../../API/register';
import { SignUpBtn } from '.';
import { useStyles } from '../../../styles/styles';

export default function LoginForm() {
  const navigate = useNavigate();
  const { loginInputStyles } = useStyles();
  const [error, setError] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');

  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+.*?[a-z]+/;

  const checkEmail = () => emailRegex.test(email);

  const registerNewUser = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValidEmail = validateEmail(e);
    if (isValidEmail) {
      const { user: { token } } = await registerUser({ email });
      localStorage.setItem('token', token);
      return navigate('/breeds')
    }
    return null;
  }

  const validateEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidEmail = checkEmail();
    setError(!isValidEmail);
    return isValidEmail;
  }

  const handleChange = (e: React.SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setEmail(value);
  };

  const clearEmail = () => setEmail('')

  return (
    <>
      {
        error
        && <div
          className='error'
        >
          <span>Por favor, confira o email digitado e tente novamente</span>
        </div>
      }
      <form style={{ width: '100%' }} onSubmit={registerNewUser} >
        <Grid
          container
          flexDirection='column'
          margin='auto'
          width='80%'
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
        <SignUpBtn />
      </form>
    </>
  );
}