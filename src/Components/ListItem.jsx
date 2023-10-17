import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../features/validation";

export default function ListItem() {
  //Récupéré la liste des tâches
  const tasks = useSelector((state) => state.validation.todoList);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <ul>
        {tasks.length === 0 && (
          <li className="text-slate-50 text-md"> Aucun items </li>
        )}

        {tasks.length > 0 &&
          tasks.map((todo) => (
            <li key={todo.id} className="p-2 bg-zinc-200 mb-2 rounded flex">
              <span> {todo.content}</span>
              <button
                onClick={() => handleDelete(todo.id)}
                className="ml-auto bg-red-600 w-6 h-6 rounded text-zinc-200"
              >
                X
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}