import React from 'react'
import './App.scss';


function App() {
  return (
    <body>
      <div className="page_container">

      <nav className="sidenav_container">
          <div className="topnav">
            <img className="profile_img"></img>
            <h3 className="username_link"></h3>
          </div>

          <div  className="todolists">
            <a href="#">ToDo</a>
            <a href="#">Grocery List</a>
            <a href="#">Contacts</a>
          </div>

          <div className="bottomnav">
            <a href="#">New List</a>
            <img src=""></img>
          </div>
      </nav>

      <div className="mainpage_container">
        <div className="header">
          <h1>ToDo List</h1>
          <a href=""></a>
        </div>

        <div className="listitems">
          <ul>
            <li>Work Out</li>
            <li>Write Letter to Olivia</li>
          </ul>
        </div>
      </div>

    </div>
  </body>
  );
}


export default App;
