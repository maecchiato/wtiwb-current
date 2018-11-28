import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Manage from './Components/Manage';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path = {`${process.env.PUBLIC_URL}/`} component = {App} />
        <Route exact path = {`${process.env.PUBLIC_URL}/manage` } component = { Manage } />
      </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);
