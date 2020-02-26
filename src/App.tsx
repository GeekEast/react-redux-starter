import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from 'components/Nav';
import {Container} from 'components/CompositeContainer';
import {High} from 'components/HOC';
import RenderProps from './components/RenderProps/Main';
import SimpleContainer from './components/SimpleContainer/Main';
import Hooks from './components/Hooks/Main';
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
