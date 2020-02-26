import {
  makeStyles
} from '@material-ui/core'

// Dimension standard
const XL = 30
const LG = 25
const BG = 20
const SM = 15
const SECONDARY_COLOR = '#E4E7E4'

const classes = makeStyles(_theme => ({
  // Paddings
  padding_a_lg: {
    padding: LG
  },
  padding_a_xl: {
    padding: XL
  },
  // Borders
  border_b: {
    borderBottom: `1px solid ${SECONDARY_COLOR}`
  },
  // Margins
  margin_a_lg: {
    margin: LG
  },
  margin_t_xl: {
    marginTop: XL
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
