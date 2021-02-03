import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage, ControlledFomPage, UncontrolledFormPage, NavBar, FormsNavBar, UserProfilePage } from './pages';
import './App.css';
import { UserDataLoader } from './UserDataLoader';
import { ThemeContext } from './ThemeContext';




function App() {
  return (
    <ThemeContext.Provider value="light">
      <div className="App">
        <Router>
          <NavBar />
          <div className="App-header">
            <Switch>
              <Route path="/" exact><HomePage /></Route>
              <Route path="/counter"><CounterButtonPage /></Route>
              <Route path="/people-list"><PeopleListPage /></Route>
              <Route path="/protected"><ProtectedPage /></Route>
              <Route path="/user">
                {/*<UserDataLoader>*/}
                  <UserProfilePage />
                {/*</UserDataLoader>*/}
              </Route>
              <Route path="/forms">
                <Router>
                  <FormsNavBar />
                  <Route path="/forms/controlled"><ControlledFomPage /></Route>
                  <Route path="/forms/uncontrolled"><UncontrolledFormPage /></Route>
                </Router>
              </Route>

              
              <Route><NotFoundPage /></Route>
            </Switch>
          </div>
          
        </Router>
      </div>
    </ThemeContext.Provider> 
  );
}

export default App;
