let initialState = {
        sidebar: [
            {url: '/profile', name: 'Profile'},
            {url: '/dialogs', name: 'Dialogs'},
            {url: '/news', name: 'News'},
            {url: '/music', name: 'Music'},
            {url: '/settings', name: 'Settings'},
            {url: '/users', name: 'Friends'}
        ]
}

const sidebarReducer = (state = initialState, action) => {
    return state
}

export default sidebarReducer