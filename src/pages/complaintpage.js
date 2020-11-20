import React, { Fragment } from "react";


export default function ComplaintPage(){
    return(
        <div className="row">
            <h3 className="heading3">Comlaint</h3>
                    <div className="col1">
                    <form style= {{width:"100%"}}>
                            <div className="form-group">
                                
                                <label for="subject">Subject</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="subject"
                                    placeholder = "Enter Subject"
                                />
                            </div>
                            <div className="form-group">
                                <label for="textArea">Example textarea</label>
                                <textarea class="form-control" id="textArea" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col">
                        <form>
                            <div className="form-group row">
                                <label for="inputFile">Additional File(s)</label>
                                <input type="file" className="form-control-file" id="inputFile"/>
                            </div>

                            <div className="form-group row">
                                
                                    <legend className="col-form-label">Category</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                                            <label className="form-check-label" for="gridRadios1">
                                                Perbankan 
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                            <label className="form-check-label" for="gridRadios2">
                                                Mobile Banking
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                            <label className="form-check-label" for="gridRadios2">
                                                Internet Banking
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                            <label className="form-check-label" for="gridRadios2">
                                                Others
                                            </label>
                                        </div>
                                    </div>
                                
                            </div>
                        

                        </form>
                    </div>
          
                </div>
    )
}

