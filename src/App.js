
import "./App.css";
import {TheHeader} from "./component/TheHeader.js";
import {TheMain} from "./component/TheMain.js";
import {TheFooter} from "./component/TheFooter.js";

function App() {
  const appTitle = "TodoApp";
  const todos = [
    {title: 'todo1', completed: false},
    {title: 'todo2', completed: false},
    {title: 'todo3', completed: false},
  ];

  const addTodo = (title) => {
    todos.push({title, completed: false});
  };

  const removeTodo = (index) => {
    todos.splice(index, 1);
  };

  const toggleCompleted = (index) => {
    todos[index].completed = !todos[index].completed;
    console.log(todos);
  }; //where to implement this??

  const clearAllCompleted = () => {
    const completed = todos.filter((item) => item.completed === true);
   
    completed.forEach((item) => {
        const index = todos.indexOf((item));
        todos.splice(index, 1);
    });

    console.log(todos);
  };
  const toggleAll = () => {};
  //header not hard coded
  //pass items left to footer

  //Bonus: double click to edit

  return (
    <section class="todoapp">
      <TheHeader title = {appTitle}
                 onPressAdd = {addTodo}
                 placeHolder = "What needs to be done?"/>
      <TheMain items = {todos}
               onClickRemove = {removeTodo}
               toggleComplete = {toggleCompleted} />
      <TheFooter clearAll = {clearAllCompleted}/>
    </section>
  );
}

export default App;
