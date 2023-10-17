import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, setItem } from "../features/validation"
import ListItem from "./ListItem";

export default function Validation() {
  const dispatch = useDispatch(); //executed action

  // Récupère la propriété showvalidation dont la valeur est Booléen
  const showValidation = useSelector(
    (state) => state.validation.showValidation
  );

  // Récupère la valeur de "item" depuis le state Redux
  let inputValue = useSelector((state) => state.validation.item);

  //   Déclaration de la fonction pour rajouter des tâches
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ content: inputValue }));
    // Réinitialisez inputValue à une chaîne vide après l'ajout
    dispatch(setItem(""));
  };

  // Objet 'setValue' avec une méthode handleClick pour gérer les changements d'input
  const setValue = {
    handleClick: (e) => {
      e.preventDefault();
      dispatch(setItem(e.target.value));
    },
  };

  return (
    <div className="h-screen ">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">La To-do liste</h1>

        <form className="mb-10" onSubmit={handleSubmit}>
          <label htmlFor="todo-item" className="text-slate-50">
            Ajouter une chose à faire
          </label>

          <input
            type="text"
            className="mt-3 w-full rounded p-2"
            value={inputValue}
            onChange={setValue.handleClick}
          />

          {/* si l valeur et vrai alors affiche le message */}
          {showValidation && (
            <p className="text-red-400">
              Ajouter d'abord du contenue à votre tâche{" "}
            </p>
          )}

          <button
            style={{ marginBottom: "40px" }}
            className="mt-4 py-2 bg-slate-50 rounded min-w-[115px]"
            type="submit"
          >
            Ajouter
          </button>

        
          <ListItem />
        </form>
      </div>
    </div>
  );
}