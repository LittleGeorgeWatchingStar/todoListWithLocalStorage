import React, { useContext, useState,useEffect } from 'react'

export const TodoContext = React.createContext();

// customed hook
export const useTodoContext = () => useContext(TodoContext)


// to start with these data
// const mockupChecklist = [
//     {title:"test1",isDone:true,isFav:false},
//     {title:"test2",isDone:false,isFav:false},
//     {title:"test3",isDone:true,isFav:true},
// ]

export const TodoController = ({children}) => {
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")))
    const [taskInput, setTaskInput] = useState("")
    const [hideComplete, setHideComplete] = useState(false)
    const [editingIndex, setEditingIndex] = useState(-1)
    const [totalTodo, setTotalTodo] = useState()
    const [totalFavorite, setTotalFavorite] = useState()
    const [totalDone, setTotalDone] = useState()

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
        setTotalTodo(todoList.length)
        setTotalFavorite(todoList.filter(m=>m.isFav).length)
        setTotalDone(todoList.filter(m=>m.isDone).length)
    }, [todoList, hideComplete])
    
    const onSave = () => {
        if (!taskInput) return;
        if(editingIndex === -1){
            setTodoList([
                ...todoList,
                {
                title: taskInput, isDone: false, isFav:false
                }
            ])
        }
        else{
            let tmp = todoList
            tmp[editingIndex] = {
                ...tmp[editingIndex],
                title: taskInput
            }
            setTodoList([...tmp])
            setEditingIndex(-1)
        }
        setTaskInput("")
    }

    const onHideComplete = () => {
        setHideComplete(!hideComplete);
    }

    const getData = () => {
        if (hideComplete) {
            let filtered = todoList;
            filtered = todoList.filter(x =>
                x.isDone === false
              );
              return filtered;
        } else {
            return todoList;
        }
    }
    
    const onDelete = (item) => {
        setTodoList([
            ...todoList.filter(m=>m !==item)
        ])
    }

    const onEdit = (item) =>{
        setTaskInput(item.title)
        const findEditingIndex = todoList.findIndex(m=>m === item)
        setEditingIndex(findEditingIndex)
    }

    const onClickFavorite = (item) => {
        const findEditingIndex = todoList.findIndex(m=>m === item)
        let tmp = todoList
        tmp[findEditingIndex] = {
            ...tmp[findEditingIndex],
            isFav: !tmp[findEditingIndex].isFav
        }
        setTodoList([...tmp])
    }

    const onClickDone = (item) => {
        const findEditingIndex = todoList.findIndex(m=>m === item)
        let tmp = todoList
        tmp[findEditingIndex] = {
            ...tmp[findEditingIndex],
            isDone: !tmp[findEditingIndex].isDone
        }
        setTodoList([...tmp])
    }

    return (
        <TodoContext.Provider value={{ 
            taskInput, setTaskInput,
            todoList,setTodoList,
            hideComplete, setHideComplete, getData,
            onSave,onHideComplete,onDelete,onEdit,onClickFavorite,onClickDone,
            totalDone,totalFavorite,totalTodo
         }}>
             { children }
        </TodoContext.Provider>
    )
}


