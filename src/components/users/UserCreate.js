import React from 'react'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class UserCreate extends React.Component {
  debugger;
  constructor(props) {
    super(props)
    this.newUserHandler = this.newUserHandler.bind(this)
  }

  newUserHandler(event) {
    event.preventDefault()

    const newUser = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      location: this.refs.location.value,
      fav_foods: this.refs.fav_foods.value,
    }
    this.props.actions.addUser(newUser)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.newUserHandler}>
            <input className="form-control" ref='name' placeholder="name" /><br/>
            <input  className="form-control" ref='email' placeholder="email"/><br/>
            <input  className="form-control" type='password'ref='password' placeholder="password"/><br/>
            <input  className="form-control" ref='location' placeholder="location"/><br/>
            <input  className="form-control" ref='fav_foods' placeholder="fav_foods"/><br/>
            <input className='btn btn-default' type="submit" value="Create a New Account"/>
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps) //allows components to connect to store
export default componentCreator(UserCreate); //access to store through props
