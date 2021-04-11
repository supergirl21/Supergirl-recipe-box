import React, {useState, useEffect} from 'react';
import {Button, Typography, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import data from './data.json';
import DeleteButton from './DeleteButton';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Recipe from './AccordionRecipe';


export default function EditRecipe(recipeData) {
  // console.log(recipeData);
  const [open, setOpen] = useState(false);
  const [del, setDelete] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState(data);


  function handleSubmit(e) {
    e.preventDefault();
    // setRecipe.handleSubmit(recipes);

    const newRecipe = {
        id: new Date().getTime(),
        text: recipe,

    }
    setRecipes([...recipes].concat(newRecipe))
    setRecipe({recipe})

    const newIngredients = {
        id: new Date().getTime(),
        text: ingredient,

    }
    setIngredients([...ingredients].concat(newIngredients))
    setIngredient("")
};

// useEffect(() =>{
//   if (props.id) {
//     someAsyncGetPostById(props.id)
//     .then(recipe => setRecipe(recipe))
//   }
// })
// const handleChange = (panel) => (event, newExpanded) => {
//   setExpanded(newExpanded ? panel : false);
// };
// (e) => setIngredient(e.target.value)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteClick = () => {
    setDelete(false);
  };

//   function deleteRecipe(id) {
//     const updatedRecipes = [...recipes].filter((recipe) => recipe.id !== id)

//     setRecipes(updatedRecipes)
//   }


  return (
    <div onSubmit={handleSubmit}>
        
        <Button style={{
            backgroundColor: "#5aadde",
            marginRight: "16px",
        }}variant="contained" color="primary" onClick={handleClickOpen} >
            Edit
        </Button>
        <Button  type= "submit"  variant="contained" color="secondary" onClick={handleDeleteClick}>
            Delete
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <div className="modal-header">
                    <Button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </Button>
            </div> 
            <form  onSubmit ={handleSubmit} className="modal-body">
                <DialogTitle id="form-dialog-title">Edit Recipe</DialogTitle>
                <DialogContent >
                    <Typography setRecipes= {setRecipes}>Recipe Title</Typography>
                    <TextField 
                        className="form-control" 
                        type="text"
                        margin="dense" 
                        name="title"
                        id="outlined-basic" 
                        label="Type Recipe Title" 
                        onChange= {(e) => setRecipe(e.target.value)}
                        // onChange= {(e) => setRecipe({...recipe, title: e.target.value})}
                        value = {recipe.title}
                        variant="outlined" 
                        fullWidth= 'true'/>
                        
                </DialogContent>
            </form>
            <form  onSubmit ={handleSubmit} className="">
                <DialogContent >
                    <Typography >{setIngredients.ingredients}Ingredients</Typography>
                    <TextField 
                    
                        className="form-control" 
                        type="text"
                        name="content"
                        margin="dense" 
                        id="outlined-basic" 
                        label="Type Ingredients"
                        onChange= {(e) => setIngredient(e.target.value)}
                        // onChange= {(e) => setIngredient({...recipe, ingredient: e.target.value})}
                        value = {recipe.ingredient}
                        variant="outlined" 
                        fullWidth/>
                        
                </DialogContent>
                
                <DialogActions>
                    <Button 
                    variant="outlined" 
                    onClick={handleClose}
                    // value = {recipe.title}
                    >Close</Button>
                    <Button type="submit" variant="contained" color="primary" onClick={handleClose} >Submit</Button>
                    {/* onChange= {(e) => setIngredient(e.target.value)} */}
                </DialogActions>
                
            </form> 
           
        </Dialog>
        
        {recipes.map((recipe) => <div key={recipe.id}>{recipe.text}</div>)}
        {ingredients.map((ingredient) => <div><li>{ingredient.text}</li></div>)} 
        
    </div>
  );
}

