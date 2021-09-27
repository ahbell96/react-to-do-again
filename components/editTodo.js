import React, { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const EditTodo = ({ todo }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [description, setNewDescription] = useState(todo.description);

  const updateTodoItem = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      console.log(body);
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }

    handleClose();
  };

  return (
    <>
      <Button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleShow}
      >
        Edit
      </Button>
      {console.log(description)}
      {console.log(todo)}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit todo item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="w-full my-8">
            <div className="flex flex-row">
              <input
                type="text"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={description}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => updateTodoItem(e)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTodo;
