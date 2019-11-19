import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
// import Dialogs from "./Components/Dialogs/Dialogs";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";


const App = (props) => {
debugger
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar store={props.store}/>
                <div className='app-wrapper-content'>
                    <Route render={()=> <Profile />} path='/profile'/>
                    <Route render={()=> <DialogsContainer />} path='/dialogs'/>
                    <Route render={()=> <Music/>} path='/news'/>
                    <Route render={()=> <News/>} path='/music'/>
                    <Route render={()=> <Settings/>} path='/settings'/>
                    <Route render={()=> <UsersContainer/>} path='/users'/>
                </div>
            </div>

    );
}

export default App;
