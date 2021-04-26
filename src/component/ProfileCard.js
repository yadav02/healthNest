import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import Avatar from '@material-ui/core/Avatar';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import EventIcon from '@material-ui/icons/Event';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    maxHeight: 105,
    margin: 92
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

 const RecipeReviewCard = () => {
  const classes = useStyles();

  return (
    <>  
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
          </Avatar>
        }
        
        // title="Patient"
        // subheader="DIAGNOSED RECENTLY"
      />
      <h4 style={{position:'relative', top:'-76px', left:'-18%'}}>Patient</h4>
      <h4 style={{position:'relative', top:'-95px', left:'2%', color:'#3CB371'}}>DIAGNOSED RECENTLY</h4>
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
    </Card>
      <Divider variant="middle" style={{position:'relative', left:'4.5%', width:'325px',top:'-27px'}}/>
    <div style={{position:'relative', right:'43.5%'}}>
        <h4 style={{color:'#A9A9A9'}}>Library</h4>
        <div style={{position:'relative', right:'1.2%'}}>
        <div> 
        <BookmarksIcon style={{backgroundColor:'white', color:'#FFD700'}}/>
        <h5 style={{position:'relative', top:'-47px', left:'5%'}}>My Bookmarks</h5>
        </div>
        <div style={{position:'relative', top:'-32px'}}>
        <LiveTvIcon style={{backgroundColor:'white', color:'#483D8B'}}/>
        <h5 style={{position:'relative', top:'-47px', left:'5%'}}>News & Articles</h5>
        </div>
        <div style={{position:'relative', top:'-58px'}}>
        <LiveHelpIcon style={{backgroundColor:'white', color:'#00CED1'}}/>
        <h5 style={{position:'relative', top:'-47px', left:'3%'}}>FAQs</h5>
        </div>
        <div style={{position:'relative', top:'-88px'}}>
        <EventIcon style={{backgroundColor:'white', color:'#FF8C00'}}/>
        <h5 style={{position:'relative', top:'-47px', left:'3%'}}>Events</h5>
        </div>
        </div>
    </div>
    </>
  );
}
export default RecipeReviewCard;