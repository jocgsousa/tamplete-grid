import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';

import Profile from './pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  );
}
