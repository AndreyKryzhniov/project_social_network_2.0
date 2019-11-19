const ADD_MESSAGE = 'ADD-MESSAGE';
const UP_DATE_NEW_MESSAGE_TEXT = 'UP-DATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newMessage: '',
                messages: [...state.messages, {id: '4', message: state.newMessage}]
            }
        case UP_DATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessage: action.body
            }
        }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UP_DATE_NEW_MESSAGE_TEXT, body})

export default dialogsReducer