import Addtodo from "./components/Addtodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoitems, setTodoItems] = useState([]);
  const handleNewitem = (itemName, itemDate) => {
    const newTodoItems = [
      ...todoitems,
      {
        name: itemName,
        date: itemDate,
      },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem = (toDoItemName) => {
    const newTodoItem = todoitems.filter(
      (todoitem) => todoitem.name !== toDoItemName
    );
    setTodoItems(newTodoItem);
  };
  return (
    <center className="todo-container">
      <AppName />
      <Addtodo onNewItem={handleNewitem} />
      {todoitems.length === 0 && <WelcomeMessage />}
      {todoitems.map((todoItem, index) => (
        <TodoItem
          onDeleteClick={handleDeleteItem}
          item={todoItem}
          key={index}
        />
      ))}
    </center>
  );
}

export default App;
