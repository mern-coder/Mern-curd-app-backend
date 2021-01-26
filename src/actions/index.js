import { ADD_TODO, DELETE_TODO, UPDATE_TODO,MANO_NUMBER } from "./types";


export const manoNumber = (number) => (
  
  console.log("Number--mano",number),
  
  {  

  type: MANO_NUMBER,
  number,
}
);

export const addTodo = (message) => (
  
console.log("save",message),
  
  {  

  type: ADD_TODO,
  message,
}
);

export const deleteTodo = (id) => (
  console.log("del",id),
  {
  type: DELETE_TODO,
  id,
}

);

export const updateTodo = ({ message, id }) => (
  console.log("update",message, id ),
  {
  type: UPDATE_TODO,
  message,
  id,
});
