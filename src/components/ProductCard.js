import React from 'react'
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  makeStyles
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export default function ProductCard (props) {
  const classes = useStyle()
  const history = useHistory()

  return (
    <Card className={classes.card} onClick={() => history.push(`/item/${props.data.id}`)}>
      <CardMedia
        component='img'
        alt={props.data.brief}
        height='180'
        image={props.data.imageUrl}
        title={props.data.brief}
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant='h5' component='h2'>
            $ {props.data.price}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {props.data.description.slice(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.actions}>
        <Button
          size='small'
          color='inherit'
          className={classes.button}
        >
          Show Item
        </Button>
      </CardActions>
    </Card>
  )
}

const useStyle = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 20
  },
  actions: {
    position: 'relative',
    bottom: 0
  },
  content: {
    height: 100
  },
  button: {
    color: '#F38383'
  }
}))
