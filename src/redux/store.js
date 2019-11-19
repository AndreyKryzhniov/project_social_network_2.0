import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reduce";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi!', likesCount: '20'},
                {id: '2', message: 'How are you?', likesCount: '2'}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: '0', name: 'Andrey'},
                {id: '1', name: 'Dima'},
                {id: '2', name: 'Alina'},
                {id: '3', name: 'Olia'},
                {id: '4', name: 'Pasha'}
            ],
            messages: [
                {id: '0', message: 'Hi!'},
                {id: '1', message: 'How are you?'},
                {id: '2', message: 'Am fine'},
                {id: '3', message: 'And you?'}
            ],
            newMessage: ''
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
    },
    _callSubscriber() {
        console.log('ssss')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navBarPage = sidebarReducer(this._state.navBarPage, action)
        this._callSubscriber()
    }
}


export default store