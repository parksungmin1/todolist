import React, { useState } from 'react';
import TodoList from './TodoList';

export default function SearchBar( {todos} ) {
    const [searchItem , setSearchItem ] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
    }

    const onChange = (event) => {
        setSearchItem(event.target.value);
    }

    return (
        <div>
            <input 
                type="text" 
                value={searchItem``} 
                placeholder='무엇을 찾으시나요?'
                onChange={onChange}
            />
            <button onSubmit={onSubmit}>찾기</button>
            {
                todos.filter((item) => {
                    if(searchItem == "") return item;
                    else if(item.toLowerCase().includes(searchItem.toLowerCase())){
                        return item
                    }
                })
            }
        </div>
    );
}

