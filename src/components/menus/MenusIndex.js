import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'


function MenusIndex (props) {

  return(
    <div>

      <Link to='/menus/new'> Add a new menu</Link>
      <ul>
        {props.menus.map(menu => <Link to={`/menus/${menu.id}`}><li key={menu.id}>{menu.name}</li></Link>)}
      </ul>
      {props.children}
    </div>
  )
}

function mapStateToProps(state){
  return {
    menus: state.menus,
    ingredients: state.ingredients
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(MenusIndex)
