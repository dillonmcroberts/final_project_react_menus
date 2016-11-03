import React from 'react'
// import {connect} from 'react-redux';
import {Link} from 'react-router'
import MenusIndex from './menus/MenusIndex'
import SimpleSlider from './SimpleSlider'

var styles = {
  customJumbotron: {
    backgroundColor: 'rgba(238,283,283,0.5)',
    boxShadow: '10px 10px 5px grey'
  }
}

export default (props) => {
  return(
    <div>
    <div className="jumbotron" style={styles.customJumbotron}>
      <SimpleSlider/>

    </div>
      {props.children}
    </div>

  )
}
