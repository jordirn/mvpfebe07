import React from "react";
import { Link } from "react-router-dom";
import logo from '../illustration/login.svg';
import './pages.css';
import Footer from './footer.js'
import ComplaintPage from './complaintpage.js'
import logo1 from '../illustration/logoBRI.png';

export default function LoginCs() {

    return (

        <div className="Login">
                <nav className="navbar navbar-expand-lg navbar-dark" id="Navbar">
                        <img src={logo1} id="logoBRI" alt="Login"></img>
                </nav>
            <div className="container">
                    <div className="col1">
                        <h1 className="heading1">LOGIN CUSTOMER SERVICE</h1>
                        <h1 className="BRImo">BRI</h1>
                        <img src={logo} className="img-fluid" alt="Login"></img>
                </div>
                    <div className="col100">
                        <div className="card" style={{ width: "120%" }}>
                            <div className="card-body">
                                <form style={{ width: "100%" }}>
                                    <div className="form-group">
                                        <h3 className="heading3">Login</h3>
                                        <label for="username">Username</label>
                                        <input
                                            type="username"
                                            className="form-control"
                                            id="username"
                                            placeholder="Enter Username"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter Password"
                                        />
                                    </div>
                                    <a href="/listtiketcs" type="submit" class="btn btn-primary">Login</a>
                                    <small className="form-text text-muted">
                                    <br />
                                        <Link to="/"> Customer</Link>
                                    </small>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
            <Footer />
        </div>
    )
}