import React from "react";
import { Link } from "react-router-dom";
import logo from '../illustration/login.svg';
import './pages.css';
import Header from './header.js'
import Footer from './footer.js'
import ComplaintPage from './complaintpage.js'

export default function Login() {
    
    return (
            <div className="Login">
               
                <div className="row">
                    <div className="col1">
                        <h1 className="heading1">COMPLAIN HANDLING</h1>
                        <h1 className="BRImo">BRImo</h1>
                        <img src={logo} className="img-fluid" alt="Login"></img>
                    </div>
                    <div className="col1">
                    <div className="card" style={{width:"120%"}}>
                        <div className="card-body">
                        <form 
                            style= {{width:"100%"}}
                        >
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
                               
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                            <small className="form-text text-muted">
                                Don't have an account?
                                <Link to ="/registration"> Sign up.</Link>
                                <Link to ="/complaintpage"> complaintpage</Link>
                            </small>
                        </form>   
                        </div>
                    </div>
                        
                    </div>
                   
                </div>
                <Footer/>
            </div>
               
           
           
    )
}