import React from 'react'
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Grid,
  FormControl,
  Select,
  MenuItem
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { store } from '../redux/store/index.js'
import { cartActions } from '../redux/actions/index.js'
import { useCartClasses, useGeneralClasses } from '../styles/index.js'

function CartItem (props) {
  const { item } = props
  const cartClasses = useCartClasses()
  const generalClasses = useGeneralClasses()

  return (
    <ListItem key={item.id} className={`${[generalClasses.padding_a_xl, generalClasses.border_b]}`}>
      <ListItemAvatar>
        <img
          src={item.imageUrl}
          className={cartClasses.itemImage}
        />
      </ListItemAvatar>
      <ListItemText>
        <Grid container>
          <Grid item sm={12} md={10}>
            <Link className={cartClasses.itemDescription} to={`/item/${item.id}`}>
              {item.title}<br />{item.description}
            </Link>
          </Grid>
          <Grid item xs={4} sm={4} md={2} className={generalClasses.flex_justify_left}>
            <FormControl variant='outlined'>
              <Select value={item.count} onChange={event => handleItemCountChange(event, item.id)}>
                {[1, 2, 3, 4, 5].map(n => (
                  <MenuItem key={n} value={n}>{n}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={4} md={2} className={generalClasses.flex_justify_left}>
            <span>$ {(item.price * item.count).toFixed(2)}</span>
          </Grid>
        </Grid>
      </ListItemText>
    </ListItem>
  )
}

const handleItemCountChange = (event, id) => {
  const selectedValue = event.target.value
  const fieldsToUpdate = { id, count: selectedValue }
  store.dispatch(cartActions.updateCartItem(fieldsToUpdate))
}

export default CartItem
