import React from 'react';
import {connect} from 'react-redux';
import MenuCreate from './MenuCreate'
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'


class MenuShow extends React.Component {
  constructor(){
    super();
    this.appetizers = this.appetizers.bind(this)
    this.mains = this.mains.bind(this)
    this.dessert = this.dessert.bind(this)

  }


appetizers(){

return this.props.menu.recipes.filter(recipe => recipe.course == 'appetizer').map(recipe => <li>{recipe.name}</li>)

}
  mains(){
   return this.props.menu.recipes.filter(recipe => recipe.course == 'main').map(recipe => <li>{recipe.name}</li>)
  }
  dessert(){
   return this.props.menu.recipes.filter(recipe => recipe.course == 'dessert').map(recipe => <li>{recipe.name}</li>)

  }
  render(){
  return(
    <div className='center text-center'>
      <div className='left-padding'>
      <h2>{this.props.menu.name}</h2>
      <h5 className='uppercase'> {this.props.menu.occasion} </h5>
      <h6 className='uppercase'> {this.props.menu.description}</h6>
      <h4>Appetizers</h4>
      <ul>

        {this.appetizers()}
      </ul>
      <h4>Mains</h4>
        <ul>

          {this.mains()}
        </ul>
      <h4>Desserts</h4>
        <ul>

          {this.dessert()}
      </ul>
    </div>
  </div>
  )
}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}
function mapStateToProps(state, ownProps){
console.log('mapStateToProps',state, ownProps);
  if (state.menus.length > 0){
    const menu = state.menus.find((menu) => {
      return menu.id == ownProps.params.id
    })
    return {menu: menu}
  } else {
    return {menu: [{name: '', occasion: '', description: '', recipes: [{name: ''}]}]}
  }
}

const componentCreator = connect(mapStateToProps,mapDispatchToProps)
export default componentCreator(MenuShow);
