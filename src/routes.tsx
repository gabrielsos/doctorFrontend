import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewDoctor from './pages/NewDoctor';
import UpdateDoctor from './pages/UpdateDoctor';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home}/>
    <Route path="/new-doctor" exact component={NewDoctor}/>
    <Route path="/update-doctor" exact component={UpdateDoctor}/>
  </BrowserRouter>
);

export default Routes;