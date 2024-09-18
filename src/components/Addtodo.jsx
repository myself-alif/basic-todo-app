import { useState } from "react";

export default function Addtodo({ onNewItem }) {
  const [todoname, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };
  const handleAddButtonClick = () => {
    onNewItem(todoname, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            onChange={handleNameChange}
            type="text"
            placeholder="Enter todo here"
            value={todoname}
          />
        </div>
        <div className="col-4">
          <input onChange={handleDateChange} type="date" value={dueDate} />
        </div>
        <div className="col-2">
          <button className="btn btn-success" onClick={handleAddButtonClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
