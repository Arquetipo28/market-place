import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: 'white',
    position: "relative",
    bottom: 0,
    height: 400,
    width: "100vw"
  }
}))

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
    </div>
  );
}

export default Footer