import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router'


function UsersIndex (props) {

  return (
  <div>
    <div className="full-width">
    <h1>Users <Link className='btn btn-default' to="/users/new">Add a user</Link> </h1>
      {props.users.map(user => <Link to={`/users/${user.id}`}>
        <div className="menu-square">
          <div className="list" key={user.id}>{user.name}</div>
        </div>
        </Link>)}
    {props.children}
    </div>
    <div className="full-width space-top">

    </div>
  </div>)
};


function mapStateToProps(state){
  return {
    users: state.users
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(UsersIndex);
