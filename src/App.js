import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './Components/AppBar';
import Homeview from './Views/Homeview';
import Tab1 from './Views/Tab1';
import Tab2 from './Views/Tab2';
import Tab3 from './Views/Tab3';

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <Homeview />
        </Route>
        <Route path="/tab1">
          <Tab1 />
        </Route>
        <Route path="/tab2">
          <Tab2 />
        </Route>
        <Route path="/tab3">
          <Tab3 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
