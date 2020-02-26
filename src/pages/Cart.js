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
import { useGeneralClasses } from '../styles/index.js'
import { LocalMall } from '@material-ui/icons'

function Cart (props) {
  const classes = useStyles()
  const cartItems = props.cartItems
  const subTotalPrice = props.cartItems.reduce((sum, value) => sum + (value.price * value.count), 0)
  const totalPrice = subTotalPrice + (subTotalPrice * 0.16)
  const generalClasses = useGeneralClasses()

  return (
    <div className={classes.wrapper}>
      <Card className={classes.defaultCartStyle}>
        <Grid container>
          <Grid item xs={12} sm={12} md={8}>
            <CardContent>
              <Typography variant='h5'>Carrito de compra</Typography>
              <List>
                {cartItems.length > 0
                  ? cartItems.map(item => (
                    <CartItem key={item.index} item={item} />
                  )) : <Grid container justify='center' className={generalClasses.margin_t_bg}>
                    <Grid item xs={12}>
                      <p style={{textAlign: 'center'}}>No items selected yet</p>
                    </Grid>
                    <Grid>
                      <LocalMall className={`${classes.noItemsIcon}`} />
                    </Grid>
                  </Grid>}
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
  },
  noItemsIcon: {
    fontSize: 50,
    color: '#3f51b5'
  },
  defaultCartStyle: {
    width: '80%'
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
