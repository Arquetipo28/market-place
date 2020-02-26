import React from 'react'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge
} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

function NavBar (props) {
  const classes = useStyles()
  const itemCount = props.cartItems.length
  const history = useHistory()

  return (
    <AppBar color='inherit' className={classes.bar} position='relative'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Market Place
        </Typography>
        <Button color='inherit' onClick={() => history.push('/')}>
          Home
        </Button>
        <Button onClick={() => history.push('/my-cart')}>
          <Badge badgeContent={itemCount | 0} color='primary'>
            <ShoppingCartIcon />
          </Badge>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles(theme => ({
  flexEnd: {
    display: 'flex',
    alignItems: 'flex-end'
  },
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
    boxShadow: 'none',
    width: '100%'
  },
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    padding: theme.spacing(1),
    width: 500
  },
  itemInCart: {
    listStyle: 'none',
    padding: 15
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
