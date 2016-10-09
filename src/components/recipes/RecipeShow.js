import React from 'react';
import {connect} from 'react-redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'

class RecipeShow extends React.Component {
  constructor(){
    super();

  }
    render(){
    return (
  <div className='center text-center left-padding'>
    <h2 className='uppercase'>
    {this.props.recipe.name}
  </h2>
    <ul>
      <li> {this.props.recipe.cuisine}</li>
      <li>Difficultly: {this.props.recipe.difficulty_level}</li>
      <li>Cuisine: {this.props.recipe.cuisine_type}</li>
      <li>Prep & Cook Time: {this.props.recipe.cooking_time}</li>
    </ul>
    <h3> Ingredients </h3>
    <ul>
    {this.props.recipe.ingredients.map(ingredient => {
      return <li>{ingredient.name}</li>
    })}
  </ul>
  <h3> Instructions </h3>
  <p>{this.props.recipe.instructions}</p>
    <Link to={`/recipes/${this.props.recipe.id}/edit`}>Edit this Recipe</Link>
  </div>
    )
}
}

function mapStateToProps(state, ownProps) {
  if (state.recipes.length > 0) {
    const recipe = state.recipes.find((recipe) => {return recipe.id == ownProps.params.id})
    return {recipe: recipe}
  } else {
    return {recipe: {name: 'default', cuisine: 'default', level_of_difficulty : '1', cooking_time: ') minutes', ingredients: ["none"]}}
  }

}

const componentCreator = connect(mapStateToProps)
export default componentCreator(RecipeShow);
