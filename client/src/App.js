import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages//About';
import Projects from './pages//Projects';
import Hobbies from './pages//Hobbies';
import Contact from './pages//Contact';
import HobbyFormPage from './pages/HobbyFormPage';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences'
import Login from './components/Login';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  // const [token, setToken] = useState();

  // if(!token){
  //   return <Login setToken={setToken} />
  // }
  return (
    
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path ="/" exact component={Home} />
            <Route path ="/About" exact component={About} />
            <Route path ="/Projects" exact component={Projects} />
            <Route path ="/Hobbies" exact component={Hobbies} />
            <Route path ="/Contact" exact component={Contact} />
            <Route path="/HobbieFormPage" exact component={HobbyFormPage} />
            {/* <div>
              <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
            </div> */}
            
          </Switch>
      </div>
    </Router>
  );
}

export default App;
