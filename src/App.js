
import './App.css';
import './Components/firebaseConfig';
// import TestDatabase from './Components/TestDataBase';
// import { Button } from '@material-ui/core';
import AddRecipe from './Components/AddRecipe';
import AccordionRecipe from './Components/AccordionRecipe';
import DeleteButton  from './Components/DeleteButton';
import data from './Components/data.json';
import React, {useState} from 'react';



const App = () => {
  const [recipeData, setRecipeData] = useState(data);
  const addRecipeData = (newRecipe) => {
    setRecipeData([...recipeData, newRecipe])
  }
  const [recipeIngredients, setRecipeIngredients] = useState(data);
  const addIngredients = (newIngredients) => {
    setRecipeIngredients([...recipeIngredients,newIngredients])
  }



  return (
    <div className="App">
        <h1 className="title-recipe">
        Supergirl's Recipe Box is here!
        </h1>
        <AccordionRecipe recipeData={recipeData} recipeIngredients={recipeIngredients}/>
         
        <AddRecipe recipeData={recipeData}/>
        
        
        {/* <Form /> */}
        {/* <DeleteButton recipeData={recipeData} recipeIngredients={recipeIngredients}/> */}
        {/* <AddRecipe addRecipeBtn={addRecipeBtn} onSubmit={onSubmit}/> */}
        {/* <TestDatabase /> */}
    </div>
  );
}

export default App;

// return maps through an accordion using recipe.array.map - Accordion
//sending a new object with its nested values - Add
// adding a new object/function we dont need an Id but we need the id in the Edit function - use concat
// to render we need to update the array
//to add  a  previous state to a new state and update the array
//when it updates and pushes it 2 action (async)
//use a callback or ... 
