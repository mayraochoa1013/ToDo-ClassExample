//Selectors
const todoInput = document.querySelector(".item");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".each-items");

//Event Listeners
todoButton.addEventListener("click", addTodo);

//trash Button
todoList.addEventListener("click", deleteCheck);

//Functions
function addTodo(event)
  {
    //console.log("Hello Josue!");

    //Prevent from submitting
    event.preventDefault();
    //console.log(todoInput.value);
    //To do div
    //Creating Element
    const todoDiv = document.createElement('div');
    //Adding a class/id name
    todoDiv.classList.add('todo');

    //Create LI
    const createLI = document.createElement('li');
    //Display items to list
    createLI.innerText = todoInput.value;
    //Adding a class/id name
    createLI.classList.add('todolist');
    todoDiv.appendChild(createLI);

    //Check Trash Button
   const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.classList.add('trash-btn');
    todoDiv.appendChild(deleteButton);
    //trashButton.innerHTML = '<i class="fa fa-plus-circle"></i>'


    todoList.appendChild(todoDiv);

    todoInput.value = "";

  }

//Displaying List


//Delete Item
function deleteCheck(e)
  {
    //retrieve a reference to the parent node(list item)
    const  item = e.target.parentNode;

    if(item.classList[0] === "trash-btn")
      {
        const todo = item.parentElement;
        todo.remove();
      }
  }