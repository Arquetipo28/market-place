import React from 'react'
import {
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core'
import AwesomeSlider from 'react-awesome-slider'
import AwsSliderStyles from 'react-awesome-slider/src/styles'

import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import products from '../resources/products.json'
import DefaultImage from '../assets/images/default.png'

const Home = () => {
  const classes = useStyles()
  const defaultProduct = {
    title: 'Default',
    imageUrl: DefaultImage,
    price: '00.00',
    description: 'This is a default product',
    brief: 'Default'
  }

  return (
    <Grid container>
      {/* Top carousel */}
      <AwesomeSlider cssModule={AwsSliderStyles} className={classes.slides} bullets={false}>
        {products.new.map((item, itemKey) => {
          return <div key={itemKey} data-src={item.imageUrl} />
        })}
      </AwesomeSlider>
      {/* New products */}
      <Grid item className={classes.principal} sm={12}>
        <Typography component='h2' variant='h5' className={classes.title}>New products</Typography>
      </Grid>
      <Grid item sm={12} className={classes.products}>
        <Grid container justify='flex-start' spacing={1}>
          {products.new.map((item, itemKey) => {
            return (
              <Grid key={itemKey} item xs={12} sm={6} md={4} lg={3}>
                <ProductCard data={item} />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
      {/* Best selling */}
      <Grid item className={classes.principal} sm={12}>
        <Typography component='h2' variant='h5' className={classes.title}>Best selling</Typography>
      </Grid>
      <Grid item sm={12} className={classes.products}>
        <Grid container justify='flex-start' spacing={1}>
          {[1, 2, 3, 4].map((_item, itemKey) => {
            return (
              <Grid key={itemKey} item xs={12} sm={6} md={4} lg={3}>
                <ProductCard data={defaultProduct} />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({
  principal: {
    marginTop: 50
  },
  title: {
    marginLeft: 25,
    marginRight: 25
  },
  products: {
    marginTop: 20
  },
  slides: {
    maxHeight: 300
  }
}))

export default Home
