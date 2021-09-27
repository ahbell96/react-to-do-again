import React, { useState, useEffect } from "react";
import axios from "axios";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const formOnSubmit = async (e) => {
    e.preventDefault(); // stop refresh
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
      setDescription("");
    } catch (err) {
      console.err(err.message);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <form className="w-3/12" onSubmit={formOnSubmit}>
        <div className="flex flex-row">
          <input
            type="text"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <button className="text-white bg-green-500 hover:bg-green-700 font-bold border-0 py-2 px-8 mx-4 focus:outline-none rounded text-lg">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputTodo;
