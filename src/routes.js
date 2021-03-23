import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Resizable from './pages/Resizable';
import Effects from './pages/Effects';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/resizable" exact component={Resizable} />
      <Route path="/efects" exact component={Effects} />
    </Switch>
  );
}
