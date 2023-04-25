import React, { useState, useEffect } from 'react';
import ListItem from './ListItem'

export default function List() {

  const [todos, setTodos] = useState([]);



const pegaTarefas = async() => {
  await fetch("http://localhost:3002/tarefas")
          .then(response => response.json())
          .then(json => setTodos(json))
}

useEffect( () => {
  pegaTarefas();
},[]);


  return (
    <div>
      {todos.map((todo) => (
        <ListItem todo={todo}/>
      ))}
    </div>
  )
}
