import React from "react";
import "./App.scss";
import profileimg from "./imgs/profile.svg";


const todoList = [{
  id: 1,
  listName: "Todo List",
  title: "Workout",
  completed: false
},
{
  id: 2,
  listName: "Todo list",
  title: "Write a thank you letter to dad.",
  completed: false
},
{
  id: 3,
  listName: "Grocery List",
  title: "Grapes",
  completed: false
},
{
  id: 1,
  listName: "Grocery List",
  title: "Bread" ,
  completed: false
},
{
  id: 2,
  listName: "Todo list",
  title: "Write a thank you letter to dad.",
  completed: false
},
{
  id: 3,
  listName: "Grocery List",
  title: "Eggs",
  completed: false
},
{
  id: 1,
  listName: "Todo list",
  title: "Workout",
  completed: false
},
{
  id: 2,
  listName: "Todo list",
  title: "Write a thank you letter to dad.",
  completed: false
},
{
  id: 3,
  listName: "Application List",
  title: "UXR Google",
  completed: false

}];


const userInformation =[{
  name: "Elizabeth Nortman",
  picture: {profileimg}
}];

const userInfo = userInformation.map(function(userInformation){
  return (
  <>
    <img src={userInformation.picture} className="profile_img" alt="profile"></img>
    
    <a href="www.google.com" className="username_link">
      {userInformation.name}
    </a>
  </>
  )
});

const todoItem = todoList.map(function(todoList){
  return (
    <li className="todolist_listitems">
      <input type="checkbox"></input> 
      <p>{todoList.title}</p>
    </li>
  )
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
          <a href="www.google.com" className="todo_buttons todo">
            To Do
          </a>
          <a href="www.google.com" className="todo_buttons grocery">
            Grocery List
          </a>
          <a href="www.google.com" className="todo_buttons application">
            Application
          </a>
          <a href="www.google.com" className="todo_buttons newlist">
            New List
            <i class="fas fa-plus"></i>
          </a>
        </div>

        <div className="username">
          {userInfo}
        </div>
      </div>

      <div className="main_container">
        <div className="header">
          <h1 className="header_h1">ToDo List</h1>
        </div>

        <div className="todolist">
          <input type="text" class="todolist_input" placeholder="Add new item"></input>
          <button type="submit" class="todolist_submitbutton">Add</button>
          <div>
            <ul>
              {todoItem}
            </ul>
          </div>
        </div>
      </div>
    </body>
  );
}

// window.onload = () => {
//   renderLists(lists);
//   document.getElementsByClassName("todo").onclick = function () {
//       chosenList = "";
//       renderLists();
//   }
//   document.getElementsByClassName("grocery").onclick = function () {
//       chosenList = "hardware";
//       renderLists();
//   }
//   document.getElementsByClassName("application").onclick = function () {
//       chosenList = "garden";
//       renderLists();
//   }
// }

export default App;
