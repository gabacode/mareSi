import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './style/index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import Home from './pages/Home';
import Map from './pages/Map';
import Fetch from './pages/Fetch';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={Home} exact/>
      <Route path="/map" component={Map} />
      <Route path="/fetch" component={Fetch} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorkerRegistration.unregister();