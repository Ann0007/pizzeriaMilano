import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
//import Contact from './components/Contact';
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import Reservation from './components/reservation/Reservation';
import AboutUs from './components/aboutus/AboutUs';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/reservation" component={Reservation}/>
        <Route path="/aboutus" component={AboutUs}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
