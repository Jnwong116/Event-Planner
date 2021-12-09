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
import { checkSession } from './actions/login';

class App extends React.Component {

  // a 'global' state that you can pass through to any child componenets of App.
  //   In the Routes below they are passed to both the Home and Queue states.

  componentDidMount() {
    checkSession(this);
  }

  componentDidUpdate() {
    console.log(this.state.currentUser)
    if (this.state.currentUser != null) {
      window.location.href = this.state.nextPage;
    }
  }

  state = {
    currentUser: null,
    nextPage: ""
  }

  render() {
    const { currentUser }  = this.state;

    return (
      <div class="row h-100 w-100">
        <div class="col-sm-12 my-auto">
        <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/' render={ props => 
                            (<Welcome {...props} app={this}/>)}/>
            <Route exact path='/Login' render={props => 
                            (<Login {...props} app={this}/>)}/>
            <Route exact path='/Register' render={props => 
                            (<Register {...props} app={this}/>)}/>
            <Route exact path='/home' render={props => 
                            (<HomePage {...props} app={this}/>)}/>   
            <Route exact path='/events/:event_id' render={props => 
                            (<EventPage {...props} app={this}/>)}/>   
            <Route exact path='/EditProfilePanel' render={props => 
                            (<EditProfile {...props} app={this}/>)}/>                          
          </Switch>
        </BrowserRouter>
      </div>
      </div>
    );  
  }
}

export default App;
