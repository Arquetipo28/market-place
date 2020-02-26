import React from 'react'
import {
  makeStyles,
  Card,
  CardContent,
  Grid,
  List,
  Typography
} from '@material-ui/core'
import { connect } from 'react-redux'
import { PaymentBox, CartItem } from '../components/Index'

function Cart (props) {
  const classes = useStyles()
  const cartItems = props.cartItems
  const subTotalPrice = props.cartItems.reduce((sum, value) => sum + (value.price * value.count), 0)
  const totalPrice = subTotalPrice + (subTotalPrice * 0.16)

  return (
    <div className={classes.wrapper}>
      <Card>
        <Grid container>
          <Grid item xs={12} sm={12} md={8}>
            <CardContent>
              <Typography variant='h5'>Carrito de compra</Typography>
              <List>
                {cartItems.map(item => (
                  <CartItem key={item.index} item={item} />
                ))}
              </List>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PaymentBox totalPrice={totalPrice} subTotalPrice={subTotalPrice} />
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

const useStyles = makeStyles(_theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
    flexGrow: 1
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
)(Cart)
