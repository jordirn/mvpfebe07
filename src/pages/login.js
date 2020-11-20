import React from "react";
import { Link } from "react-router-dom";
import logo from '../illustration/login.svg';
import './pages.css';
import ComplaintPage from './complaintpage.js'

export default function Login() {
    return (
            <div className="Login">
                <div className="row">
                    <div className="col1">
                        <h1 className="heading1">WELCOME TO</h1>
                        <h1 className="BRImo">BRImo</h1>
                        <img src={logo} alt="ilustrasi login"/>
                    </div>
                    <div className="col">
                        <form style= {{width:"100%"}}>
                            <div className="form-group">
                                <h3 className="heading3">Login</h3>
                                <label for="username">Username</label>
                                <input 
                                    type="username" 
                                    className="form-control" 
                                    id="username"
                                    placeholder = "Enter Username"
                                />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password"
                                    placeholder = "Enter Password"
                                />
                                <small>
                                    <a href="default.asp" target="_blank">Forgot Password?</a>
                                </small>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                            <small className="form-text text-muted">
                                Don't have an account?
                                <Link to ="/registration"> Sign up.</Link>
                            </small>
                        </form>
                    </div>
                     <ComplaintPage/>
                </div>

                <footer className="page-footer font-small blue">
                    <div className="footer-copyright text-center py-3">
                        Copyright © FE-BE 07 2020 
                    </div>
                </footer>
            
            </div>
               
           
           
    )
}