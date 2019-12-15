import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  makeStyles
} from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  card: {
    maxWidth: 220,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 20
  }
}))

const ProductCard = (props) => {
  const classes = useStyle()

  return(
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="180"
        image={props.data.image_url}
        title="Contemplative Reptile"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            $ {props.data.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.data.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" color="primary">
            Buy
        </Button>
      </CardActions>
    </Card>
  )
}
export default ProductCard
