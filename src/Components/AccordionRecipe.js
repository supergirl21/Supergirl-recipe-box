import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import EditRecipe from './EditRecipe';
import data from './data.json';
import AddRecipe from './AddRecipe';


const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);


export default function AccordionRecipe({recipeData}) {
  // console.log(props);

  const [expanded, setExpanded] = useState(false);
  // const [recipeTitle, setRecipeTitle] = useState(data);
  // const [ingredients, setIngredients] = useState([]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='homecontainer' >
      {recipeData.map(recipeData => {
        return (
          <Accordion style={{
            marginBottom: "20px",
            borderRadius: 5,
        }} square expanded={expanded === 'panel'} onChange={handleChange('panel')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography >{recipeData.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{recipeData.ingredients.map(ingredients => {
                return (
                  <Typography>
                  <ul>
                      <li>{ingredients}</li>
                  </ul>
                  </Typography>
                )
              })}
                <EditRecipe />
                
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  );
}
