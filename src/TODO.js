import React, { useState } from "react";

const TODO = () => {
  const [todo, setTodo] = useState([{ name: "Wake up early", id: Date.now() }]);
  const [value, setValue] = useState("");
  const [completed, setCompleted] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const addTodo = () => {
    if (!value.trim()) {
      alert("Please enter a task");
      return;
    }
    setTodo((prev) => [...prev, { name: value.trim(), id: Date.now() }]);
    setValue("");
  };

  const removeTodo = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const addComplete = (id) => {
    const completedTask = todo.find((item) => item.id === id);
    setCompleted((prev) => [...prev, completedTask]);
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-black text-white h-screen p-4">
      <h1 className="text-center text-2xl mb-4">To-Do List</h1>

      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          className="bg-gray-800 border border-white text-white px-2 py-1 mr-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a task"
        />
        <button
          className="bg-blue-600 px-4 py-1 text-white rounded"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      <ul  className=" ">
        {todo.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between mb-2 bg-gray-800 p-2 rounded"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => addComplete(item.id)}
              />
              <span>{item.name}</span>
            </div>
            <button
              className="bg-red-600 px-2 py-1 text-white rounded"
              onClick={() => removeTodo(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button
        className="mt-4 bg-green-600 px-4 py-1 text-white rounded"
        onClick={() => setShowCompleted((prev) => !prev)}
      >
        {showCompleted ? "HIDE COMPLETED" : "SHOW COMPLETED"}
      </button>

      {showCompleted && (
        <div className="mt-4">
          <h2 className="text-xl mb-2">Completed Tasks</h2>
          {completed.map((item) => (
            <p key={item.id} className="text-gray-400">
              {item.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default TODO;
