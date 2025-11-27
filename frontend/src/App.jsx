import React, {useEffect, useState} from "react";
import axios from "axios";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:5000/api/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
   
    <div style={{padding:"20px"}}>
      <h1>Todo App</h1>
      <AddTodo fetchTodos={fetchTodos}/>
    
      <TodoList todos={todos} fetchTodos={fetchTodos}/>
      </div>
   
  );
}

export default App;
