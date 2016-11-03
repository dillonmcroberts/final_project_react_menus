import React from 'react'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



class RecipeEdit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.recipe.name
    }
    this.updateRecipeHandler = this.updateRecipeHandler.bind(this)
  }

  updateRecipeHandler(event){
    event.preventDefault()
    let ingredients = this.props.ingredients
    let checkedIngredients = ingredients.filter((ingredient) => this.refs[ingredient.id].checked )
    let idIngredients = checkedIngredients.map((ingredient) => (ingredient.id))
    let courses = [this.refs.appetizer, this.refs.main, this.refs.dessert]

    const recipe = {
      id: this.props.params.id,
      name: this.refs.name.value,
      cuisine_type: this.refs.cuisine_type.value,
      cooking_time: this.refs.cooking_time.value,
      instructions: this.refs.instructions.value,
      description: this.refs.description.value,
      difficulty_level: this.refs.difficulty_level.value,
      course: courses.filter(course => course.checked)[0].value,
      ingredient_ids: idIngredients
    }
    this.props.actions.updateRecipe(recipe)
}


  makeIngredients() {
  let ingredients = this.props.ingredients
  return ingredients.map((ingredient) => <div ref={`div${ingredient.id}`}> <label>{ingredient.name}</label><input type='checkbox' ref={`${ingredient.id}`}/> </div>)
  }

  render(){
    return (
      <div>
        <h1>Edit this Recipe</h1>
        <form onSubmit={this.updateRecipeHandler}>
          <input ref='id' type='hidden' value={this.props.params.id}/>
          <label>Name: </label>
          <input ref='name' defaultValue={this.state.name}  /><br/>
          <label>Cuisine: </label>
          <input ref='cuisine_type' defaultValue={this.props.recipe.cuisine_type}/><br/>
          <label>Difficultly: </label>
          <input ref='difficulty_level' defaultValue={this.props.recipe.difficulty_level}/><br/>
          <label>Cooking Time: </label>
          <input ref='cooking_time' defaultValue={this.props.recipe.cooking_time}/><br/>
          <label>Instructions: </label>
          <input ref='instructions' defaultValue={this.props.recipe.instructions}/><br/>
          <label>Description: </label>
          <input ref='description' defaultValue={this.props.recipe.description}/><br/>
          <label>Course: </label><br/>
          <input ref='appetizer' type="radio" name="course" value="appetizer"/>Appetizer
          <input ref='main' type="radio" name="course" value="main"/>Main
          <input ref='dessert' type="radio" name="course" value="dessert"/>Dessert<br/>
          <label>Select Ingredients:</label><br/>
          {this.makeIngredients()}
          <input type="submit" value="Create Recipe"/>
        </form>
      </div>
      )}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state, ownProps) {
  if (state.recipes.length > 0 && state.ingredients.length > 0){
    const recipe = state.recipes.find((recipe) => {
      return recipe.id == ownProps.params.id
    })
    return {recipe: recipe, ingredients: state.ingredients}
  }
  else {
    return {ingredients: [{name: ''}]}
  }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(RecipeEdit)
