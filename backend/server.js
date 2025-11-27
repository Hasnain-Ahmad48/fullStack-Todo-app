const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.port || 5000;

//moddleware
app.use(express.json());
app.use(cors());

//conect to mongo DB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.log("error connecting to MongoDB", err);
  });


//todo schema and model
const todoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
});
const Todo = mongoose.model("Todo", todoSchema);

//define CRUD routes
//create new todo
app.post("/api/todos", async (req, res) => {
  try {
    const {text} = req(body);
    const todo = new Todo({text, completed: false});
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({error: "Failed to create todo"});
  }
});

//read all todo
app.get("/app/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({error: "Failed to retrieve Todos"});
  }
});

// update all todo
app.put("/api/todos/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const {text, completed} = req.body;
    const todo = await Todo.findByIdAndUpdate(
      id,
      {text, completed},
      {new: true}
    );
  } catch (err) {
    res.status(400).json({error: "failed to update Todo"});
  }
});
//delete a todo
app.delete("/api/todos/:id", async (req, res) => {
  try {
    const {id} = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({error: "Failed to delete ToDo"});
  }
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
