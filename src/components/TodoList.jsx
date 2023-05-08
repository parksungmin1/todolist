import React , { useState , useRef, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';
import { MdUpdateDisabled } from 'react-icons/md';
import styles from './TodoList.module.css';

export default function TodoList({ filter , isDarkMode }) {

    const [todos , setTodos ] = useState(() => readTodosFromLocalStorage());
    const number = useRef(0);
    
    const onAdd = (text) => {
        setTodos((todos) => [...todos, { id: uuidv4(), text:text}]);}  
    
    const onUpdate = (updated) => {
        setTodos(todos.map((todo) => todo.id === updated.id ? updated : todo));
    }

    const onDelete = (deleted) => {
        const newTodoList = todos.filter((it) => it.id !== deleted.id);
        setTodos(newTodoList);
    }

    const clearTodo = () => {
        setTodos([]);
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const filtered = getFilterFunction(todos, filter);

    return (
        <section className={styles.container}>
            <button className={styles.clearAllbutton} onClick={clearTodo}>전체삭제</button>    
            <ul className={styles.list}>
            { filtered.map((item, index) => (   
            <TodoItem key={item.id}
                      todo={item}
                      onUpdate={onUpdate}
                      onDelete={onDelete}
                />          
            ))}     
            </ul>
            <AddTodo onAdd={onAdd} />
        </section>
    );
}

function getFilterFunction(todos, filter){
    if(filter === 'all')
    {
        return todos;
    }
    return todos.filter(todo => todo.status === filter );
}

function readTodosFromLocalStorage(){
    const todos = localStorage.getItem('todos');
    return todos? JSON.parse(todos) : [];
}