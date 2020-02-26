import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { useGeneralClasses } from '../styles/index.js'
import notFoundImage from '../assets/images/not_found.jpg'

function NotFound () {
  const classes = useStyles()
  const generalClasses = useGeneralClasses()

  return (
    <Grid container className={classes.notFoundContainer}>
      <Grid item xs={12} className={`${generalClasses.flex} ${generalClasses.flex_centered}`}>
        <img src={notFoundImage} className={classes.notFoundImage}/>
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
