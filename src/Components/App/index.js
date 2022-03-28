import React, { Component } from 'react';

import Header from './../Header';
import Home from './../Home';
import './index.css';

function App() {
  return (
    <React.Fragment>
    <Header/>
      <div className="App">
        <Home/>

      </div>

      </React.Fragment>
  );
}

export default App;
