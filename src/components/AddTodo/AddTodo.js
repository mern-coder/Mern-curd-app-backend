import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo,manoNumber } from "../../actions";
import cuid from "cuid";
import { useSelector } from "react-redux";

const AddTodo = () => {
  const [tasks, setTasks] = useState("");
  const [number, setNumber] = useState("");
  const [num, setNum] = useState("");

  const numberDatas = useSelector((state) => state.todos.data);
  console.log("chdfh",numberDatas)

useEffect(() => {
  setNum(numberDatas);

}, [])

  const dispatch = useDispatch();
  function handleInputChange(e) {
    setTasks(e.target.value);
    setNumber(e.target.value);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    setTasks(dispatch(addTodo({ task: tasks, id: cuid() })));
    e.target.userInput.value = "";
  }

  function handleSubmit(e){
    e.preventDefault();
    setNumber( dispatch(manoNumber({number:number,id:cuid()})));
    setNumber('');
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type='text'
        name='userInput'
        onChange={(e) => handleInputChange(e)}
      />
      <button type='submit'>Add</button>

Mano Adding number{numberDatas&&numberDatas.map((item)=>{
  return(

<table className="table" border="1">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">number</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{item.id}</td>
      <td>{item.number}</td>
    </tr>
</tbody>
</table>
)
})}


{/* manoj */}
      <input
        type='text'
        name='number'
        onChange={(e) => handleInputChange(e)}
      />
<button  onClick={handleSubmit}>Mano Submit</button>
{/* manoj */}



    </form>

    

  );
};

export default AddTodo;
