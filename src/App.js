import React from "react";
import './App.css';
import Login from './pages/login.js'
import Registration from './pages/registration.js'
import ComplaintPage from './pages/complaintpage.js'
import ListComplaint from './pages/listcomplaint.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationCustomerService from './pages/registrationcs';

function App () {
 
  return (
    <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/complaintpage" component={ComplaintPage} />
        <Route path="/listcomplaint" component={ListComplaint} />
        <Route path="/registrationcs" component={RegistrationCustomerService} />
    <div className="App">
     
      <footer className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3">
            Copyright © FE-BE 07 2020 
          </div>
      </footer>
    </div>
        
      
    </Switch>
    </Router>
    
  );
}

export default App;
