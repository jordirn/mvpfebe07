import React, { Fragment } from "react";

export default function Login() {
    return (
        <Fragment>
            
            <div className="Login">
            <form style= {{width:"100%"}}>
                <div className="form-group">
                    <h2 className="text-center">Login</h2>
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
                    <small className="form-text text-muted">Forgot Password?</small>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
                <small className="form-text text-muted">Don't Have An Account? Sign Up.</small>
            </form>
            </div>
        </Fragment>
    )
}