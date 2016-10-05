import React from 'react';
import {connect} from 'react-redux';
import MenuCreate from './MenuCreate'

function MenuShow(props){
  return(
    <div>
      <h2>{props.menu.name}</h2>
      <h4>{props.menu.occasion}</h4>
      <p>{props.menu.description}</p>

      <h4>Recipes</h4>
    </div>
  )
}

function mapStateToProps(state, ownProps){
  if (state.menus.length > 0){
    const menu = state.menus.find((menu) => {
      return menu.id == ownProps.params.id
    })
    return {menu: menu}
  } else {
    return {menu: {name: '', occasion: '', description: '', ingredients: [{name: ''}]}}
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(MenuShow);
