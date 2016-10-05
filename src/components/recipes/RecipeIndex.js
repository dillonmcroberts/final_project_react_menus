import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router'
function RecipesIndex (props) {

  return (
  <div>
    <div className="full-width">
    <h1>Recipes <Link className='btn btn-default' to="/recipes/new">Add a recipe</Link> </h1>
      {props.recipes.map(recipe => <Link to={`/recipes/${recipe.id}`}>
        <div className="menu-square">
          <div className="list" key={recipe.id}>{recipe.name}</div>
        </div>
        </Link>)}
    {props.children}
    </div>
    <div className="full-width space-top">

    </div>
  </div>)
};


function mapStateToProps(state){
  return {
    recipes: state.recipes
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(RecipesIndex);
