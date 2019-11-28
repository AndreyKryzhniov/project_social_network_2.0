import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reduce";
import {AuthAPI} from '../../api/api'


class HeaderComponent extends React.Component {

    componentDidMount() {
        AuthAPI.getAuth(this.props.setUserData).then(data => {
                if (data.resultCode === 0) {
                    let {email, id, login} = data.data
                    this.props.setUserData(email, id, login)
                }
            })
    }


    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth.isFetching,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderComponent);
