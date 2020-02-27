import React from 'react'
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Grid,
  FormControl,
  Select,
  MenuItem,
  CardMedia
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { store } from '../redux/store/index.js'
import { cartActions } from '../redux/actions/index.js'
import '../styles/general.scss'
import '../styles/cart.scss'

function CartItem (props) {
  const { item } = props

  return (
    <ListItem key={item.id} className='padding_a_bg border_b'>
      <Grid container>
        <Grid item sm={12} md={2} lg={2} className='margin_b_bg'>
          <ListItemAvatar className='flex flex_centered'>
            <CardMedia
              component='img'
              image={item.imageUrl}
              className='itemImage'
            />
          </ListItemAvatar>
        </Grid>
        <Grid item sm={12} md={10} lg={10} className='margin_b_bg'>
          <ListItemText className='margin_lr_lg'>
            <Grid container>
              <Grid item sm={12} md={10}>
                <Link className='itemDescription' to={`/item/${item.id}`}>
                  {item.title}<br />{item.description}
                </Link>
              </Grid>
              <Grid item xs={4} sm={4} md={2} className='flex_justify_left'>
                <FormControl variant='outlined'>
                  <Select value={item.count} onChange={event => handleItemCountChange(event, item.id)}>
                    {[1, 2, 3, 4, 5].map(n => (
                      <MenuItem key={n} value={n}>{n}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={4} md={4} className='flex_justify_left'>
                <span>$ {(item.price * item.count).toFixed(2)}</span>
              </Grid>
            </Grid>
          </ListItemText>
        </Grid>
      </Grid>
    </ListItem>
  )
}

const handleItemCountChange = (event, id) => {
  const selectedValue = event.target.value
  const fieldsToUpdate = { id, count: selectedValue }
  store.dispatch(cartActions.updateCartItem(fieldsToUpdate))
}

export default CartItem
