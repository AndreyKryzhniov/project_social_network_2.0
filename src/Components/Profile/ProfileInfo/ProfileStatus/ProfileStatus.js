import React from 'react';
import p from '../../Profile.module.css'

class ProfileStatus extends React.Component {

    state = {
        status: this.props.status,
        editMode: true
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    onEditMode = () => {
        if (!this.state.editMode) {
            this.setState({
                editMode: !this.state.editMode
            })
            this.props.updateStatusThunkAC(this.state.status)
        }
        this.setState({
            editMode: !this.state.editMode
        })
    }

    changeText = (e) => {
        this.setState(
            {status: e.currentTarget.value}
        )
    }



    render() {
        return (
            <div onClick={this.onEditMode} className={p.statusBlock}>
                {this.state.editMode
                        ? <span>{this.state.status}</span>
                        : <input value={this.state.status} onChange={this.changeText} onBlur={this.onEditMode} autoFocus={true}/>
                }
            </div>
        );
    }
}

export default ProfileStatus;
