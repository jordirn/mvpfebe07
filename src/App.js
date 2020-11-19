import logo from './pic1.png';
import './App.css';
import Login from './pages/login.js'
import Registration from './pages/registration.js'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
        <div className="col1">
              <img src={logo} alt="ilustrasi login"/>
          </div>
          <div className="col">
              <Login/>
          </div>
          
        </div>
        <div className="row">
        <div className="col3">
              <img src={logo} alt="ilustrasi login"/>
          </div>
          <div className="col2">
              <Registration/>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
