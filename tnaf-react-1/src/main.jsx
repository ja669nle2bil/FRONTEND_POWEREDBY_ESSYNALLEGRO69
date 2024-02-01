import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShowUser from "./ShowUser.jsx";
import UserList from "./UsersList.jsx";
import Timer from "./Timer.jsx";
import Tasks from "./task-list/Tasks.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <br/>_________________________________________________________
    <h1> COMPONENT HERE! ! !</h1>
    <ShowUser>rura</ShowUser>
    <h1>LISTA KOTUW</h1>
    <UserList></UserList>
    <h1>TIMER TAJMEX</h1>
    <Timer start={5}></Timer>
    <br/>_________________________________________________________
    <h1>ESSYN TODO 👱🏾‍♂️😜</h1>
    <Tasks></Tasks>
  </React.StrictMode>
)
