import React, {useState, useEffect} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../Images/not_foto.jfif";
import ProfileDataFormReduxForm from "./ProfileContacts/ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatusThunkAC, isOwner, savePhoto, saveProfileTC}) => {

    let [editMode, setEditMode] = useState(false)
    // useEffect(() => {
    //     setEditMode(false)
    // }, [])


    if (!profile) {
        return <Preloader/>
    }

    let onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfileTC(formData).then(
            () => {
                setEditMode(false)
            }
        );
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div><img className={s.avatar} src={profile.photos.large || userPhoto}/></div>
                <div>{isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}</div>
                {
                    editMode ?
                        <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                        <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner}/>
                }
                <ProfileStatusWithHooks status={status} updateStatusThunkAC={updateStatusThunkAC}/>
            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {

    return <div>
        {isOwner &&
        <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>
        }
        <div><b>Full name:</b> {profile.fullName}</div>
        <div><b>Looking fo a job:</b> {profile.lookingForAJob ? 'YES' : 'NO'}</div>
        {profile.lookingForAJob &&
        <div><b>My professional skills:</b>{profile.lookingForAJobDescription}</div>
        }
        <div><b>About me:</b>{profile.aboutMe}</div>
        <div><b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div>
        {contactValue &&
        <div className={s.contacts}><b>{contactTitle}:</b>{contactValue}</div>
        }
    </div>
    // return <div className={s.contacts}><b>{contactTitle}:</b>{contactValue}</div>
}

export default ProfileInfo;
