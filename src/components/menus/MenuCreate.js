import React from 'react'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class MenuNew extends React.Component {

  constructor(props){
    super(props)
    this.newMenuHandler = this.newMenuHandler.bind(this)
  }

  newMenuHandler(event){
    event.preventDefault()
    let recipes = this.props.recipes
    let checkedRecipes = recipes.filter((recipe) => this.refs[recipe.id].checked )
    let idRecipes = checkedRecipes.map((recipe) => (recipe.id))

    const newMenu = {
      name: this.refs.name.value,
      occasion: this.refs.occasion.value,
      description: this.refs.description.value,
      recipe_ids: idRecipes
    }
    this.props.actions.addMenu(newMenu)
  }

  makeRecipes() {
  let recipes = this.props.recipes
  return recipes.map((recipe) => <div ref={`div${recipe.id}`}> <label>{recipe.name}</label><input type='checkbox' ref={`${recipe.id}`}/> </div>)
}

  render(){
    return (
      <div>
        <form onSubmit={this.newMenuHandler}>
          <label>name:</label>
          <input ref='name' /><br/>
          <label>occasion:</label>
          <input ref='occasion' /><br/>
          <label>description:</label>
          <input ref='description' /><br/>
          {this.makeRecipes()}
          <input type='submit' />
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
