import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PollIcon from '@material-ui/icons/Poll';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CloseIcon from '@material-ui/icons/Close';


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
// let getData = localStorage.getItem('feed');
// console.log(getData)
const useStyle = makeStyles((theme) => ({
  root1: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(2),
    margin: '-210px 213px -20px -25px',
    // postion:'relative',
    // right: '-12rem'
  },
  chip: {
    margin: theme.spacing(1),
    borderColor:'#3CB371',
    color:'#3CB371'
  },
}));
const AddFeedItem = []
 const ModalCard = (props) =>  {
  const classes = useStyles();
  const classe = useStyle();
  const [desc, setDesc] = React.useState("");
  // const bull = <span className={classes.bullet}>•</span>;
  // const [select, setSelect] = React.useState(true)
  const [news, setNews] = React.useState(true)
  const [dite, setDite] = React.useState(true)
  const [lifestyle, setLifestyle] = React.useState(true)
  const [symptoms, setSymptoms] = React.useState(true)
  const [treatment, setTreatment] = React.useState(true)
  // const [hd, setHd] = React.useState([{
    //   data: {
    //    name:'Satyendra',
    //    refName:'PATIENT FRIEDN',
    //    image:''
    //     },
    //     description: desc,
    //     img:'https://kettocdn.gumlet.io/media/campaign/60000/60580/image/5b3e32b66785d.jpeg?w=200&dpr=2.6',
    //     tag:AddFeedItem
    //  }])
  // const [feedData, setFeedData] = React.useState([
  //   { key: 0, label: 'News' },
  //   { key: 1, label: 'Dite' },
  //   { key: 2, label: 'Lifestyle' },
  //   { key: 3, label: 'Symptoms' },
  //   { key: 4, label: 'Treatment' },
  // ]);

 
  
   const handleEventChange = event => {
   
    setDesc(event.target.value);
    console.log(event.target.value)
  };

   let handleChangeNews = () => {
     if(news === true){
       setNews(false)
       AddFeedItem.push("News")
     }else{
      setNews(true)
     }
   }
   let handleChangeDite = () => {
    if(dite === true){
      setDite(false)
      AddFeedItem.push("Dite")
    }else{
     setDite(true)
    }
    

   }
   let handleChangeLifestyle = () => {
    if(lifestyle === true){
      setLifestyle(false)
      AddFeedItem.push("Lifestyle")
    }else{
     setLifestyle(true)
    }
  
   }
   let handleChangeSymptoms = () => {
    if(symptoms === true){
      setSymptoms(false)
      AddFeedItem.push("Symptoms")
    }else{
     setSymptoms(true)
    }

   }
   let handleChangeTreatment = () => {
    
    if(treatment === true){
      setTreatment(false)
      AddFeedItem.push("Treatment")
    }else{
     setTreatment(true)
    }
 

   }
 

    
    //  console.log(JSON.parse(JSON.stringify(hd)))
   let formSubmit = event =>{
      console.log(event);
      // this.setState({disable:false});


      props.parentCallback();


       let gpr = [{
      data: {
       name:'Satyendra',
       refName:'PATIENT FRIEDN',
       image:''
        },
        description: desc,
        img:'https://kettocdn.gumlet.io/media/campaign/60000/60580/image/5b3e32b66785d.jpeg?w=200&dpr=2.6',
        tag:AddFeedItem
     }]
    // //  console.log(hd)
    //  setHd([...hd, gpr])
      localStorage.setItem('feed',JSON.stringify(gpr));
      // setHd(JSON.stringify(hd))
     


    }

    // console.log(AddFeedItem )


  let close = () => {
    props.parentCallback();
  }
 

  const handleDelete = (chipToDelete) => () => {
    setNews((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };



  return (
    <Card className={classes.root} variant="outlined" style={{width:'85%', height:'98%'}}>
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
               value = {desc}
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
               <div className={classe.root1}>
          <>
          { news === true ? (
          <li>
            <Chip 
              variant="outlined"
              label="News"
              onClick={handleChangeNews}
              className={classe.chip}
              style={{postion:'relative', top:'-22%'}}
               />
          </li>) :
          (<li>
             <Chip  onClick={handleChangeNews}  
             label="News" 
             className={classe.chip} 
             onDelete={handleDelete} 
             style={{postion:'relative', top:'-22%', backgroundColor:'#3CB371', color:'white'}}
             />

          </li>)
          }
           { dite === true ? (
          <li>
            <Chip 
              variant="outlined"
              label= "Dite"
              onClick={handleChangeDite}
              className={classe.chip}
              style={{postion:'relative', top:'-22%'}}
               />
          </li>) :
          (<li>
             <Chip onClick={handleChangeDite} 
              label="Dite" 
              className={classe.chip} 
              onDelete={handleDelete} 
              style={{postion:'relative', top:'-22%' , backgroundColor:'#3CB371', color:'white'}}
              />

          </li>)
          }
           { lifestyle === true ? (
          <li>
            <Chip 
              variant="outlined"
              label="Lifestyle"
              onClick={handleChangeLifestyle}
              className={classe.chip}
              style={{postion:'relative', top:'-22%'}}
               />
          </li>) :
          (<li>
             <Chip onClick={handleChangeLifestyle} 
              label="Lifestyle" className={classe.chip}
               onDelete={handleDelete}
               style={{postion:'relative', top:'-22%', backgroundColor:'#3CB371', color:'white'}}
                />

          </li>)
          }
           { symptoms === true ? (
          <li>
            <Chip 
              variant="outlined"
              label="Symptoms"
              onClick={handleChangeSymptoms}
              className={classe.chip}
              style={{postion:'relative', top:'-22%'}}
               />
          </li>) :
          (<li>
             <Chip  label="Symptoms"
             onClick={handleChangeSymptoms}
              className={classe.chip}
               onDelete={handleDelete} 
               style={{postion:'relative', top:'-22%',backgroundColor:'#3CB371', color:'white'}}
               />

          </li>)
          }
           { treatment === true ? (
          <li>
            <Chip 
              variant="outlined"
              label="Treatment"
              onClick={handleChangeTreatment}
              className={classe.chip}
              style={{postion:'relative', top:'-22%'}}
               />
          </li>) :
          (<li>
             <Chip onClick={handleChangeTreatment}  
             label="Treatment" className={classe.chip}
              onDelete={handleDelete}
              style={{postion:'relative', top:'-22%', backgroundColor:'#3CB371', color:'white'}}
            />

          </li>)
          } 
          </>
 </div>
               <Divider variant="middle" style={{
                  position:'relative',
                   right:'4%',
                   top:'25px',
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
                   top:'40px',
                   width:'25%',
                   backgroundColor:'#3CB371',
                   color:'white'}}>
                   POST
                  </Button>
           </div>
           </form>
               
      </CardContent>
    </Card>
  );
}
export default ModalCard