import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo,remove,deleteTodo } from "../actions";

import TextField from '@mui/material/TextField';
function NoteInput() {
    const dispatch=useDispatch();
    const handleTextInputChange = (e,y) => {
        if(e.code==="Enter"){
        console.log(e.target.value);
        dispatch(addTodo(e.target.value));
        e.target.value="";
        }
    };
    return (
            <TextField fullWidth id="filled-basic" label="Add a note" variant="filled" onKeyPress={handleTextInputChange} />
    )
}

export default NoteInput
