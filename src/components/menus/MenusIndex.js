import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

function MenusIndex (props) {
  return(
    <div>
    <div className="full-width">
    <h1>Menu</h1>

        {props.menus.map(menu => <Link to={`/menus/${menu.id}`}>
          <div className="menu-square"><div className="list" key={menu.id}>{menu.name}</div>
          </div>
          </Link>)}
      {props.children}
      </div>
      <div className="full-width space-top">
      <Link to="/menus/new">Add a menu</Link>
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return {
    menus: state.menus
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(MenusIndex)
