import React from 'react'
import { useTodoContext } from './TodoController'
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel, FormGroup } from '@material-ui/core';


export default function Header() {
    const {onHideComplete} = useTodoContext()
    return (
        <div className="header">
            <h1>Todo List</h1>
            <FormGroup>
                <FormControlLabel control={<Checkbox onClick={onHideComplete}/>} label="Hide Completed Tasks" />
            </FormGroup>
        </div>
    )
}
