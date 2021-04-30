import React from 'react'
import ReactDOM from 'react-dom'
import Game from './components/game'
import './index.css'

const user = {
    UserName: "Alberto",
    LastName: "Arroyo Raygada",
    AvatarUrl: "https://lh3.googleusercontent.com/a-/AAuE7mDCVQLyMoUR0qPZKU9-81OBYP9oBfsWrYK62BVG3w=s96-cc"
  }
 const comments =[
    {
      Text:"This a comment sample 1",
      Created: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    },
    {
      Text:"This a comment sample 2",
      Created: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    }]


// ========================================
ReactDOM.render(
  <Game user={user} comments={comments}/>,  
  document.getElementById('root')
);
