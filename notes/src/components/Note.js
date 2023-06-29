import {MdDeleteForever} from 'react-icons/md';


const Note = () => {
    return (
        <div className="note">
            <span>Hello! This is the first ever note created here!! 🎉</span>
            <div className="note-footer">
                <small>29/06/2023</small>
                <MdDeleteForever className="delete-icon" size='1.5em'/>
            </div>
        </div>
    )
}

export default Note;
