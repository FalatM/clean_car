import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#169A5A' }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Clean Car Check List
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
