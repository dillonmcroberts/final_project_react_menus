import React from 'react'
import {connect} from 'react-redux';


function UserShow (props) {
  debugger
    return (
  <div className="col-lg-5 col-md-5 col-sm-5">
    <div className="panel-body">
      <div className="thumbnail">

                <h1>
                {props.user.name}
                </h1>
      </div>
    </div>
  </div>
    )
}

function mapStateToProps(state, ownProps) {

  if (state.users.length > 0) {
    const user = state.users.find((user) => {return user.id == ownProps.params.id})
    return {user: user}
  } else {
    return {user: {}}
  }

}

const componentCreator = connect(mapStateToProps)
export default componentCreator(UserShow);
