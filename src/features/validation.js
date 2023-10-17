import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  showValidation: false,
  item: "", // Ajout de la propriété 'item'
};

const validation = createSlice({
  name: "validation",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (action.payload.content === "") {
        state.showValidation = true;
      } else {
        state.showValidation = false;
        state.todoList.push({ id: nanoid(), content: action.payload.content });
        console.log(validation);
      }
    },
    setItem: (state, action) => {
      state.item = action.payload; // Utilisation correcte de la déstructuration ici
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
  },
});

export const { addItem, setItem, deleteTodo } = validation.actions;
export default validation.reducer;