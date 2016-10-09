import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'


function IngredientsIndex (props) {

  return(
    <div>

      <Link to='/ingredients/new'> Add a new ingredient</Link>
      <ul className="ingredients-list">
        {props.ingredients.map(ingredient => <Link to={`/ingredients/${ingredient.id}`}>
          <h3 key={ingredient.id}>{ingredient.name}</h3>
          <li> {ingredient.description}</li>
          <li> Calories per tablespoon: {ingredient.caloriespertbsp}</li>
          </Link>)}
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
