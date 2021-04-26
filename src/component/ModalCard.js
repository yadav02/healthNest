import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import TagFacesIcon from '@material-ui/icons/TagFaces';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PollIcon from '@material-ui/icons/Poll';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CloseIcon from '@material-ui/icons/Close';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 175,
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
const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(2),
    margin: '-250px 213px -20px -25px',
    // postion:'relative',
    // right: '-12rem'
  },
  chip: {
    margin: theme.spacing(1),
    borderColor:'#3CB371',
    color:'#3CB371'
  },
}));

 const ModalCard = (props) =>  {
  const classes = useStyles();
  const classe = useStyle();
  const [search, setSearch] = React.useState("");
  // const bull = <span className={classes.bullet}>•</span>;
  
   const handleEventChange = event => {

    setSearch(event.target.value);
    console.log(event.target.value)
  };
   let formSubmit = event =>{
      console.log(event);
      // this.setState({disable:false});
      props.parentCallback();
      localStorage.setItem('search',JSON.stringify(search));
      localStorage.setItem('chipData',JSON.stringify(chipData));
    
  }
  let close = () => {
    props.parentCallback();
  }
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'News' },
    { key: 1, label: 'Dite' },
    { key: 2, label: 'Lifestyle' },
    { key: 3, label: 'Symptoms' },
    { key: 4, label: 'Treatment' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };



  return (
    <Card className={classes.root} variant="outlined" style={{width:'65%', height:'98%'}}>
      <CardContent>
        <CloseIcon  onClick={close} style={{ position:'relative', right:'-94%'}}/>
          

      {/* <Divider  variant="middle" style={{position:'rlstive', top:'-3rem'}}/> */}
      <div style={{}}>
      
                 <EditIcon style={{position:'relative', top:'30px', right:'-2%', color:'#3CB371'}}/>
                 <h4 style={{position:'relative', top:'-18px', right:'-8%', color:'#3CB371',cursor: 'pointer'}}>Post</h4>
                 {/* <Divider  orientation="vertical" style={{color:'black'}} /> */}
                 <HelpOutlineIcon style={{position:'relative', top:'-58px', right:'-22%', color:'#3CB371'}}/>
                 <h4 style={{position:'relative', top:'-108px', right:'-28%', color:'#3CB371'}}>Ask Question</h4>
                 <PollIcon style={{position:'relative', top:'-151px', right:'-56%', color:'#3CB371'}}/>
                 <h4 style={{position:'relative', top:'-199px', right:'-62%', color:'#3CB371'}}>Poll</h4>
                 <EventNoteIcon style={{position:'relative', top:'-242px', right:'-76%', color:'#3CB371'}}/>
                 <h4 style={{position:'relative', top:'-291px', right:'-82%', color:'#3CB371'}}>Event</h4> 
                 {/* <Divider/> */}
               </div>
               <form name="form"  onSubmit= {formSubmit}>
               <TextareaAutosize 
               value = {search}
              onChange={handleEventChange}
               style={{width:'100%',
                       border:'none',
                       position:'relative', 
                       top:'-252px'}} 
                       aria-label="minimum height" 
                       rowsMin={5}
                       placeholder="What's on your mind?" />
                       {/* </form> */}
                 <LocationOnIcon style={{position:'relative', top:'-198px', left:'86%', color:'#A9A9A9'}}/>
                 <InsertPhotoIcon  style={{position:'relative', top:'-198px', left:'88%', color:'#A9A9A9'}}/>         
             <h4 style={{
               position:'relative', 
               top:'-211px', 
               right:'-2%', 
               color:'#3CB371'
               }}>Add topics that best describe your post</h4>
               <div className={classe.root}>
                {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              // color="#3CB371"
              variant="outlined"
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              className={classe.chip}
              // style={{postion:'relative', top:'-22%'}}
            />
          </li>
        );
      })}
 </div>
               <Divider variant="middle" style={{
                  position:'relative',
                   right:'4%',
                   top:'10px',
                   width:'100%'
                   }}/>
                <div style={{position:'relative', right:'-22%'}}>  
                <Button 
                variant="contained" 
                value="Submit"
                onClick={formSubmit}
                style={{
                  position:'relative',
                   right:'-52%',
                   top:'30px',
                   width:'25%',
                   backgroundColor:'#3CB371',
                   color:'white'}}>
                   POST
                  </Button>
           </div>
           </form>
               
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
export default ModalCard