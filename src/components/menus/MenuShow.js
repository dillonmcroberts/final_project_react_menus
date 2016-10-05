import React from 'react';
import {connect} from 'react-redux';
import MenuCreate from './MenuCreate'


class MenuShow extends React.Component {
  constructor(){
    super();
    // this.appetizers = this.appetizers.bind(this)
    // this.mains = this.mains.bind(this)
    // this.dessert = this.dessert.bind(this)

  }


//   appetizers(){
//    debugger
// {   this.props.menu.recipes.filter(recipe => recipe.course == 'appetizer').map(recipe => <li>{recipe.name}</li>)
// }  }
  // mains(){
  //  this.props.menu.recipes.filter(recipe => recipe.course == 'main').map(recipe => <li>{recipe.name}</li>)
  // }
  // dessert(){
  //  this.props.menu.recipes.filter(recipe => recipe.course == 'dessert').map(recipe => <li>{recipe.name}</li>)
  //
  // }
  render(){
  return(
    <div className='center text-center'>
      <div className='left-padding'>
      <h2>{this.props.menu.name}</h2>
      <h5 className='uppercase'> {this.props.menu.occasion} </h5>
      <h6 className='uppercase'> {this.props.menu.description}</h6>
      <h4>Appetizers</h4>
      <ul>
        <li>Deviled Eggs</li>
      </ul>
      <h4>Mains</h4>
        <ul>
          <li>Jambalaya</li>
        </ul>
      <h4>Desserts</h4>
        <ul>
          <li>Beignets</li>
      </ul>
    </div>
  </div>
  )
}
}

function mapStateToProps(state, ownProps){

  if (state.menus.length > 0){
    const menu = state.menus.find((menu) => {
      return menu.id == ownProps.params.id
    })
    return {menu: menu}
  } else {
    return {menu: [{name: '', occasion: '', description: '', recipes: [{name: ''}]}]}
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(MenuShow);
