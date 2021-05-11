import './App.css';

import React from 'react';
import MyNavbar from './Components/Common/MyNavbar/MyNavbar'
import MyCard from './Components/Common/MyCard/MyCard'
import CardList from './Components/Common/CardList/CardList'


const App = () => 
{
  return (
    <div className="App">
      <MyNavbar></MyNavbar>

      <div id="header">
      </div>

      <div id='main-container'> 
          <div className="card-list">
            <CardList></CardList>
          </div>

        </div>
    </div>
    
  );
}

export default App;
