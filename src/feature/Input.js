import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { useTodoContext } from './TodoController';


export default function Input() {

    const { taskInput, setTaskInput, onSave} = useTodoContext()
    
    return (
        <Grid container justifyContent="flex-start" style={{ marginTop: 20, marginLeft:15 }}>
            <TextField 
            label="Type to add new tasks" style={{ marginRight:5 }}  
            onChange={(e)=>setTaskInput(e.target.value)}
            value={taskInput}
            />
            <Button onClick={onSave} variant="contained" >Add</Button>
        </Grid>
    )
}
