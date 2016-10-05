import React from 'react'
import {connect} from 'react-redux';


function RecipeShow (props) {
    return (
  <div className='center text-center left-padding'>
    <h2 className='uppercase'>
    {props.recipe.name}
  </h2>
    <ul>
      <li> {props.recipe.cuisine}</li>
      <li>Difficultly: {props.recipe.difficulty_level}</li>
      <li>Cuisine: {props.recipe.cuisine_type}</li>
      <li>Prep & Cook Time: {props.recipe.cooking_time}</li>
    </ul>
    <h3> Ingredients </h3>
    <ul>
    {props.recipe.ingredients.map(ingredient => {
      return <li>{ingredient.name}</li>
    })}
  </ul>
  <h3> Instructions </h3>
  <p>{props.recipe.instructions}</p>
  </div>
    )
}

function mapStateToProps(state, ownProps) {
  debugger
  if (state.recipes.length > 0) {
    const recipe = state.recipes.find((recipe) => {return recipe.id == ownProps.params.id})
    return {recipe: recipe}
  } else {
    return {recipe: {name: 'default', cuisine: 'default', level_of_difficulty : '1', cooking_time: ') minutes', ingredients: ["none"]}}
  }

}

const componentCreator = connect(mapStateToProps)
export default componentCreator(RecipeShow);
