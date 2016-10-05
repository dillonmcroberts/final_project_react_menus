import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'


function IngredientsIndex (props) {
  debugger;

  return(
    <div>

      <Link to='/ingredients/new'> Add a new ingredient</Link>
      <ul>
        {props.ingredients.map(ingredient => <Link to={`/ingredients/${ingredient.id}`}><li key={ingredient.id}>{ingredient.name}</li></Link>)}
      </ul>
    </div>
  )
}

function mapStateToProps(state){
  return {
    ingredients: state.ingredients
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(IngredientsIndex)
