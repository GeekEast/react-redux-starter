import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Root from 'components/Root';
import Nav from 'components/Nav';
import {Container} from 'components/Container';
import {High} from 'components/HOC';


const App = () => 
    <Router>
      <Nav />
      <div className="container">
      <Switch>
        <Route path='/' exact component={Root}/>
        <Route path='/container' exact component={Container}/>
        <Route path='/hoc' exact component={High}/> 
        {/* <Route path='/renderprops' exact component={Root}/> */}
      </Switch>
      </div>
    </Router>


export default App;
