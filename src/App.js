import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Dialogs from "./Components/Dialogs/Dialogs";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar state={props.state.navBarPage}/>
                <div className='app-wrapper-content'>
                    <Route render={()=> <Profile state={props.state.profilePage}/>} path='/profile'/>
                    <Route render={()=> <Dialogs state={props.state.dialogsPage}/>} path='/dialogs'/>
                    <Route render={()=> <Music/>} path='/news'/>
                    <Route render={()=> <News/>} path='/music'/>
                    <Route render={()=> <Settings/>} path='/settings'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
