
import './App.css';
import './Components/firebaseConfig';
// import TestDatabase from './Components/TestDataBase';
// import { Button } from '@material-ui/core';
import AddRecipe from './Components/AddRecipe';
import AccordionRecipe from './Components/AccordionRecipe';
import { DeleteButton } from './Components/DeleteButton';
import data from './Components/data.json';
import React, {useState} from 'react';



const App = () => {
  const [recipeData, setRecipeData] = useState(data);
  const [recipeIngredients, setRecipeIngredients] = useState([]);



  return (
    <div className="App">
        <h1 className="title-recipe">
        Supergirl's Recipe Box is here!
        </h1>
        {/* <ul>
          {recipeData.map((title)=>{
            return (
              <li>
                <AccordionRecipe />
              </li>
            )

          })}
        </ul> */}
        <AccordionRecipe recipeData={recipeData} recipeIngredients={recipeIngredients}/>
        {/* <DefaultRecipe /> */}
        <AddRecipe recipeData={recipeData} />
        
        
        {/* <Form /> */}
        {/* <DeleteButton /> */}
        {/* <AddRecipe addRecipeBtn={addRecipeBtn} onSubmit={onSubmit}/> */}
        {/* <TestDatabase /> */}
    </div>
  );
}

export default App;
