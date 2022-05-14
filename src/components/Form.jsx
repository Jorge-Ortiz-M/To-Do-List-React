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
        <div className='form-user'>
            <h2>Do you need to add something to your list?</h2>
            <div>  
                <input placeholder='Ruby on Rails' name='title' type="text" onChange={updateNote} value={title} />
                <button type='submit' onClick={() => {
                    props.saveToList(note);
                    setNote({title: '', description:''})
                }} >Add</button> <br /> 
                <textarea placeholder='Some description...' name='description' type="text" onChange={updateNote} value={description} />
            </div>
        </div>
    );
}

export default Form;
