import React from "react";
import axios from "axios";
import EditTodo from "./EditTodo";

function TodoList({todos, fetchTodos}) {
  const deleteTodo = async id => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    fetchTodos();
  };
  return (
    <>
      <h2>ToDo List</h2>
      <ul>
        {todos.map((todo)=>(
          <li key={todo._id}>
            <EditTodo todo={todo} fetchTodos={fetchTodos}/>
            <button onClick={()=> deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
