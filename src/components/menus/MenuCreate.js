import React from 'react'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RecipeCreate from '../recipes/RecipeCreate'

class MenuNew extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      recipeIds: [],
      message: 'Add some recipes!'
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
      creator_id: sessionStorage.currentUserId,
      recipe_ids: this.state.recipeIds
    }
    this.props.actions.addMenu(newMenu)
  }

  handleAddRecipe(event){
    event.preventDefault()
    event.target.className = ""
    const newRecipeIdsArray = this.state.recipeIds.slice();
    newRecipeIdsArray.push(parseInt(event.target.id))
    this.setState({
      recipeIds: newRecipeIdsArray,
      message: ""
    })
  }

  handleRemoveRecipe(event){
    event.preventDefault()
    event.target.className = ""
    const newRecipeIdsArray = this.state.recipeIds.slice();
    newRecipeIdsArray.pop(parseInt(event.target.id))
    this.setState({
      recipeIds: newRecipeIdsArray,
    })
  }

  handleDragStart(event){
    event.target.className = "drag-me"
    // event.target.style.border = "2px dashed white"
    // event.target.paddingRight = "4%"
  }

makeUnselectedRecipes() {
  let recipes = this.props.recipes
  const notSelRecipes = recipes.filter(recipe => !this.state.recipeIds.includes(recipe.id))
  return notSelRecipes.map((recipe) => <div id={recipe.id} draggable="true" onDragStart={this.handleDragStart} onDragEnd={this.handleAddRecipe}> <p ref={`${recipe.id}`}>{recipe.name}</p> </div>)
}

makeSelectedRecipes(){
  //look at all recipes
  //find ones where recipe is included in recipe id
  //want declarative more than imperative
  let recipes = this.props.recipes
  const selRecipes = recipes.filter(recipe => this.state.recipeIds.includes(recipe.id))
  return selRecipes.map((recipe) => <div id={recipe.id} draggable="true" onDragStart={this.handleDragStart} onDragEnd={this.handleRemoveRecipe}> <p ref={`${recipe.id}`}>{recipe.name}</p> </div>)
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
              <h4 className="text-center uppercase">
              {this.state.message}
              </h4>
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
