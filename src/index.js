import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import { render } from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


import Admin from './Components/Admin';
import manageaccounts from './Components/Manage-Accounts';
import manageadvertisements from './Components/Manage-Advertisements';
import managestores from './Components/Manage-Stores';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path ="/" component = {App} />
        <Route exact path = "/admin" component = {Admin} />
        <Route exact path = "/admin/accounts" componenet = {manageaccounts} />
        <Route exact path = "/admin/manage-advertisements" componenet = {manageadvertisements} />
        <Route exact path = "/admin/manage-stores" componenet = {managestores} />
        </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);
