import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from 'patterns/Nav';
import {Container} from 'patterns/CompositeContainer';
import {High} from 'patterns/HOC';
import RenderProps from 'patterns/RenderProps/Main';
import SimpleContainer from 'patterns/SimpleContainer/Main';
import Hooks from 'patterns/Hooks/Main';
const App = () => 
    <Router>
      <Nav />
      <div className="container">
      <Switch>
        <Route path='/' exact component={Hooks}/>
        <Route path='/compositecontainer' exact component={Container}/>
        <Route path='/simplecontainer' exact component={SimpleContainer}/>
        <Route path='/hoc' exact component={High}/> 
        <Route path='/renderprops' exact component={RenderProps}/>
      </Switch>
      </div>
    </Router>


export default App;
