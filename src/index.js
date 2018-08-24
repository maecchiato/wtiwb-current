import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path = {`${process.env.PUBLIC_URL}/`} component = {App} />
      </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);
