import React, {useState, useEffect} from 'react';
import p from '../../Profile.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(true)
    let [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status)}, [props.status])

    let activateEditMode = () => {
        setEditMode(false)
    }

    let deactivateEditMode = () => {
        setEditMode(true)
        props.updateStatusThunkAC(status)
    }

    let onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }



    return (
        <div className={p.statusBlock} onClick={activateEditMode}>
            {editMode
                ? <span>{status}</span>
                :
                <input onBlur={deactivateEditMode} onChange={onChangeStatus} value={status} autoFocus={true}/>
            }
        </div>
    );

}

export default ProfileStatusWithHooks;
