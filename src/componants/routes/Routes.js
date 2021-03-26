import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { ExitCard } from '../auth/ExitCard';

import Login from '../auth/Login';
import Register from '../auth/Register';
import { AddBeor } from '../beorim/AddBeor';
import { BeorimList } from '../beorim/BeorimList';
import { TasksList } from '../tasksList/TasksList';
import { EditeBeor } from '../beorim/EditeBeor';
import { EditeTask } from '../tasksList/EditeTask';
import { ReadFile } from '../excel/ReadFile';
import { TabGroup } from '../options/TabGroup';
import { TabInput } from '../options/TabInput';
//import { TabOption } from '../options/TabOption';
import { TabYear } from '../options/TabYear';
import { P10_1 } from '../pages/doc-10/P10_1';

//import { DocHeandel } from '../pages/DocHeandel';
import { KotarotHendel } from '../shared/KotarotHendel';
//import { ShowTable } from '../tables/ShowTable';
import { EditProfile } from '../usersHeandel/EditProfile';
import { AddTask } from '../tasksList/AddTask';
import { EndKelet } from '../excel/EndKelet';
import { Home } from '../home/Home';
//import { ReadExcelFile } from '../fileHeandel/ReadExcelFile';
//import { Active } from '../pages/Active';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/exitcard" component={ExitCard} />
      <Route exact path="/readexcel" component={ReadFile} />
      <Route exact path="/endkelet" component={EndKelet} />
      <Route exact path="/editprofile" component={EditProfile} />
      <Route exact path="/beorimList" component={BeorimList} />
      <Route exact path="/taskslist" component={TasksList} />
      <Route exact path="/taskslist/addtask" component={AddTask} />
      <Route exact path="/beorimList/addBeor" component={AddBeor} />
      <Route exact path="/tasklist/edittask/:id" component={EditeTask} />
      <Route exact path="/beorimList/editBeor/:id" component={EditeBeor} />
      <Route exact path="/period" component={TabYear} />
      <Route exact path="/itemlist" component={TabInput} />
      <Route exact path="/groping" component={TabGroup} />
      <Route exact path="/docs" component={P10_1} />
      <Route exact path="/kotarot" component={KotarotHendel} />
     
      </Switch>
  );
};

export default Routes;


/*
 <Route exact path="/readexcel" component={ReadExcelFile} />
      <Route exact path="/active" component={Active} />
*/

/* <Route exact path="/table" component={ShowTable} />*/