import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Admin from './Components/Admin';
import manage from './Components/Manage';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path ="/" component = {App} />
        <Route exact path = "/admin" component = {Admin} />
        <Route exact path = "/admin/manage" component = {manage} />
      </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);