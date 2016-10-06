import React from 'react'
// import {connect} from 'react-redux';
import {Link} from 'react-router'
import MenusIndex from './menus/MenusIndex'
var styles = {
  customJumbotron: {
    backgroundColor: 'rgba(238,283,283,0.5)'
  }
}

export default (props) => {
  return(
    <div>
    <div className="jumbotron" style={styles.customJumbotron}>
     <h1>Chef Silvana</h1>
     <p>I make decorative chocolate cakes for Dominique Ansel</p>
     <p><a className="btn btn-primary btn-lg">Learn more</a></p>
    </div>
    <div className='row'>
      <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
          Featured Menu
          <ul><li>Dinner With Friends</li></ul>

      </div>

      <div className='col-xs-6 col-md-6 col-lg-6 col-xl-6'>
          Featured Recipes
          <ul><li>Deviled Eggs</li><li>Peach Cobbler</li></ul>
      </div>
      {props.children}
    </div>
  </div>
  )
}
