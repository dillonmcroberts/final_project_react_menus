import React from 'react';
import {browserHistory} from 'react-router';
import * as actions from '../../actions/index'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

class Logout extends React.Component {
    constructor(props){
      super(props)
      this.state = {logged_in: true}
    }
    componentDidMount() {
      this.props.actions.logOutUser();
        setInterval( () => browserHistory.push('/'), 1000);
    }

    render() {
        return (
            <p>You have been logged out, you will be redirected shortly to login...</p>
        );
    }
}

Logout.contextTypes = {
    router: React.PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state, ownProps) {
  return {logged_in: sessionStorage.jwt};
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)

export default componentCreator(Logout);
