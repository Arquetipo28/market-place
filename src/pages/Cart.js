import React from 'react'
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  FormControl,
  Typography,
  Select,
  MenuItem
} from '@material-ui/core'
import { connect } from 'react-redux'
import { store } from '../redux/store/index.js'
import { cartActions } from '../redux/actions/index.js'
import { Link } from 'react-router-dom'

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
                  <ListItem key={item.id} className={[classes.padding30, classes.borderBotton]}>
                    <ListItemAvatar>
                      <CardMedia
                        component='img'
                        image={item.imageUrl}
                        className={classes.cartItemImage}
                      />
                    </ListItemAvatar>
                    <ListItemText>
                      <Grid container>
                        <Grid item sm={12} md={10}>
                          <Link className={classes.itemPrincipalData} to={`/item/${item.id}`}>
                            {item.title}<br />{item.description}
                          </Link>
                        </Grid>
                        <Grid item xs={4} sm={4} md={2} className={classes.justifyLeft}>
                          <FormControl variant='outlined' className={classes.formControl}>
                            <Select value={item.count} onChange={event => handleItemCountChange(event, item.id)}>
                              {[1, 2, 3, 4, 5].map(n => (
                                <MenuItem key={n} value={n}>{n}</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={4} md={2} className={classes.justifyLeft}>
                          <span>$ {(item.price * item.count).toFixed(2)}</span>
                        </Grid>
                      </Grid>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CardContent className={classes.cartPaymentWrapper}>
              <Grid container className={[classes.borderBotton, classes.padding30]}>
                <Grid item xs={8} sm={8} md={8}>
                  <span>Subtotal:</span>
                </Grid>
                <Grid item xs={4} sm={4} md={4} className={classes.justifyCenter}>
                  <span>$ {subTotalPrice.toFixed(2)}</span>
                </Grid>
              </Grid>
              <Grid container className={[classes.padding30]}>
                <Grid item xs={8} sm={8} md={8}>
                  <span>Total con IVA:</span>
                </Grid>
                <Grid item xs={4} sm={4} md={4} className={classes.justifyCenter}>
                  <span>$ {totalPrice.toFixed(2)}</span>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

const handleItemCountChange = (event, id) => {
  const selectedValue = event.target.value
  const fieldsToUpdate = { id, count: selectedValue }
  store.dispatch(cartActions.updateCartItem(fieldsToUpdate))
}

const useStyles = makeStyles(_theme => ({
  borderBotton: {
    borderBottom: '1px solid #E4E7E4'
  },
  padding30: {
    padding: 30
  },
  principalContainer: {
    width: '90%',
    marginBottom: 50
  },
  cartItemImage: {
    maxHeight: 100,
    maxWidth: 100,
    marginRight: 30
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
    flexGrow: 1
  },
  itemPrincipalData: {
    fontSize: 14,
    marginRight: 30,
    textDecoration: 'none',
    color: '#474747'
  },
  justifyCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  justifyLeft: {
    display: 'flex',
    justifyContend: 'left',
    alignItems: 'center'
  },
  formControl: {
    width: '80%'
  },
  cartPaymentWrapper: {
    margin: 15,
    border: '1px solid #E4E7E4',
    padding: 20
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
