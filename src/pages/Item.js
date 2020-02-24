import React from 'react'
import { useParams } from 'react-router-dom'
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  makeStyles,
  Button
} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import products from '../resources/products.json'
import { cartActions } from '../redux/actions/index.js'
import { connect } from 'react-redux'

function Item (props) {
  const { id } = useParams()
  const item = foundItem(id)
  const itemCount = props.cartItems.length
  const classes = useStyles()
  
  return (
    <div className={classes.itemContainer}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Grid container className={classes.root}>
            <Grid item xs={12} md={6}>
              <CardMedia
                component='img'
                alt={item.brief}
                image={item.imageUrl}
                title={item.brief}
                className={classes.image}
              />
            </Grid>
            <Grid item md={6} className={classes.itemBasics}>
              <Grid item>
                <Typography gutterBottom variant='h5' component='h2'>
                  {item.title}
                </Typography>
                <Typography gutterBottom variant='h4' component='h3'>
                  $ {item.price}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {item.description}
                </Typography>
                <Grid container justify='flex-end' alignItems='center' className={classes.buyBtn}>
                  <Button onClick={() => { props.addCartItem({ ...item, index: itemCount }) }}>
                    Add to cart
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

const foundItem = (id) => {
  return products.new.find(product => product.id === id)
}

const useStyles = makeStyles(_theme => ({
  root: {
    flexGrow: 1
  },
  image: {
    display: 'inline-block'
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    maxWidth: '90%',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 20
  },
  itemBasics: {
    padding: 30
  },
  buyBtn: {
    marginTop: 30
  }
}))

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCartItem: (item) => dispatch(cartActions.addCartItem(item))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)
