import React from 'react'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



export class RecipeEdit extends React.Component {
  constructor(props){
    super(props)
    this.updateRecipeHandler = this.updateRecipeHandler.bind(this)
  }

  updateRecipeHandler(event){
    event.preventDefault()
    let ingredients = this.props.ingredients
    let checkedRecipes = ingredients.filter((ingredient) => this.refs[ingredient.id].checked )
    let idRecipes = checkedRecipes.map((ingredient) => (ingredient.id))
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

  makeRecipes() {
  let ingredients = this.props.ingredients
  return ingredients.map((ingredient) => <div ref={`div${ingredient.id}`}> <label>{ingredient.name}</label><input type='checkbox' ref={`${ingredient.id}`}/> </div>)
  }

  render(){
    return (
      <div className='row'>
        <h1>Create a New Recipe</h1>
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
        <form onSubmit={this.newRecipeHandler}>
          <input ref='id' type='hidden' value={this.props.params.id}/>
          <input ref='name' placeholder="name" />
          <input ref='cuisine_type' placeholder="cuisine"/>
          <input ref='difficulty_level' placeholder="difficulty_level"/>
          <input ref='cooking_time' placeholder="cooking_time"/>
          <input ref='instructions' placeholder="instructions"/>
          <input ref='description' placeholder="description"/><br/><br/>
          <label/>Course:<br/>
          <input ref='main' type="radio" name="course" value="main"/>Main
          <input ref='appetizer' type="radio" name="course" value="appetizer"/>Appetizer
          <input ref='dessert' type="radio" name="course" value="dessert"/>Dessert<br/>
          <label>Select Ingredients:</label><br/>
          {this.makeIngredients()}
          <input type="submit" value="create new recipe"/>
        </form>
      </div>
      )

  }
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
