import React from 'react'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import IngredientCreate from '../ingredients/IngredientCreate'
import MenuCreate from '../menus/MenuCreate'
class RecipeCreate extends React.Component {


  constructor(props) {
    super(props)

    this.state = {term: ''}

    this.onInputChange = this.onInputChange.bind(this)
    this.newRecipeHandler = this.newRecipeHandler.bind(this)
    this.searchBoxInput = this.searchBoxInput.bind(this)

  }

  newRecipeHandler(event) {
    event.preventDefault()
    let ingredients = this.props.ingredients
    let checkedIngredients = ingredients.filter((ingredient) => this.refs[ingredient.id].checked )
    let idIngredients = checkedIngredients.map((ingredient) => (ingredient.id))
    let courses = [this.refs.appetizer, this.refs.main, this.refs.dessert]


    const newRecipe = {
      name: this.refs.name.value,
      cuisine_type: this.refs.cuisine_type.value,
      cooking_time: this.refs.cooking_time.value,
      instructions: this.refs.instructions.value,
      description: this.refs.description.value,
      difficulty_level: this.refs.difficulty_level.value,
      course: courses.filter(course => course.checked)[0].value,
      ingredient_ids: idIngredients
    }
    this.props.actions.addRecipe(newRecipe)
  }

  // filterListByTerm(ingredient) {
  //   ingredient.name.toLowerCase().includes(this.state.term.toLowerCase())
  // }

  makeIngredients() {
  let ingredients = this.props.ingredients
  let filteredIngredients = []

  ingredients.forEach(ingredient => {
    if (ingredient.name.toLowerCase().includes(this.state.term.toLowerCase()))
    {
      filteredIngredients.push(ingredient)
    }
  })

  return filteredIngredients.map((ingredient) => <div ref={`div${ingredient.id}`}> <label>{ingredient.name}</label><input type='checkbox' ref={`${ingredient.id}`}/> </div>)
}



  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  searchBoxInput(event){
    this.onInputChange(event);
  }


  render() {

    return (
      <div className='row'>
        <h1>Create a New Recipe</h1>
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
        <form onSubmit={this.newRecipeHandler}>
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
          <div className='container'>
          <input value={this.state.term} onChange={this.searchBoxInput}/>
          {this.makeIngredients()}
          </div>
          <input type="submit" value="create new recipe"/>
        </form>
      </div>
      <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
        <h4>Add a New Ingredient</h4>
        <IngredientCreate />
        </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state, ownProps) {
  if (state.ingredients.length > 0) {
    return {ingredients: state.ingredients}
  }
  else {
    return {ingredients: [{name: ''}]}
  }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps) //allows components to connect to store
export default componentCreator(RecipeCreate); //access to store through props
