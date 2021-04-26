import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
    borderColor:'#3CB371',
    color:'#3CB371'
  },
}));

 const FilterFeedItem = () => {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'News' },
    { key: 1, label: 'Dite' },
    { key: 2, label: 'Lifestyle' },
    { key: 3, label: 'Symptoms' },
    { key: 4, label: 'Treatment' },
  ]);

//   const handleDelete = (chipToDelete) => () => {
//     setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
//   };

  return (
    <div className={classes.root} style={{position:'relative', top:'-610px', right:'-1.5%'}} >
      {chipData.map((data) => {
        // let icon;

        // if (data.label === 'React') {
        //   icon = <TagFacesIcon />;
        // }

        return (
          <li key={data.key}>
            <Chip
            //   icon={icon}
            variant="outlined"
              label={data.label}
            //   onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
      </div>
  
  );
}
export default FilterFeedItem;