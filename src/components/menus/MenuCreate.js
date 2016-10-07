import React from 'react'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class MenuNew extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      recipeIds: []
    }
    this.newMenuHandler = this.newMenuHandler.bind(this)
    this.handleAddRecipe = this.handleAddRecipe.bind(this)
    this.handleRemoveRecipe = this.handleRemoveRecipe.bind(this)
  }
//presentational stuff goes in render
  newMenuHandler(event){
    event.preventDefault()

    const newMenu = {
      name: this.refs.name.value,
      occasion: this.refs.occasion.value,
      description: this.refs.description.value,
      recipe_ids: this.state.recipeIds
    }
    this.props.actions.addMenu(newMenu)
  }

  handleAddRecipe(event){
    event.preventDefault()
    const newRecipeIdsArray = this.state.recipeIds.slice();
    newRecipeIdsArray.push(parseInt(event.target.id))

    this.setState({
      recipeIds: newRecipeIdsArray
    })
  }

  handleRemoveRecipe(event){
    event.preventDefault()
    const newRecipeIdsArray = this.state.recipeIds.slice();
    newRecipeIdsArray.pop(parseInt(event.target.id))

    this.setState({
      recipeIds: newRecipeIdsArray
    })
  }

  makeUnselectedRecipes() {
  let recipes = this.props.recipes
  const notSelRecipes = recipes.filter(recipe => !this.state.recipeIds.includes(recipe.id))
console.log(this.state.recipeIds)
  return notSelRecipes.map((recipe) => <div id={recipe.id} draggable="true" onDragEnd={this.handleAddRecipe}> <p ref={`${recipe.id}`}>{recipe.name}</p> </div>)
}

makeSelectedRecipes(){
  //look at all recipes
  //find ones where recipe is included in recipe id
  //want declarative more than imperative
  let recipes = this.props.recipes
  const selRecipes = recipes.filter(recipe => this.state.recipeIds.includes(recipe.id))
  return selRecipes.map((recipe) => <div id={recipe.id} draggable="true" onDragEnd={this.handleRemoveRecipe}> <p ref={`${recipe.id}`}>{recipe.name}</p> </div>)
}
  render(){
    return (
      <div className="full-width">
        <h1>Create a Menu</h1>
        <form onSubmit={this.newMenuHandler}>
          <input ref='name' placeholder="name"/><br/>
          <input ref='occasion' placeholder="occasion"/><br/>
          <input ref='description' placeholder="description"/><br/>
          <div className="selected-recipes">
            <h3 className="text-center">Selected Recipes</h3>
            <div className="left-recipe-padding">
              {this.state.selectedRecipes}
              {this.makeSelectedRecipes()}
            </div>
          </div>
          <input className='btn' type='submit' />
          <div className="all-recipes">
            <h3 className="text-center">Recipes</h3>
            <div className="left-recipe-padding">
            {this.makeUnselectedRecipes()}
            </div>
          </div>
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state, ownProps) {
  if (state.recipes.length > 0) {
    return {recipes: state.recipes}
  }
  else {
    return {recipes: [{name: ''}]}
  }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(MenuNew)
