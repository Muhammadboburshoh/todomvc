var elTodoForm = $_('.todos-form');
var elTodoInput = $_('.todo-input', elTodoForm);
var elTodoList = $_('.todo-list', elTodoForm);

var elTodoTemplate = $_('#todo-item').content;
var todoCheckbox = $_('.todo-checkbox', elTodoTemplate);

var itemDeleteButton = $_(".todo-delete-btn")

var elClearBtn = $_('.clear-btn');
var elShowAllBtn = $_('.show-all');
var elShowActiveBtn = $_('.show-active');
var elShovCompletedBtn = $_('.show-completed');

// ARRAYS

var todosArray = JSON.parse(localStorage.getItem('todos')) || [];


var addTodo = function(enteredValue) {

  todosArray.push({
    title: enteredValue,
    id: 1,
    complated: false
  })

}

var updateLocalTodolist = function() {
  localStorage.setItem('todos', JSON.stringify(todosArray));
}

var createNewTodo = function () {
  var newTodoFragment = document.createDocumentFragment();

  todosArray.forEach(function(todo){
    var newTodo = elTodoTemplate.cloneNode(true);

    $_('.todo-text', newTodo).textContent = todo.title;
    $_('.todo-checkbox', newTodo).dataset.id = todo.id;
    $_('.todo-checkbox', newTodo).id = `todo${todo.id}`;
    $_('.todo-label', newTodo).id = `todo${todo.id}`;
    $_(".todo-delete-btn", newTodo).dataset.id = todo.id;
    newTodoFragment.appendChild(newTodo);
  });

  elTodoList.appendChild(newTodoFragment);
}
createNewTodo();


elTodoForm.addEventListener('submit', evt => {
  evt.preventDefault();
  elTodoList.innerHTML = '';  

  var enteredValue = elTodoInput.value.trim();
  if(!enteredValue) {
    alert("Iltimos, vazifa matnini kiriting");
    return;
  }

  addTodo(enteredValue);
  createNewTodo();
  console.log(todosArray);

  updateLocalTodolist();

  elTodoInput.value = '';
});

elClearBtn.addEventListener('click', function(evt){
  elTodoList.innerHTML = '';
  todosArray = [];
  localStorage.clear();
});

elShowAllBtn.addEventListener("click", function(evt) {

})
