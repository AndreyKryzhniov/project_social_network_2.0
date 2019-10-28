let state = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi!', likesCount: '20'},
            {id: '2', message: 'How are you?', likesCount: '2'},
        ],
    },
    dialogsPage: {
        dialogs: [
            {name: 'Andrey', id: '1'},
            {name: 'Dima', id: '2'},
            {name: 'Alina', id: '3'},
            {name: 'Olia', id: '4'},
            {name: 'Pasha', id: '5'},
        ],
        messages: [
            {message: 'Hi!'},
            {message: 'How are you?'},
            {message: 'Am fine'},
            {message: 'And you?'}
        ]
    },
    navBarPage: {
        sidebar: [
            {url: '/profile', name: 'Profile'},
            {url: '/dialogs', name: 'Dialogs'},
            {url: '/news', name: 'News'},
            {url: '/music', name: 'Music'},
            {url: '/settings', name: 'Settings'}
        ]
    }
}

export default state