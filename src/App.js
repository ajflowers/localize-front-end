import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component = {Splash} />
        
      </div>
    </Router>
  );
}

export default App;
