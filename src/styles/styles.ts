import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  loginInputStyles: {
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#ABA8A8'
    },
    '& .MuiInput-root:after': {
      borderBottom: '2px solid #ABA8A8'
    },
  },
  btn: {
    padding: '15px',
    fontSize: '3vmin',
    fontWeight: 700,
    borderRadius: '10px',
    border: 'none',
    textTransform: 'uppercase',
    '&:hover': {
      cursor: 'pointer',
    }
  }
});

