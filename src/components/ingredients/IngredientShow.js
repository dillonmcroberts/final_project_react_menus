import React from 'react';
import {connect} from 'react-redux';

function IngredientShow(props){
  return(
    <div>
      <h3>{props.ingredient.name}</h3>
      <h3>{props.ingredient.price_level}</h3>
      <h3>{props.ingredient.availability}</h3>
    </div>
  )
}

function mapStateToProps(state, ownProps){
  if (state.ingredients.length > 0){
    const ingredient = state.ingredients.find((ingredient) => {
      return ingredient.id == ownProps.params.id
    })
    return {ingredient: ingredient}
  } else {
    return {ingredient: {name: '', price_level: '', availability: ''}}
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(IngredientShow);
