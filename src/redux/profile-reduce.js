const ADD_POST = 'ADD-POST';
const UP_DATE_NEW_POST_TEXT = 'UP-DATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: '1', message: 'Hi!', likesCount: '20'},
        {id: '2', message: 'How are you?', likesCount: '2'}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: '3', message: state.newPostText, likesCount: '0'}]
        }
        case UP_DATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.body
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (body) => ({type: UP_DATE_NEW_POST_TEXT, body})

export default profileReducer