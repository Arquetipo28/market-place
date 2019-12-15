import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: 'none',
    boxShadow: 'none'
  }
}));

export default function NavBar () {
  const classes = useStyles();

  return (
    <AppBar color="inherit" className={classes.bar} position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Market Place
        </Typography>
        <Button color="inherit">Home</Button>
      </Toolbar>
    </AppBar>
  );
}
