import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunkAC} from "../../redux/auth-reduce";
import {compose} from "redux";

class HeaderComponent extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default compose(
    connect(mapStateToProps, {logoutThunkAC})
)
(HeaderComponent);
