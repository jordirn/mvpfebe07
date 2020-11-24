import React from "react";
import './App.css';
// import './login.css';
import Login from './pages/login.js'
import Registration from './pages/registration.js'
import ComplaintPage from './pages/complaintpage.js'
import ListComplaint from './pages/listcomplaint.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationCustomerService from './pages/registrationcs';
import RegistrationSupervisor from './pages/registrationspv';
import DataCS from './pages/datacs';
import ListTiketSpv from './pages/listtiketspv';
import LihatTiket from './pages/lihattiket';
import ListAkunCs from './pages/listakuncs';
import LoginCs from './pages/logincs';
import ListTiketCs from './pages/listtiketcs';
import LoginSpv from './pages/loginspv';
import LihatTiketSpv from './pages/lihattiketspv';
// import DataCS2 from './pages/datacs2';

function App () {
 
  return (
    <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/complaintpage" component={ComplaintPage} />
        <Route path="/listcomplaint" component={ListComplaint} />
        <Route path="/registrationcs" component={RegistrationCustomerService} />
        <Route path="/registrationspv" component={RegistrationSupervisor} />
        <Route path="/datacs" component={DataCS} />
        <Route path="/listtiketspv" component={ListTiketSpv} />
        <Route path="/lihattiket" component={LihatTiket} />
        <Route path="/listakuncs" component={ListAkunCs} />
        <Route path="/logincs" component={LoginCs} />
        <Route path="/loginspv" component={LoginSpv} />
        <Route path="/listtiketcs" component={ListTiketCs} />
        <Route path="/lihattiketspv" component={LihatTiketSpv} />
        {/* <Route path="/datacs2" component={DataCS2} /> */}
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
