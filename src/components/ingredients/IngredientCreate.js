import React from 'react'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class IngredientNew extends React.Component {
  constructor(props){
    super(props)
    this.newIngredientHandler = this.newIngredientHandler.bind(this)



  }

  newIngredientHandler(event){
    event.preventDefault()
    const newIngredient = {
      name: this.refs.name.value,
      price_level: this.refs.price_level.value,
      availability: this.refs.availability.value}
    this.props.actions.addIngredient(newIngredient)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.newIngredientHandler}>
          <label>name:</label>
          <input ref='name' /><br/>
          <label>price level:</label>
          <input ref='price_level' /><br/>
          <label>availability:</label>
          <input ref='availability' /><br/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(IngredientNew)
