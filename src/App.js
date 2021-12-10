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
import asd from "./images/3.svg";

class App extends React.Component {

  // a 'global' state that you can pass through to any child componenets of App.
  //   In the Routes below they are passed to both the Home and Queue states.

  componentDidMount() {
    checkSession(this);
  }

  componentDidUpdate() {
    console.log(this.state.currentUser)
    /*if (this.state.currentUser != null) {
      window.location.href = this.state.nextPage;
    }*/
  }

  state = {
    currentUser: null,
    dashPage: 0,
    curEvent: 0,
    nextPage: "",
    message: {}
  }

  render() {
    const { currentUser , dashPage}  = this.state;
    console.log(this.state)
    return (
      <div class="row h-100 w-100">
        <div class="col-sm-12 ">
        <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route
                exact path={["/", "/login", "/register", "/dashboard"] /* any of these URLs are accepted. */ }
                render={ props => (
                    <div className="app ">
                        { /* Different componenets rendered depending on if someone is logged in. */}
                        {!currentUser ? (dashPage==3 ? <Register {...props} app={this} /> : <Login {...props} app={this}/>): (dashPage==0 ? <HomePage {...props} app={this}/>: (dashPage==1 ? <EditProfile {...props} app={this}/> : (dashPage==2 ? <EventPage {...props} app={this}/> : <div></div>)))}
                    </div>                   // ... spread operator - provides all of the props in the props object
                    
                )}
            />
            <Route render={() => <div><img src={asd} width="1300" height="1300"/></div>} />
            {/* <Route exact path='/' render={ props => 
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
            (<EditProfile {...props} app={this}/>)}/>*/                           }
          </Switch>
        </BrowserRouter>
      </div>
      </div>
    );  
  }
}

export default App;
