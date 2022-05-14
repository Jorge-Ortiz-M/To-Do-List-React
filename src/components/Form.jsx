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

    function submitButton(e){
        e.preventDefault();
        props.saveToList(note);
        setNote({title: '', description:''})
    }

    return (
        <div className='form-user'>
            <h2>Do you need to add something to your list?</h2>
            <form>  
                <input placeholder='Ruby on Rails' name='title' type="text" onChange={updateNote} value={title} />
                <button type='submit' onClick={submitButton} >Add</button> <br /> 
                <textarea placeholder='Some description...' name='description' type="text" onChange={updateNote} value={description} />
            </form>
        </div>
    );
}

export default Form;
