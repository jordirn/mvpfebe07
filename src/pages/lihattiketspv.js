import React, { Fragment, useState } from "react";
import logo from '../illustration/login.svg';
import { Link } from "react-router-dom";
import RatingCustomerToCS from './popup';
import logo1 from '../illustration/logoBRI.png';

export default function LihatTiketSpv() {

    const [id, setId] = useState('');
    const [problem, setProblem] = useState('');
    const [reply, setReply] = useState('');

    const changeId = (i) => {
        const value = i.target.value
        setId(value)
    }
    const changeProblem = (p) => {
        const value = p.target.value
        setProblem(value)
    }
    const changeReply = (r) => {
        const value = r.target.value
        setReply(value)
    }

    const klikReply = () => {
        const data = {
            Id: id,
            problem: problem,
            reply: reply,
        }
        console.log(data)

    }


    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark" id="Navbar">
                    <img src={logo1} id="logoBRI" alt="Login"></img>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" id="marginleft">
                        <Link to="/listtiketspv" className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
                        <Link to="" className="nav-item nav-link">History</Link>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="Login">
                    <div className="row">
                        <div className="col1">
                            <h1 className="heading1">WELCOME TO</h1>
                            <h1 className="BRImo">BRI</h1>
                            <img src={logo} alt="ilustrasi login" />
                        </div>
                        <div className="col">
                            <form style={{ width: "100%" }}>
                                <div className="list-group-item disabled">
                                    <h3 className="heading3">Ticket</h3>
                                    <label htmlFor="idcustomer">ID Customer</label>
                                    <input
                                        type="idcustomer"
                                        className="form-control"
                                        id="idcustomer"
                                        value={id}
                                        onChange={changeId}
                                    />
                                </div>
                                <div className="list-group-item disabled" aria-disabled="true">
                                    <label htmlFor="problem">Problem</label>
                                    <textarea class="form-control" id="problem" rows="10"
                                        value={problem}
                                        onChange={changeProblem}
                                        placeholder=""
                                    />
                                </div>
                                <div className="list-group-item">
                                    <label htmlFor="reply">Reply</label>
                                    <textarea class="form-control" id="reply" rows="10"
                                        value={reply}
                                        onChange={changeReply}
                                    />
                                </div>
                                <button type="button" onClick={klikReply} className="btn btn-primary">Reply</button>
                            </form>
                        </div>
                        <RatingCustomerToCS />

                    </div>

                    <footer className="page-footer font-small blue">
                        <div className="footer-copyright text-center py-3">
                            Copyright © FE-BE 07 2020
                    </div>
                    </footer>

                </div>
            </div>
        </Fragment>
    )
}