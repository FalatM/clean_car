import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '25ch',
    },
  },
}));

export default function UnitField() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField type="text" id="standard-basic" label="Unit Number" required/>
      <TextField Type="text" id="standard-basic" label="Employee" required/>  
    </form>
  );
}
