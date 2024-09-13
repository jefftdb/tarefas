import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import { EditTodoForm } from './EditTodoForm'

export const TodoWrapper = () => {
  const [todos,setTodos] = useState([])
  const addTodo = todo =>{
    setTodos([...todos,{id: uuidv4(),task:todo, completed:false, isEditing:false}])
  }
  const toggleComplite = id =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo,completed: !todo.completed}: todo))
  }

  const deleteTodo = id =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const editTodo = id =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo,isEditing: !todo.isEditing}: todo))
  }
  const editTask = (task ,id) =>{
    setTodos(todos.map(todo => todo.id === id? {...todo,task,isEditing: !todo.isEditing} : todo))
  }
  return (
    <div className='TodoWrapper'>
      <h1>Bora Estudar!</h1>
      <TodoForm  addTodo={addTodo} />

      { todos.map((todo,index) =>(
        todo.isEditing?(
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
        <Todo task={todo} key={index}
        toggleComplite={toggleComplite}
        deleteTodo={deleteTodo}
        editTodo={editTodo} />
      )))}
    </div>
  )


}
