import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import notFoundImage from '../assets/images/not_found.jpg'
import '../styles/general.scss'

function NotFound () {
  const classes = useStyles()

  return (
    <Grid container className={classes.notFoundContainer}>
      <Grid item xs={12} className='flex flex_centered'>
        <img src={notFoundImage} className={classes.notFoundImage} />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(_theme => ({
  notFoundContainer: {
    minHeight: 500
  },
  notFoundTitle: {
    color: '#3f51b5',
    fontSize: 80,
    display: 'block'
  },
  notFoundImage: {
    maxHeight: 700,
    maxWidth: 700
  }
}))

export default NotFound
