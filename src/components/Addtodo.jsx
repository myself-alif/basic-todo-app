import { useRef } from "react";

export default function Addtodo({ onNewItem }) {
  const todoName = useRef("");
  const todoDate = useRef("");

  const handleAddButtonClick = () => {
    onNewItem(todoName.current.value, todoDate.current.value);
    todoName.current.value = "";
    todoDate.current.value = "";
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input ref={todoName} type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDate} />
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
