import {useState} from 'react';

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

    return (
        <div className='form-section'>
            <h2>Do you need to add something to your list?</h2>
            <div>  
                <input name='title' type="text" onChange={updateNote} value={title} />
                <input name='description' type="text" onChange={updateNote} value={description} />
                <button type='submit' onClick={() => {
                    props.saveToList(note);
                    setNote({title: '', description:''})
                }} >Add</button>             
            </div>
        </div>
    );
}

export default Form;
