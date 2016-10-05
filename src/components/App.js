import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar  title="Food" url="/" />
          <div className='root container'>
            { this.props.children }
          </div>
      </div>
    );
  }
}
