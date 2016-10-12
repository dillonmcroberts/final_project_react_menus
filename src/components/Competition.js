import React from 'react'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class Competition extends React.Component{
  constructor(props){
    super(props)
    this.handleVote = this.handleVote.bind(this)
  }

  handleVote(event){
    event.preventDefault()
    let selectedMenu = this.props.menus.filter(menu => menu.id == event.target.id)[0]
        let recipe_ids = selectedMenu.recipes.map((recipe) => (recipe.id))

    const menu = {
    votes: selectedMenu.votes += 1,
    id: selectedMenu.id,
    name: selectedMenu.name,
    description: selectedMenu.description,
    occasion: selectedMenu.occasion,
    recipe_ids: recipe_ids
  }
  this.props.actions.addMenuVote(menu)
  }

  makeMenus(){
    console.log("I ran")
    return this.props.menus.map(menu => <div>
      <h3 className="titlecase">{menu.name}</h3>
      <h4> Current total votes: {menu.votes}</h4>
      <a id={`${menu.id}`} className="btn" onClick={this.handleVote}>Vote for me</a>
      </div>)
  }

  render(){
    return <div>
    <h1> Competition </h1>
    {this.makeMenus()}
    </div>
  }
}


function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state, ownProps) {
  if (state.menus.length > 0) {
    return {menus: state.menus}
  }
  else {
    return {menus: [{name: ''}]}
  }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(Competition)
