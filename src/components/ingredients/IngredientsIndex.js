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

  ingredients.forEach(ingredient => {
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
      <div className="full-width">
        <h1>Ingredients <Link className='btn btn-default' to="/ingredients/new">Add an Ingredient</Link> </h1>
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
