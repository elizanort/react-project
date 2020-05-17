import React from "react";
import "./App.scss";
import profileimg from "./imgs/profile.svg";

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
          <img src={profileimg} className="profile_img" alt="profile"></img>
          <a href="www.google.com" className="username_link">
            Elizabeth Nortman{" "}
          </a>
        </div>
      </div>

      <div className="main_container">
        <div className="header">
          <h1 className="header_h1">ToDo List</h1>
        </div>

        <div className="todolist">
          <ul>
            <li className="todolist_listitems">
              <input type="checkbox"></input> 
              <p>Work Out</p>
            </li>
            <li className="todolist_listitems">
              <input type="checkbox"></input>
              <p>Write Letter to Olivia</p>
            </li>
          </ul>
        </div>
      </div>
    </body>
  );
}

export default App;
