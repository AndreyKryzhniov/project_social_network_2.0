const ADD_MESSAGE = 'samurai-network/dialogs/ADD-MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: '4', message: action.newMessageBody}]
            }
        default:
            return state
    }
}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})

export default dialogsReducer