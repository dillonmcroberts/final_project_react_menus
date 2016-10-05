import React from 'react';
import { Link } from 'react-router';

var styles = {
  brand: {
    // color: 'pink',
    // backgroundColor: 'orange'
  }

}


export default function NavBar(props){
  return (
    <nav className='navbar navbar-default navbar-static-top' style={styles.brand}>
      <div className='navbar-header'>
        <a className='navbar-brand brand' href={props.url}>{props.title}</a>
        <Link className='navbar-brand brand' to="/menus">Menus</Link>
        <Link to="/recipes" className='navbar-brand brand' >Recipes</Link>
        <Link to="/users" className='navbar-brand brand' >Users</Link>
        <Link to="/ingredients" className='navbar-brand brand' >Ingredients</Link>

      </div>
    </nav>
  )
}
