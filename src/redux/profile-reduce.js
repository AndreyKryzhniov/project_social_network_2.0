const ADD_POST = 'ADD-POST';
const UP_DATE_NEW_POST_TEXT = 'UP-DATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const LOOKING_FOR_A_JOB = 'LOOKING_FOR_A_JOB';

let initialState = {
    posts: [
        {id: '1', message: 'Hi!', likesCount: '20'},
        {id: '2', message: 'How are you?', likesCount: '2'}
    ],
    newPostText: '',
    profile: null,
    lookingForAJob: true
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
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case LOOKING_FOR_A_JOB: {
            return {
                ...state,
                lookingForAJob: action.lookingForAJob
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (body) => ({type: UP_DATE_NEW_POST_TEXT, body})
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const lookingForAJob = (lookingForAJob) => ({type: LOOKING_FOR_A_JOB, lookingForAJob})

export default profileReducer