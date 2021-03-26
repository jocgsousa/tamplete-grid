import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Profile from './pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/resizable" exact component={Profile} />
    </Switch>
  );
}
