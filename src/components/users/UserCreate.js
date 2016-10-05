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
    }
    this.props.actions.addUser(newUser)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.newUserHandler}>
          <div className="form-group">
            <input className="form-control" ref='name' placeholder="name" /><br/>
            <input  className="form-control" ref='email' placeholder="email"/><br/>
            <input type='password'ref='password' placeholder="password"/><br/>
          </div>
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
