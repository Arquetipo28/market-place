import React from 'react';
import {
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';

import ProductCard from '../components/ProductCard'
import products from '../data/products.js'

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
  return (
    <Grid container>
      <Grid item className={classes.principal} sm={12}>
        <Typography component="h2" variant="h5" className={classes.title}>Artículos añádidos recientemente</Typography>
      </Grid>
      <Grid item sm={12} className={classes.products}>
        <Grid container justify="left" spacing={1}>
        {products.new.map((item, item_key) => {
          return (
              <ProductCard key={item_key} data={item}/>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;

