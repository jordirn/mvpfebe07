import logo from './illustration/login.svg';
import './App.css';
import Login from './pages/login.js'
import Registration from './pages/registration.js'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
        <div className="col1">
              <h1 className="heading1">WELCOME TO</h1>
              <h1 className="BRImo">BRImo</h1>
              <img src={logo} alt="ilustrasi login"/>
          </div>
          <div className="col">
              <Login/>
          </div>
          
        </div>
        <div className="row">
        <div className="col1">
              <img src={logo} className="logo" alt="ilustrasi login"/>
          </div>
          <div className="col2">
              <Registration/>
          </div>
        </div>
      </div>
      <footer className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3">
            Copyright © FE-BE 07 2020 
          </div>
      </footer>
    </div>
  );
}

export default App;
