import React, {useState} from "react";
import axios from "axios";

function EditTodo({todo,fetchtodos}) {
  const [text, setText] = useState(todo.text);

  const handleUpdateTodo = async() => {
    // Implement API call to update the ToDo item here
    await axios.put(`http://localhost:5000/api/todos/${todo._id}`,{text,completed:todo.completed,})
    fetchtodos();
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={handleUpdateTodo}>Update</button>
    </div>
  );
}

export default EditTodo;
