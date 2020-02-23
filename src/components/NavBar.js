import React from 'react'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge
} from '@material-ui/core'
import { connect } from 'react-redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function NavBar (props) {
  const classes = useStyles()
  const itemCount = props.cartItems.length
  return (
    <AppBar color='inherit' className={classes.bar} position='relative'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Market Place
        </Typography>
        <Button color='inherit'>Home</Button>
        <Button>
          <Badge badgeContent={itemCount | 0} color='primary'>
            <ShoppingCartIcon />
          </Badge>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  bar: {
    backgroundColor: '#E5E8E8',
    boxShadow: 'none'
  }
}))

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
