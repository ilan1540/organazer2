import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { ExitCard } from '../auth/ExitCard';

import Login from '../auth/Login';
import Register from '../auth/Register';
import { AddBeor } from '../beorim/AddBeor';
import { BeorimList } from '../beorim/BeorimList';
import { EditeBeor } from '../beorim/EditeBeor';
import { ReadFile } from '../excel/ReadFile';
import { TabOption } from '../options/TabOption';
import { DocHeandel } from '../pages/DocHeandel';
import { KotarotHendel } from '../shared/KotarotHendel';
import { ShowTable } from '../tables/ShowTable';
import { EditProfile } from '../usersHeandel/EditProfile';
//import { ReadExcelFile } from '../fileHeandel/ReadExcelFile';
//import { Active } from '../pages/Active';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/exitcard" component={ExitCard} />
      <Route exact path="/readexcel" component={ReadFile} />
      <Route exact path="/editprofile" component={EditProfile} />
      <Route exact path="/beorimList" component={BeorimList} />
      <Route exact path="/beorimList/addBeor" component={AddBeor} />
      <Route exact path="/beorimList/editBeor/:id" component={EditeBeor} />
      <Route exact path="/tabOptions" component={TabOption} />
      <Route exact path="/docs" component={DocHeandel} />
      <Route exact path="/kotarot" component={KotarotHendel} />
      <Route exact path="/table" component={ShowTable} />
      </Switch>
  );
};

export default Routes;


/*
 <Route exact path="/readexcel" component={ReadExcelFile} />
      <Route exact path="/active" component={Active} />
*/