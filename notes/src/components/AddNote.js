import { useState } from "react";

const AddNote = ({handleAddNote}) => {

    const [noteText, setNoteText] = useState('');
    const characterLimit = 400;

    const handleClick = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
        
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return (
        <div className="note new">
            <textarea 
                rows="10" 
                cols="12" 
                placeholder="Type here to add note....."
                value={noteText}
                onChange={handleClick}
            >
            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;
