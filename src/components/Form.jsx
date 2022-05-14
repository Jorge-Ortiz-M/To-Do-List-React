import {useState} from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Zoom from '@mui/material/Zoom';

function Form(props){

    const [note, setNote] = useState({title: '', description: ''});
    const {title, description} = note;

    function updateNote(e){
        const {name, value} = e.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function submitButton(e){
        e.preventDefault();
        props.saveToList(note);
        setNote({title: '', description:''})
    }

    const [status, setStatus] = useState(false)

    function appearForm(){
        setStatus(true);
    }

    return (
        <div className='form-user'>
            <h2>Do you need to add something to your list?</h2>
            <form>
                <Zoom in={status}>
                    <div>
                        <input placeholder='Ruby on Rails' name='title' type="text" onChange={updateNote} value={title} />
                        <button type='submit' onClick={submitButton} >
                            <AddCircleIcon fontSize="small" className="add-icon" />
                        </button> <br /> 
                    </div>
                </Zoom>
                <textarea onClick={appearForm} placeholder='Some description...' name='description' type="text" onChange={updateNote} value={description} rows={status ? 5 : 1}/>
            </form>
        </div>
    );
}

export default Form;
