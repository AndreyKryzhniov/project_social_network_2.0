import React from 'react';
import {addMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        addMessageAction: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;
