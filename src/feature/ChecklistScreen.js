import React from 'react'
import { withController } from '../hoc/withController';
import Checklist from './Checklist';
import Input from './Input';
import { TodoController } from './TodoController';
import Summary from './Summary';
import Header from './header';


function ChecklistScreen() {
    return (
        <div>
            <Header />
            <Input />
            <Checklist />
            <Summary />
        </div>
    )
}

export default withController(TodoController)(ChecklistScreen)
