import {setUserDataThunkAC} from "./auth-reduce";
import {getStatusThunkAC, setUserProfileThunkAC} from "./profile-reduce";

const INITIALIZED_SUCCESS = 'samurai-network/app/INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccessdAC = () => ({type: INITIALIZED_SUCCESS})

export const initializeAppThunk =  () => (dispatch) => {
    let promise = dispatch(setUserDataThunkAC())
    let promiseOne = dispatch(setUserProfileThunkAC())
    let promiseTwo = dispatch(getStatusThunkAC())
    Promise.all([promise, promiseOne, promiseTwo])
        .then(()=> {
            dispatch(initializedSuccessdAC())
        })
}

export default appReducer
