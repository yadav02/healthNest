import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 512,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
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
  },
  // avatar: {
  
  // },
}));
// const options = [
//   'Delete'
// ];
const ITEM_HEIGHT = 48;
const AddFeedItems = () => {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  const [updated, setUpdated] = React.useState([]);
  let storage = localStorage.getItem('search');
  let storag = localStorage.getItem('chipData');
    console.log(storag);
    console.log(storage);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    // var getData = localStorage.getItem('feed')

    //  var changeData = JSON.parse(getData) 
    //  console.log(changeData) 
  
    const handleDelete = (e) => {
      // setAnchorEl(null);
      let deleteItem = e.target.getAttribute('data-key')
      console.log(deleteItem)
      // getData((chips) => chips.filter((chip) => chip.key !== e.key));
      let deleteData = changeData.filter(item => item.data.refName !== deleteItem)
      console.log(deleteData)
      localStorage.setItem('feed', JSON.stringify(deleteData))
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    // var getData = localStorage.getItem('feed')

    //  var changeData = JSON.parse(getData) 
    //  console.log(changeData)      

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  //  localStorage.setItem('feed',JSON.stringify( [{
  //   data: {
  //    name:'Satyendra',
  //    refName:'PATIENT FRIEDN',
  //    image:''
  //     },
  //     description: 'Desc',
  //     img:'https://kettocdn.gumlet.io/media/campaign/60000/60580/image/5b3e32b66785d.jpeg?w=200&dpr=2.6',
  //     tag:'News'
  //  }]))
  var changeData=[],getData=[];
  
  setInterval(function(){ getData = localStorage.getItem('feed')

  changeData = JSON.parse(getData)
  setUpdated(changeData) }, 1000);
  return (
    // console.log('hello')
    // <h1>Hello</h1>
    <>
    {updated != null || updated != undefined ? updated.map(item => {
      return (
        // console.log(item.img)
        <Card className={classes.root} style={{margin:'-600px 0 0 502px'}}>
        <h5 style={{position:'relative', left:'-35%', color:'#D3D3D3'}}>TEST TOPIC - {item.tag}</h5>
        <CardHeader
          //  {<h4>{Search}</h4>}
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton 
               aria-label="settings"
              //  aria-label="more"
               aria-controls="long-menu"
               aria-haspopup="true"
               onClick={handleClick}
               >
              <MoreVertIcon />
            </IconButton>
             
          }
        />
        <Menu
             id="long-menu"
             anchorEl={anchorEl}
             keepMounted
             open={open}
             onClose={handleClose}
             PaperProps={{
               style: {
                 maxHeight: ITEM_HEIGHT * 4.5,
                 width: '20ch',
               },
             }}
           >
           
               <MenuItem  datakey={item.refName} onClick={handleClose}>
                 <h4 data-key={item.data.refName} key= '1' onClick={handleDelete}>Delete</h4 >
               </MenuItem>
           </Menu>
        <h4 style={{position:'relative', top:'-80px', left:'-28%'}}>{item.data.name}</h4>
        <h4 style={{position:'relative', top:'-98px', left:'-23%', color:'#3CB371'}}>{item.data.refName} </h4>
        <h4 style={{position:'relative', top:'-98px', left:'-43%', color:'#D3D3D3'}}>{item.description} </h4>
        <CardMedia
          className={classes.media}
          image={item.img}
          title="Paella dish"
          style={{position:'relative', top:'-95px', right:'-13px', width:'95%'}}
        />
      
      </Card>
      )
}) : null }

   
    </>
  );
}
 
export default AddFeedItems;