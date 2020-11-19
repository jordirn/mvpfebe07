import React, { Fragment } from "react";

export default function Login() {
    return (
        <Fragment>
            
            <div className="Login">
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
                    <a href="default.asp" target="_blank"> Sign up.</a>
                </small>
            </form>
            </div>
        </Fragment>
    )
}