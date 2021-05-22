import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        margin: 30,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        cursor: 'pointer',
        '&:hover': {
            transform: 'scale(1.04)'
        }


    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    },
}));



export default function Product({ name = "IPhone 12", price = "84000", imageUrl = "https://picsum.photos/200/300" }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);


    return (
        <Link to={{ pathname: "/product", state: { productName: name, price, imageUrl } }} >

            <Card className={classes.root}>
                <CardHeader
                    style={{ paddingBottom: 0 }}
                    title={name}
                    subheader="by Apple"
                />
                <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title={name}
                />
                <CardContent style={{ paddingBottom: 0 }}>
                    <Typography variant="h6" color="textSecondary" component="p">
                        {price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        4.5/5
        </Typography>
                </CardContent>
                <CardActions disableSpacing style={{ paddingTop: 0 }}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        aria-label="add-to-cart"
                        style={{
                            marginLeft: 70
                        }}
                    >
                        <AddShoppingCartIcon />
                    </IconButton>
                </CardActions>
            </Card></Link>
    );
}
