
function Note(props){

    const { title, description } = props.note;

    return(
        <div className="note-user">
            <div className="note-header">
                <p className="title">
                    <strong>Title:</strong> {title} <br />
                </p>
                <button type="submit" onClick={() => {
                    props.deleteNote(props.id);
                    }}>
                        Delete.</button>
            </div>
            <div>
                <p className="description">
                    <strong>Description:</strong> {description}
                </p>
            </div>
        </div>
            
    );
}

export default Note;
