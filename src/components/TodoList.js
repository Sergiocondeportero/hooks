import React, { useState } from "react";

export default function TodoList() {

  const [tarea, setTarea] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const agregaTarea = () => {
    if (inputValue !== "") {
      setTarea((tareaPrevia) => [...tareaPrevia, inputValue]);
      setInputValue(""); 
    }
  };
  const borrarTarea = (indice) => {
    const nuevaTarea = tarea.filter((_, tareaIndice) => tareaIndice !== indice);
    setTarea(nuevaTarea);
  };
  const borrarTodo = () =>{
    setTarea([]); 
  }
  const borrarUltima = () =>{
    setTarea((tarea) => {
      let nuevoArray = [...tarea];
       nuevoArray.pop();
      return nuevoArray; 
    });
  }

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribe una nueva tarea"
      />
      <button onClick={agregaTarea}>Agregar tarea</button>
            <button onClick={borrarTodo}>Borrar todas las tareas</button>
            <button onClick={ borrarUltima}>Eliminar ultima tarea</button>
       

      <ul>
      </ul>
        {tarea.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => borrarTarea(index)}>Eliminar</button>
          </li>
        ))}
     
     

    </div>
  );
}


/*2. Lista de Tareas (To-Do List)
Crea un componente funcional llamado TodoList que:

Inicialice el estado con un array vacío para almacenar las tareas.

Tenga un campo de entrada y un botón para agregar nuevas tareas.

Cuando el usuario escriba una tarea en el campo de entrada y haga clic en el botón "Agregar tarea", la tarea debe agregarse al array de tareas y mostrarse en una lista debajo del campo de entrada.

Requisitos:

Utiliza el Hook useState para manejar el estado del array de tareas y del campo de entrada.

Implementa la funcionalidad para agregar indicada.

BONUS:

Implementa el elimiar tareas, por medio de un botón (si se pulsa el botón se elimina la última)

Implementa el elimiar tareas de manera que el usuario pueda elegir la tarea que quiere eliminar.*/
