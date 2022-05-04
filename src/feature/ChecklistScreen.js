import React from 'react';
import Checklist from './Checklist';
import Input from './Input';
import { TodoController } from './TodoController';
import Summary from './Summary';
import Header from './Header';


function ChecklistScreen() {
    return (
        <TodoController>
            <div>
                <Header />
                <Input />
                <Checklist />
                <Summary />
            </div>
        </TodoController>
        
    )
}

export default ChecklistScreen
