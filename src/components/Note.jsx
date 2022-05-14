
function Note(props){

    const { title, description } = props.note;

    return(
        <div className="note-user">
            <p>
                <strong>Title:</strong> {title} <br />
                <strong>Description:</strong> {description}
            </p>
            <div>
                <button type="submit" onClick={() => {
                    props.deleteNote(props.id);
                    }}>
                        Delete.</button>
            </div>
        </div>
            
    );
}

export default Note;
