import React from "react";

function TodoList({todos}) {
  return (
    <>
      <h2>ToDo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
