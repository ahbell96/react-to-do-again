import React, { useState, useEffect } from "react";
import EditTodo from "./editTodo";

const ListTodos = () => {
  const [todoData, setTodoData] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const { rows } = await response.json();
      console.log(rows);
      setTodoData(rows);
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setTodoData(todoData.filter((todo) => todo.todo_id !== id));
      console.log(deleteTodo);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="w-full flex justify-center my-4">
      <table className="shadow-lg bg-white">
        <thead>
          <tr>
            <th className="bg-blue-500 text-left text-white px-8 py-4">
              Todo Item
            </th>
            <th className="bg-blue-500 text-left text-white px-8 py-4">Edit</th>
            <th className="bg-blue-500 text-left text-white px-8 py-4">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {todoData.length > 0 &&
            todoData.map((todoItem, x) => (
              <tr key={todoItem.todo_id}>
                <td className="px-8 py-4">{todoItem.description}</td>
                <td className="px-8 py-4">
                  <EditTodo todo={todoItem} />
                </td>
                <td className="px-8 py-4">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => deleteTodo(todoItem.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodos;
