import Note from "./Note";

function List(props){

    function deleteNote(id){
        let answer = window.confirm("Are you sure you want to delete this Note?");
        answer ? props.deleteNoteFromList(id) : console.log(false);
    }        
    
    return (
        <div className="list-section">
            {
                props.notes.map((note, index) => {
                    return (
                        <Note id={index} key={index} note={note} deleteNote={deleteNote} />
                    );
                })
            }
        </div>
    );
}

export default List;
