import React from 'react';
import {connect} from 'react-redux';

function MenuShow(props){
  return(
    <div>
      <h3>{props.menu.name}</h3>
      <h3>{props.menu.occasion}</h3>
      <h3>{props.menu.description}</h3>

      <h4>Ingredients</h4>
      {props.menu.ingredients.map(ingredient => {
        return <li>{ingredient.name}</li>
      })}
    </div>
  )
}

function mapStateToProps(state, ownProps){
  if (state.menus.length > 0){
    const menu = state.menus.find((menu) => {
      return menu.id === ownProps.params.id
    })
    return {menu: menu}
  } else {
    return {menu: {name: '', occasion: '', description: '', ingredients: [{name: ''}]}}
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(MenuShow);
