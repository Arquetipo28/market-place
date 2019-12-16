import React from 'react';
import {
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';

import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import products from '../data/products.js'
import DefaultImage from '../assets/images/default.png'

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
  }
}));


const Home = () => {
  const classes = useStyles();
  const default_product = {
    title: 'Default',
    image_url: DefaultImage,
    price: '00.00',
    description: 'This is a default product',
    brief: 'Default'
  }

  return (
    <Grid container>
      {/* New products */}
      <Grid item className={classes.principal} sm={12}>
        <Typography component="h2" variant="h5" className={classes.title}>New products</Typography>
      </Grid>
      <Grid item sm={12} className={classes.products}>
        <Grid container justify="left" spacing={1}>
          {products.new.map((item, item_key) => {
            return (
              <Grid key={item_key} item xs={12} sm={6} md={4} lg={3}>
                <ProductCard data={item}/>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
      {/* Best selling */}
      <Grid item className={classes.principal} sm={12}>
        <Typography component="h2" variant="h5" className={classes.title}>Best selling</Typography>
      </Grid>
      <Grid item sm={12} className={classes.products}>
        <Grid container justify="left" spacing={1}>
          {[1,2,3,4].map((_item, item_key) => {
            return (
              <Grid key={item_key} item xs={12} sm={6} md={4} lg={3}>
                <ProductCard data={default_product}/>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
      <Footer/>
    </Grid>
  );
}

export default Home;

