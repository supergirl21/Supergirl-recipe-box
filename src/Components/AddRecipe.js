import React, { useEffect, useState } from 'react';
import {Button, Typography, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import Recipe from './AccordionRecipe';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import data from './data.json';
import Form from './Form';
import Modal from '@material-ui/core/Modal';


export default function AddRecipe(recipeData) {
  const [open, setOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState(data);
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState(data);

  useEffect(()=> {
          setRecipe(recipe.title);
          console.log(recipe);
          setIngredient(ingredient);
          console.log(ingredient);
        //   recipeData()
      }, []);
  

  function handleSubmit(e) {
      console.log(e);
    e.preventDefault();

    const newRecipe = {
        id: new Date().getTime(),
        text: recipe,

    }
    setRecipes([...recipes].concat(newRecipe))
    setRecipe("")

    const newIngredients = {
        id: new Date().getTime(),
        text: ingredient,

    }
    setIngredients([...ingredients].concat(newIngredients))
    setIngredient("")
};


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 

  return (
    <div onSubmit={handleSubmit}>
        <Button style={{
        marginTop: "20px",
        marginLeft: "150px",
        marginRight: "150px"
    }} variant="contained" color="primary" onClick={handleClickOpen}>
            Add Recipe
        </Button>
{/* //form */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <div>
                <div className="modal-header">         
                        <Button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </Button>
                </div> 
                <form  onSubmit ={handleSubmit} className="modal-body">
                    <DialogTitle id="form-dialog-title">Add Recipe</DialogTitle>
                    <DialogContent >
                        <Typography >Recipe Title</Typography>
                        <TextField 
                            className="form-control" 
                            type="text"
                            margin="dense" 
                            id="outlined-basic" 
                            label="Type Recipe Title" 
                            onChange= {(e) => setRecipe(e.target.value)}
                            value = {data.title}
                            variant="outlined" 
                            fullWidth= 'true'/>
                    </DialogContent>
                </form>
                
                <form  onSubmit ={handleSubmit} >
                
                    <DialogContent >
                        <Typography >Ingredients</Typography>
                        <TextField 
                            className="form-control" 
                            type="text"
                            margin="dense" 
                            id="outlined-basic" 
                            label="Type Ingredients" 
                            onChange= {(e) => setIngredient(e.target.value)}
                            value = {data.ingredients}
                            variant="outlined" 
                            fullWidth/>
                    </DialogContent>
                    
                    <DialogActions>
                        <Button variant="outlined" onClick={handleClose}>Close</Button>
                        <Button type="submit" variant="contained" color="primary" onClick={handleClose}>Submit</Button>
                    
                    </DialogActions>
                </form>
            </div>
        </Dialog>
        {recipes.map((recipe) => <div key={recipe.id}>{recipe.text}</div>)}
        {ingredients.map((ingredient) => <div>{ingredient.text}</div>)}
        {/* <Recipe /> */}
    </div>
  );
}

