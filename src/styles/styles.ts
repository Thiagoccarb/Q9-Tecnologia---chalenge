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
});

