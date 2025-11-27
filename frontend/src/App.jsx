import React, {useEffect, useState} from "react";
import axios from "axios";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/todos");
        setTodos(res.data);
      } catch (error) {
        console.log("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  // We still need fetchTodos for child components:
  const fetchTodosForChildren = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/todos");
      setTodos(res.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div style={{padding: "20px"}}>
      <h1>Todo App</h1>

      {/* pass fetchTodosForChildren instead of original */}
      <AddTodo fetchTodos={fetchTodosForChildren} />

      <TodoList
        todos={todos}
        fetchTodos={fetchTodosForChildren}
      />
    </div>
  );
}

export default App;
