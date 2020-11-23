import React from "react";
import { Link } from "react-router-dom";
import logo from '../illustration/login.svg';
import './pages.css';
import Header from './header.js'
import Footer from './footer.js'
import ComplaintPage from './complaintpage.js'
import logo1 from '../illustration/logoBRI.png';

export default function Login() {

    return (

        <div className="Login">
                <nav className="navbar navbar-expand-lg navbar-dark" id="Navbar">
                    <Link  className="navbar-brand">
                        <img src={logo1} id="logoBRI" alt="Login"></img>
                    </Link>
                </nav>
            <div className="container">
                <div className="row">
                    <div className="col1">
                        <h1 className="heading1">COMPLAIN HANDLING</h1>
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
                                    <a href="/listtiketspv" type="submit" class="btn btn-primary">Login</a>
                                    <small className="form-text text-muted">
                                        Don't have an account?
                                <br />
                                        <Link to="/registration"> Sign up as Customer</Link>
                                        <br />
                                        <Link to="/registrationspv"> Sign up as Spv</Link>
                                    </small>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}