import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import EditIcon from '@material-ui/icons/Edit';
// import Divider from '@material-ui/core/Divider';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PollIcon from '@material-ui/icons/Poll';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Modal from '@material-ui/core/Modal';
import ModalCard from './ModalCard';


const useStyles = makeStyles({
  root: {
    minWidth: 5,
    minHeight:2
  },
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    },
    borderRadius:2 
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
// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
// });

const PostCard = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const handleCallback = (close) => {
  //   console.log(close)
  // handleClose()
  // }

  return (
    <>
    <Card className={classes.root} 
           style={{
             width:'38%',
             height:'165px',
             position:'relative',
             left:'37%', 
             top:'-625px'
             }}>

               <div style={{}}>
                 <EditIcon style={{position:'relative', top:'30px', right:'42%', color:'#3CB371'}}/>
                 <h4 onClick={handleClickOpen} style={{position:'relative', top:'-18px', right:'35%', color:'#3CB371',cursor: 'pointer'}}>Post</h4>
                 {/* <Divider  orientation="vertical" style={{color:'black'}} /> */}
                 <HelpOutlineIcon style={{position:'relative', top:'-58px', right:'24%', color:'#3CB371'}}/>
                 <h4 style={{position:'relative', top:'-108px', right:'10.5%', color:'#3CB371'}}>Ask Question</h4>
                 <PollIcon style={{position:'relative', top:'-151px', right:'-7%', color:'#3CB371'}}/>
                 <h4 style={{position:'relative', top:'-199px', right:'-13%', color:'#3CB371'}}>Poll</h4>
                 <EventNoteIcon style={{position:'relative', top:'-242px', right:'-22%', color:'#3CB371'}}/>
                 <h4 style={{position:'relative', top:'-291px', right:'-30%', color:'#3CB371'}}>Event</h4> 
               </div>
               <TextField 
               id="filled-size-normal" 
               defaultValue="What's on your mind?"
               variant="filled" 
               InputProps={{ classes }}
               style={{position:'relative', top:'-268px', width:'96%'}}
              />
              <LocationOnIcon style={{position:'relative', top:'-308px', left:'38%', color:'#F5F5F5'}}/>
              <InsertPhotoIcon  style={{position:'relative', top:'-308px', left:'40%', color:'#F5F5F5'}}/>
             </Card>
             <Modal
               open={open}
               onClose={handleClose}
               aria-labelledby="simple-modal-title"
               aria-describedby="simple-modal-description"
               style={{ margin: '100px 8px 0 470px' }}>
              <ModalCard  parentCallback = {handleClose}/>
             </Modal> 
            </>
  );
}
export default PostCard;