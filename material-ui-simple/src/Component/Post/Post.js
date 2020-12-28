import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Post = ({post}) => {
  const {body,id,title,userId} = post;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
       <Card className={classes.root} className='card-id'>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <h2>Title</h2>
          <br/>
          {title}
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
         <h4>{id}</h4>
        </Typography>
        <Typography variant="body2" component="p">
          {body}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
    <Link to={`/post/${id}`}><Button class='fr-btn' size="small"><h3>See more</h3></Button></Link> 
      </CardActions>
    </Card>
    </div>
  );
};

export default Post;