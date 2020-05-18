import React from "react";
import "./App.scss";
import profileimg from "./imgs/profile.svg";

const user =[{
  name: "Elizabeth Nortman",
  picture: {profileimg}
}];

const todoList = [{
  id: 1,
  title: "Workout",
  completed: false
},
{
  id: 2,
  title: "Write a thank you letter to dad.",
  completed: false
},
{
  id: 3,
  title: "Buy new batteries.",
  completed: false
}];

const todoItem = todoList.map(function(title){
  return`
  <li className="todolist_listitems">
      <input type="checkbox"></input> 
      <p>${todoList.title}</p>
  </li>
  `
});

function App() {
  return (
    <body className="page_container">
      <div className="sidebar_container">
        <div className="logo">
          <h1>CHECKCHECK</h1>
        </div>
        <div className="solidline"></div>
        <div className="solidline"></div>
        <div className="solidline"></div>

        <div className="todo">
          <a href="www.google.com" className="todo_buttons">
            ToDo
          </a>
          <a href="www.google.com" className="todo_buttons">
            Grocery List
          </a>
          <a href="www.google.com" className="todo_buttons">
            Contacts
          </a>
          <a href="www.google.com" className="todo_buttons">
            New List
          </a>
        </div>

        <div className="bottom">
          <img src={user.profileimg} className="profile_img" alt="profile"></img>
          <a href="www.google.com" className="username_link">
            {user.name}
          </a>
        </div>
      </div>

      <div className="main_container">
        <div className="header">
          <h1 className="header_h1">ToDo List</h1>
        </div>

        <div className="todolist">
          <ul>
            {todoItem}
          </ul>
        </div>
      </div>
    </body>
  );
}

export default App;
