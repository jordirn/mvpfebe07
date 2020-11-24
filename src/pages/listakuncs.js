import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from '../illustration/logoBRI.png';

export default function ListAkunCs() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark" id="Navbar">
        <Link to="/complaintpage" className="navbar-brand">
          <img src={logo} id="logoBRI" alt="Login"></img>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" id="marginleft">
            <Link to="/listtiketcs" className="nav-item nav-link ">Home</Link>
            <Link to="" className="nav-item nav-link">History</Link>
            <Link to="/listakuncs" className="nav-item nav-link active">Account CS</Link>
            <Link to="/registrationcs" className="nav-item nav-link">Regist CS</Link>
            <Link to="/" className="nav-item nav-link">Logout</Link>
          </div>
        </div>
      </nav>
      <div classNameName="container mt-5">
        <div className="col8">
          <table className="table text-center" id="auto">
            <thead className="thead-dark">
              <tr>
                <th scope="col" width="30" >No</th>
                <th scope="col" width="200">ID CS</th>
                <th scope="col" width="200">Nama CS</th>
                <th scope="col" width="200">Status</th>
                <th scope="col" width="200">Rating</th>
                <th scope="col" width="200">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>111</td>
                <td>CS1</td>
                <td>Active</td>
                <td></td>
                <td>
                  <a href="/datacs" type="button" className="btn btn-secondary">Edit</a>
                  <button type="button" className="btn btn-danger" id="spasi">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>112</td>
                <td>CS1</td>
                <td>Active</td>
                <td></td>
                <td><button type="button" className="btn btn-secondary">Edit</button>
                  <button type="button" className="btn btn-danger" id="spasi">Delete</button></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>113</td>
                <td>CS1</td>
                <td>Active</td>
                <td></td>
                <td><button type="button" className="btn btn-secondary">Edit</button>
                  <button type="button" className="btn btn-danger" id="spasi">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  )
}