import {
  makeStyles
} from '@material-ui/core'

const SECONDARY_COLOR = '#474747'
const SECONDARY_BORDER_COLOR = '#E4E7E4'

const classes = makeStyles(_theme => ({
  cartPaymentWrapper: {
    margin: 15,
    border: `1px solid ${SECONDARY_BORDER_COLOR}`,
    padding: 20
  },
  itemImage: {
    maxHeight: 350,
    maxWidth: 350
  },
  itemDescription: {
    fontSize: 14,
    textDecoration: 'none',
    color: SECONDARY_COLOR
  }
}))

export default classes
