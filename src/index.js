import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Analytics from 'react-router-ga';
import './style/index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import Home from './pages/Home';
import Maps from './pages/Maps';
import ReadMe from './pages/ReadMe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/404';
import WIP from './pages/WIP';

const update = false

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter>
    {
      update ?
      <Switch>
        <Route path="/" component={WIP}/>
      </Switch>
      :
      <Analytics id={process.env.REACT_APP_GA_CODE}>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/maps" component={Maps} />
          <Route path="/readme" component={ReadMe} />
          <Route component={NotFound} />
        </Switch>
      </Analytics>
    }
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorkerRegistration.unregister();
