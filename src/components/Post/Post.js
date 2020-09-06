import React from 'react';
import './Post.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Post = (props) => {
    const classes = useStyles();
    const {title, id } = props.post;

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://source.unsplash.com/user/erondu/1600x900"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            ID: {id}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Title: {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                <Link to={`/posts/${id}`}>
                <Button variant="contained" color="primary" disableElevation>
                        See More About {id}
                    </Button>
                </Link>

                    

                </CardActions>
            </Card>
        </div>
    );
};

export default Post; 