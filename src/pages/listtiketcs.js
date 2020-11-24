import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from '../illustration/logoBRI.png';

export default function ListTiketCs() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark" id="Navbar">
          <img src={logo} id="logoBRI" alt="Login"></img>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" id="marginleft">
            <Link to="/listtiketcs" className="nav-item nav-link active">Home</Link>
            <Link to="" className="nav-item nav-link">History</Link>
            <Link to="/" className="nav-item nav-link">Logout</Link>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col" width="50">Categories</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    <label class="form-check-label" for="defaultCheck1">
                      Layanan Perbankan
                    </label>
                  </th>
                </tr>
                <tr>
                  <th scope="row"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    <label class="form-check-label" for="defaultCheck1">
                      Internet Banking
                    </label>
                  </th>
                </tr>
                <tr>
                  <th scope="row"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    <label class="form-check-label" for="defaultCheck1">
                      Mobile Banking
                    </label>
                  </th>
                </tr>
                <tr>
                  <th scope="row"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    <label class="form-check-label" for="defaultCheck1">
                      Others
                    </label>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col6">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col" width="30" >No</th>
                  <th scope="col" width="150">Customer ID</th>
                  <th scope="col" width="200">Tiket Status</th>
                  <th scope="col" width="130">Time</th>
                  <th scope="col" width="70">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>111</td>
                  <td>On Progress</td>
                  <td>27/11/2020 16:32</td>
                  <td><Link to="/lihattiket" type="button" class="btn btn-secondary">Open</Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>112</td>
                  <td>On Progress</td>
                  <td>27/11/2020 16:32</td>
                  <td><button type="button" class="btn btn-secondary">Open</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>113</td>
                  <td>Close</td>
                  <td>27/11/2020 16:32</td>
                  <td><button type="button" class="btn btn-secondary">Open</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  )
}