import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Analytics from 'react-router-ga';
import './style/index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import Home from './pages/Home';
import Map from './pages/Map';
import Fetch from './pages/Fetch';
import ReadMe from './pages/ReadMe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/404';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter>
      <Analytics id={process.env.REACT_APP_GA_CODE}>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/map" component={Map} />
          <Route path="/fetch" component={Fetch} />
          <Route path="/readme" component={ReadMe} />
          <Route component={NotFound} />
        </Switch>
      </Analytics>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorkerRegistration.unregister();