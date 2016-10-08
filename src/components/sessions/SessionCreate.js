import React from 'react'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SessionCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {credentials: {email: '', password: ''}}

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event){
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials})
  }

  onSave(event){
    event.preventDefault();
    this.props.actions.loginUser(this.state.credentials)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <input
            className="form-control"
            ref='email'
            name='email'
            defaultValue={this.state.credentials.email} onChange={this.onChange}/><br/>
            <input
            name='password'
            type='password'
            ref='password'
            defaultValue={this.state.credentials.password}
            onChange={this.onChange}/><br/>
          </div>
          <input className='btn btn-default' type="submit" value="Log In"/>
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps) //allows components to connect to store
export default componentCreator(SessionCreate); //access to store through props
