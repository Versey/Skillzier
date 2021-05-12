import './App.css';

import React from 'react';
import MyNavbar from './Components/Common/MyNavbar/MyNavbar'
import MyCard from './Components/Cards/MyCard/MyCard'
import CardList from './Components/Cards/CardList/CardList'
import Toolbar from  './Components/Common/Toolbar/Toolbar'


const App = () => 
{
  return (
    <div className="App">
      <MyNavbar></MyNavbar>

      <div id="header">
      </div>
      <Toolbar></Toolbar>
      <div id='main-container'> 
          <div className="card-list">
            <CardList></CardList>
          </div>

        </div>
    </div>
    
  );
}

export default App;
