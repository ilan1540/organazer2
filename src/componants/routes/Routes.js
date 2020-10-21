import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { ExitCard } from '../auth/ExitCard';

import Login from '../auth/Login';
import Register from '../auth/Register';
//import { ReadExcelFile } from '../fileHeandel/ReadExcelFile';
//import { Active } from '../pages/Active';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/exitcard" component={ExitCard} />
      </Switch>
  );
};

export default Routes;


/*
 <Route exact path="/readexcel" component={ReadExcelFile} />
      <Route exact path="/active" component={Active} />
*/