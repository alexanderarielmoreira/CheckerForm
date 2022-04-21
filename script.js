//Capturar un objeto del DOM: en este caso, el botón del form;

const btn = document.querySelector('[data-form-btn]');

/*

Escuchar al objeto capturado cada vez que el usuario hace 'click' (evento) en él;

btn.addEventListener('click', ()=> {
    console.log('Haz creado una nueva tarea'); 
});


Capturando el valor del 'input';
a) Capturar el objeto formulario mediante una constante;
b)    "     el valor del 'input' mediante otra constante pero del form;

*/


const createTask = (evento)=>{
    const input = document.querySelector('[data-form-input]');  
    evento.preventDefault(); //Para que persista lo ingresado en el form;
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    const taskContent = document.createElement('div'); 
    taskContent.appendChild(checkComplete()); 
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);    
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task); 
     
};  

//Las 'arrows fuctions' (o funciones flechas) son funciones anónimas;

btn.addEventListener('click', createTask);

const checkComplete = ()=>{
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square','icon');
  i.addEventListener('click', completeTask);
  return i;
};

//completeTask;

const completeTask = (event)=>{
  const element = event.target;
  element.classList.toggle('fas'); 
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
};

//deleteIcon;

const deleteIcon = ()=>{
  
  const i = document.createElement('i');
  i.classList.add('fas','fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', deleteTask);
  return  i;

};


const deleteTask = (event)=>{
  const parent = event.target.parentElement;
  parent.remove();
};












