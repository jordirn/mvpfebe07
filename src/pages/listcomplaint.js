import React, { Fragment } from "react";
import Footer from './footer.js'
import logo1 from '../illustration/logoBRI.png';
import { Link } from "react-router-dom";


export default function ListComplaint() {
    return(
        <Fragment>

        
        <nav className="navbar navbar-expand-lg navbar-dark" id="Navbar">
            <img src={logo1} id="logoBRI" alt="Login"/>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <Link to="/listcomplaint" className="nav-item nav-link active">List Complaint </Link>
            <Link to="/complaintpage" class="nav-item nav-link">Complaint</Link>
            <Link to="/" className="nav-item nav-link">Logout</Link>
            </div>
            </div>
            </nav>
            <div className="container">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th scope="row">1</th>
                        <td>ATM Tertelan</td>
                        <td>-</td>
                        <td>Belum Diproses</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                        <td>ATM Tertelan</td>
                        <td>-</td>
                        <td>Belum Diproses</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                        <td>ATM Tertelan</td>
                        <td>-</td>
                        <td>Belum Diproses</td>
                    </tr>
                </tbody>
            </table>
           
        </div>
        <div class="btn-float">
                        <Link to ="/complaintpage" button type="submit" class="btn btn-primary">
                            <h5>
                                <i class="fa fa-plus"></i>
                                 New Complaint
                            </h5>
                            
                        </Link>
                    </div>
                    <Footer/>
        </Fragment>
    )   
}