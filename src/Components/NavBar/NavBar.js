import React from 'react';
import n from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={n.nav}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </div>
    );
}

export default NavBar;
