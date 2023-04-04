/**
 * JAVASCRIPT IIFE
 * 
 * Protege las funciones para que no se ejecuten en la consola.
 * Se crea una arrow function antes de crear todo el código
 * 
 * Estructura:
 * (()=>{
 * código
 * })()
 * 
 */

import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deteleIcon.js"

(() =>{

  const Btn = document.querySelector('[data-form-btn]');
  const Input = document.querySelector('[data-form-input]');
  const List = document.querySelector('[data-list]');

  const createTask = (evento)=>{
    evento.preventDefault(); // Previene por defecto que se refresque la página al darle click
    let value = Input.value;
    Input.value = '';

    let task = document.createElement('li');
    task.classList.add('card');

    let taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete())

    let titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerHTML = value;

    let content = ``
    List.appendChild(task);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon())
    taskContent.appendChild(titleTask);
    taskContent.appendChild(deleteTask())

    console.log(content)
  };

  Btn.addEventListener('click', createTask);

})();