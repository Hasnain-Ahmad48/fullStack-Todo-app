import React, {useState} from "react";
import axios from "axios";

function AddTodo({fetchTodos}) {
  const [text, setText] = useState("");

  const handleAddTodo = async () => {
    if (!text.trim()) return alert("Enter something");

    await axios.post("http://localhost:5000/api/todos", {text});
    setText("");
    fetchTodos();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add new ToDo"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>ADD</button>
    </div>
  );
}

export default AddTodo;
