import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*Components*/
import Home from './components/Home/Home'
import Tools from './components/Tools/Tools'
import Pricing from './components/Pricing/Pricing'

import './App.css';


function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/tools/assignment-writing-tool">
          <Tools term='assignment'/>
        </Route>

        <Route path="/tools/journal-writing-tool">
          <Tools term='journal'/>
        </Route>

        <Route path="/tools/books-writing-tool">
          <Tools term='stories'/>
        </Route>

        <Route path="/tools/grading-writing-tool">
          <Tools term='grading'/>
        </Route>
        
        <Route path="/tools">
          <Tools term='panel'/>
        </Route>

        <Route path="/pricing-plus">
          <Pricing/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
