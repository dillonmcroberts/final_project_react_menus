import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'


class IngredientsIndex extends React.Component{
  constructor(props) {
    super(props)

    this.state = {term: ''}
    this.searchBoxInput = this.searchBoxInput.bind(this)
  }

  makeIngredients() {
  let ingredients = this.props.ingredients
  let filteredIngredients = []

  let alphaSortIngredients = ingredients.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
  alphaSortIngredients.forEach(ingredient => {
    if (ingredient.name.toLowerCase().includes(this.state.term.toLowerCase()))
    {
      filteredIngredients.push(ingredient)
    }
  })

    return filteredIngredients.map(ingredient => <Link to={`/ingredients/${ingredient.id}`}>
      <h3 key={ingredient.id}>{ingredient.name}</h3>

      </Link>)
  }




  searchBoxInput(event){
    this.setState({ term: event.target.value });
  }

    render(){
    return(
      <div>
        <Link to='/ingredients/new'> Add a new ingredient</Link><br/>
        <input value={this.state.term} placeholder="Search Ingredients" onChange={this.searchBoxInput}/>
        {this.makeIngredients()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    ingredients: state.ingredients
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(IngredientsIndex)
