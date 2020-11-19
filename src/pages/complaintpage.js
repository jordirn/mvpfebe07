import React, { Fragment } from "react";


export default function ComplaintPage(){
    return(
        <div className="row">
                    <div className="col1">
                    <form style= {{width:"100%"}}>
                            <div className="form-group">
                                <h3 className="heading3">Login</h3>
                                <label for="subject">Subject</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="subject"
                                    placeholder = "Enter Subject"
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
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col">
                        
                    </div>
          
                </div>
    )
}

