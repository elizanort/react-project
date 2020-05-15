import React from 'react'
import './App.css';


function App() {
  return (
    <body>
      <nav className="sidenav">
          <div className="topnav_container">
            <img className="profile_img"></img>
            <h3 className="username_link"></h3>
          </div>
          <div className="todolists_container">
            <a href="">ToDo</a>
            <a href="">Grocery List</a>
            <a href="">Contacts</a>
          </div>
          <div className="bottomnav_container">
            <a href="">New List</a>
            <img src=""></img>
          </div>
      </nav>
      <div className="list_container">
        <div className="header">
          <h1>ToDo List</h1>
          <a href=""></a>
        </div>
        <div>
          <ul>
            <li>Work Out</li>
            <li>Write Letter to Olivia</li>
          </ul>
        </div>

      </div>
      
    <div className ="too">
    <ul>
      <li>Go to the movies</li>
      <li>Finish homework</li>
    </ul>
    </div>
  </body>
  );
}


export default App;
