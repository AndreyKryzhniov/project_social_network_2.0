import React, {Component} from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderComponent from "./Components/Header/HeaderComponent";
import Login from "./Components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeAppThunk} from "./redux/app-reduce";
import {withRouter} from "react-router-dom";
import Preloader from "./Components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

// import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));


class App extends Component {

    componentDidMount() {
        this.props.initializeAppThunk()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderComponent/>
                <NavBar store={this.props.store}/>
                <div className='app-wrapper-content'>
                    <Route render={() => <ProfileContainer/>} path='/profile/:userId?'/>
                    <Route render={withSuspense(DialogsContainer)} path='/dialogs'/>
                    <Route render={() => <Music/>} path='/news'/>
                    <Route render={() => <News/>} path='/music'/>
                    <Route render={() => <Settings/>} path='/settings'/>
                    <Route render={() => <UsersContainer/>} path='/users'/>
                    <Route render={() => <Login/>} patch='/login'/>
                </div>
            </div>

        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeAppThunk})
)
(App);
