import React from 'react'
import {
  Grid
} from '@material-ui/core'
import { useCartClasses, useGeneralClasses } from '../styles/index.js'

/**
 * Element to show total price of elements charged to the cart
 *
 * @param {object} props
 */
function PaymentBox (props) {
  const cartClasses = useCartClasses()
  const generalClasses = useGeneralClasses()
  const { totalPrice, subTotalPrice } = props
  return (
    <Grid className={cartClasses.cartPaymentWrapper}>
      <Grid container className={`${[generalClasses.border_b, generalClasses.padding_a_xl]}`}>
        <Grid item xs={8} sm={8} md={8}>
          <span>Subtotal:</span>
        </Grid>
        <Grid item xs={4} sm={4} md={4} className={`[${generalClasses.flex}${generalClasses.flex_centered}]`}>
          <span>$ {subTotalPrice.toFixed(2)}</span>
        </Grid>
      </Grid>
      <Grid container className={generalClasses.margin_t_xl}>
        <Grid item xs={8} sm={8} md={8}>
          <span>IVA applied:</span>
        </Grid>
        <Grid item xs={4} sm={4} md={4} className={`[${generalClasses.flex}${generalClasses.flex_centered}]`}>
          <span>$ {totalPrice.toFixed(2)}</span>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PaymentBox
