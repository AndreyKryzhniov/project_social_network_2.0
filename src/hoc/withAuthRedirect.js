import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToPropsRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export let withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props} />
        }
    }
    return compose(connect(mapStateToPropsRedirect))(RedirectComponent)
}

