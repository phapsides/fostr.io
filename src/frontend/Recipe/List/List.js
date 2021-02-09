import React from 'react';
import './List.scss';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({

    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


const List = (props) => {

    const { recipes } = props;
    const classes = useStyles();


    if (!recipes || recipes.length === 0) return <p>No recipes, sorry</p>;

    return (

        <div className="recipe-list">
            {recipes.map((recipe, index) => {
                return (

                    <Card
                        key={recipe.index}
                        className={classes.root}
                    >
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    R
                                </Avatar>
                            }
                            action={
                                <Link
                                    className="recipe-title"
                                    to={{
                                        pathname: `/${recipe.title}`,
                                        state: {
                                            recipe: recipe
                                        }
                                    }}
                                >
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                </Link>
                            }
                            title={recipe.title}
                            subheader={recipe.author.name}
                        />
                        <CardMedia
                            className={classes.media}
                            image={recipe.image}
                            title={recipe.title}
                        />
                        <CardContent>
                            <Typography color="textSecondary" component="p">
                                {recipe.description}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                );
            })}
        </div>
    );
};
export default List;



