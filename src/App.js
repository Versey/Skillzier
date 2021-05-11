import './App.css';

import React from 'react';
import MyNavbar from './Components/Common/MyNavbar/MyNavbar'
import MyCard from './Components/MyCard/MyCard'

const App = () => 
{
  return (
    <div className="App">
      <MyNavbar></MyNavbar>

      <div id="header">

        <div className="ranking">

        </div>
      </div>

      <div id='main-container'> 

          <div className="card-list">


          </div>

        </div>
    </div>
    
  );
}

export default App;
