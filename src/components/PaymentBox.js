import React from 'react'
import {
  Grid
} from '@material-ui/core'
import '../styles/cart.scss'
import '../styles/general.scss'

/**
 * Element to show total price of elements charged to the cart
 *
 * @param {object} props
 */
function PaymentBox (props) {
  const { totalPrice, subTotalPrice } = props
  return (
    <Grid className='cartPaymentWrapper'>
      <Grid container className='border_b padding_b_sm'>
        <Grid item xs={8} sm={8} md={8}>
          <span>Subtotal:</span>
        </Grid>
        <Grid item xs={4} sm={4} md={4} className='flex flex_centered'>
          <span>$ {subTotalPrice.toFixed(2)}</span>
        </Grid>
      </Grid>
      <Grid container className='margin_t_bg'>
        <Grid item xs={8} sm={8} md={8}>
          <span>IVA applied:</span>
        </Grid>
        <Grid item xs={4} sm={4} md={4} className='flex flex_centered'>
          <span>$ {totalPrice.toFixed(2)}</span>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PaymentBox
