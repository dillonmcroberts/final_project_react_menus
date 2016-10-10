import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

function MenusIndex (props) {
  return(
    <div>
    <div className="full-width">
    <h1 className='appName'>Menus <Link className='btn-default btn'to="/menus/new">Add a menu</Link></h1>

        {props.menus.map(menu => <Link to={`/menus/${menu.id}`}>
          <div className="menu-square"><div className="list appName" key={menu.id}>{menu.name}</div>
          </div>
          </Link>)}
      {props.children}
      </div>
      <div className="full-width space-top">

      </div>
    </div>
  )
}

function mapStateToProps(state){
  if (state.menus.length > 0) {
    return {menus: state.menus}
  } else {
    return {menus: []}
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(MenusIndex)
