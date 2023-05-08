import React , { useState , useRef, useEffect }from 'react';
import TodoList from './components/TodoList';
import Header from './components/Header';
import { DarkModeProvider } from './components/DarkModeContext';
import styles from './components/Header.module.css';
const filters = ['all' , 'active', 'completed'];

export default function App() {
  const [todo , setTodo ] = useState("");
  const [filter , setFilter ] = useState(filters[0]);
  const [isDarkMode , setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
      setIsDarkMode((prev) => !prev);
  };


  return (
    <div>
        <DarkModeProvider>         
        <Header filter={filter} filters={filters} onFilterChange={setFilter}/> 
        <TodoList filter={filter} />
        </DarkModeProvider>

    </div>
  );
}
