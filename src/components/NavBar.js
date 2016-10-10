import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux'

var styles = {
  brand: {
    // color: 'pink',
    // backgroundColor: 'orange'
  }

}


class NavBar extends React.Component{

  constructor(props){
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut(event){
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  render(){
    if (this.props.logged_in) {

      return (
        <nav className='navbar navbar-default navbar-static-top' style={styles.brand}>
          <div className='navbar-header'>
            <a className='navbar-brand brand' href={this.props.url}>{this.props.title}</a>
            <Link className='navbar-brand brand' to="/menus">Menus</Link>
            <Link to="/recipes" className='navbar-brand brand' >Recipes</Link>
            <Link to="/users" className='navbar-brand brand' >User</Link>
            <Link to="/ingredients" className='navbar-brand brand' >Ingredients</Link>
            <Link to="/logout" className='navbar-brand brand' >Log Out</Link>
          </div>
        </nav>
      )
    } else {
      return (
        <nav className='navbar navbar-default navbar-static-top' style={styles.brand}>
          <div className='navbar-header'>
            <a className='navbar-brand brand' href={this.props.url}>{this.props.title}</a>
            <Link className='navbar-brand brand' to="/menus">Menus</Link>
            <Link to="/recipes" className='navbar-brand brand' >Recipes</Link>
            <Link to="/ingredients" className='navbar-brand brand' >Ingredients</Link>
            <Link to="/login" className='navbar-brand brand' >Log In</Link>
            <Link to="/signup" className='navbar-brand brand' >Sign Up</Link>
          </div>
        </nav>
      )
    }
  }
}

NavBar.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {logged_in: sessionStorage.jwt};
}

export default connect(mapStateToProps)(NavBar);
