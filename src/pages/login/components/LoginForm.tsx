import * as React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { InputAdornment } from '@mui/material';

export default function LoginForm() {
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
      </form>
    </Grid>
  );
}