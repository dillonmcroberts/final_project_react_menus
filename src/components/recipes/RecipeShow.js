import React from 'react'
import {connect} from 'react-redux';


function RecipeShow (props) {
    return (
  <div>
    <h1>
    {props.recipe.name}
    </h1>
    <li> {props.recipe.cuisine}</li>
    <li> Level of Difficultly (1-5): {props.recipe.level_of_difficulty}</li>
    <li> {props.recipe.cuisine}</li>
    <li> {props.recipe.cooking_time}</li>
    <h3> Ingredients </h3>
    {props.recipe.ingredients.map(ingredient => {
      return <li>{ingredient.name}</li>
    })}
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
