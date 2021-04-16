import { Button, makeStyles, Dialog } from '@material-ui/core';
import React, { useState } from 'react';
import AccordionRecipe from './AccordionRecipe';



export default function DeleteButton() {
  const [open, setOpen] = useState(false);
  const [del, setDelete] = useState(false);
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");



  function deleteRecipe(id) {
    const updatedRecipes = [...recipes].filter((recipe) => recipe.id !== id)

    setRecipes(updatedRecipes);
  }
  function deleteIngredients(id) {
    const updatedIngredients = [...recipes].filter((ingredient) => ingredient.id !== id)

    setIngredients(updatedIngredients);
  }

return (
  <div>
    <Button  type= "submit"  variant="contained" color="secondary" onClick={()=> deleteIngredients(ingredient.id)}>
            Delete
    </Button>
    {recipes.map((recipe) => <div key={recipe.id}>
          <div>{recipe.text}</div>
          <Button onClick={()=> deleteRecipe(AccordionRecipe.id)}>Delete</Button>
        
        </div>)}
        {ingredients.map((ingredient) => <div key={ingredient.id}>
          <div><li>{ingredient.text}</li></div>
        <Button onClick={()=> deleteIngredients(ingredient.id)}>Delete</Button>
        </div>)} 
    </div>
  );
}