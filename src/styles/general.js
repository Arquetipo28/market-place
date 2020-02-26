import {
  makeStyles
} from '@material-ui/core'

// Dimension standard
const XL = 40
const BG = 30
const LG = 25
const SM = 15
const SECONDARY_COLOR = '#E4E7E4'

const classes = makeStyles(_theme => ({
  // Paddings
  padding_a_lg: {
    padding: LG
  },
  padding_a_bg: {
    padding: BG
  },
  // Borders
  border_b: {
    borderBottom: `1px solid ${SECONDARY_COLOR}`
  },
  // Margins
  margin_lr_lg: {
    margin: `0 ${LG}px`
  },
  margin_a_lg: {
    margin: LG
  },
  margin_t_xl: {
    marginTop: XL
  },
  margin_t_bg: {
    marginTop: BG
  },
  flex: {
    display: 'flex'
  },
  flex_centered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flex_justify_left: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center'
  }
}))

export default classes
