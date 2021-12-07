/* New cleaned up version of App.js */
import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './react-components/Login';
import Welcome from './react-components/Welcome';
import Register from './react-components/Register';
import HomePage from './react-components/HomePage';
import EditProfile from './react-components/EditProfilePanel';
import EventPage from './react-components/EventPage';

class App extends React.Component {

  // a 'global' state that you can pass through to any child componenets of App.
  //   In the Routes below they are passed to both the Home and Queue states.
  state = {
  }

  render() {
    return (
      <div class="row h-100 w-100">
        <div class="col-sm-12 my-auto">
        <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/' render={() => 
                            (<Welcome appState={this.state}/>)}/>
            <Route exact path='/Login' render={() => 
                            (<Login appState={this.state}/>)}/>
            <Route exact path='/Register' render={() => 
                            (<Register appState={this.state}/>)}/>
            <Route exact path='/home' render={() => 
                            (<HomePage appState={this.state}/>)}/>   
            <Route exact path='/events/:event_id' render={() => 
                            (<EventPage appState={this.state}/>)}/>   
            <Route exact path='/EditProfilePanel' render={() => 
                            (<EditProfile appState={this.state}/>)}/>                          
          </Switch>
        </BrowserRouter>
      </div>
      </div>
    );  
  }
}

export default App;
