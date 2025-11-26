import React, {useState} from "react";

function EditTodo({todo}) {
  const [text, setText] = useState(todo.text);

  const handleUpdateTodo = () => {
    // Implement API call to update the ToDo item here
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
