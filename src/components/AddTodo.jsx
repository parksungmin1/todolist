import React , { useState } from 'react';
import styles from './AddTodo.module.css';

export default function AddTodo( { onAdd }) {
    const [todo , setTodo ] = useState("");
    const onChange = (event) => {
        setTodo(event.target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if(todo.trim().length === 0){
            return;
        } 
        console.log(event.target.value);
        onAdd(todo);
        setTodo("");
        
    }

    return (
        <div>
          <form className={styles.form} onSubmit={onSubmit}>
                <input className={styles.input} type="text" value={todo} onChange={onChange} placeholder='할 일을 적으시오'/>
                <button className={styles.button}>Add</button>
         </form>
        </div>
    );
}

