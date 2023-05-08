import React , { useState } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from 'react-icons/md';
import {FiTrash2} from 'react-icons/fi';
import {FaTrashAlt} from 'react-icons/fa';
import styles from './TodoItem.module.css';

export default function TodoItem({  todo  , onUpdate ,onDelete }) {
    const { id , text , status } = todo;
    const [isChecked , setIsChecked ] = useState(false);

    const onCheck = (id) => {
      if(todo.id === id){
          setIsChecked((prev) => !prev);
      }
  }
  
    const handleCheck = (e) => {
        const status = e.target.checked? 'completed' : 'active';
        onUpdate({...todo , status});
    }

    return (
    <div>
        <ul>
          <div>
            <li className={styles.todo} key={id}>
              <input 
                className={styles.checkbox}
                type="checkbox" 
                id={id}
                checked={status === 'completed'}
                onChange={handleCheck} />
              <label htmlFor={id} className={styles.text}>{text}</label>
           <span className={styles.icon}>
             <button className={styles.button} onClick={() => onDelete(todo)}><FaTrashAlt/></button>
           </span>
            </li>
          </div>
        </ul>
    </div>
  );
}
