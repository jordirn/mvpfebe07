import React, { Fragment, useState } from "react";
import logo from '../illustration/signup.svg';
import './pages.css';
import { Link } from "react-router-dom";
import logo1 from '../illustration/logoBRI.png';

export default function Registration() {


    const [email, setEmail] = useState('');
    const [ktp, setKtp] = useState('');
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [rekening, setRekening] = useState('');
    const [password, setPassword] = useState('');

    const changeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }
    const changeKtp = (k) => {
        const value = k.target.value
        setKtp(value)
    }
    const changeFullname = (f) => {
        const value = f.target.value
        setFullname(value)
    }
    const changePhone = (ph) => {
        const value = ph.target.value
        setPhone(value)
    }
    const changeUsername = (u) => {
        const value = u.target.value
        setUsername(value)
    }
    const changeRekening = (r) => {
        const value = r.target.value
        setRekening(value)
    }
    const changePassword = (pw) => {
        const value = pw.target.value
        setPassword(value)
    }

    const klikRegister = () => {
        const data = {
            email: email,
            ktp: ktp,
            fullname: fullname,
            phone: phone,
            username: username,
            rekening: rekening,
            password: password,
        }
        console.log(data)
        // // axios.post('http://localhost3000/registrationcostumerservice', data)
        // .then(result =>{
        //     console.log(result)
        // })
    }

    return (
        <Fragment>
            <div className="Regis">
                <nav className="navbar navbar-expand-lg navbar-dark" id="Navbar">
                        <img src={logo1} id="logoBRI" alt="Login" />
                        <Link to="/" className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
                </nav>
                    <div className="row">
                        <div className="col2">
                            <img src={logo} className="logo" alt="ilustrasi login" />
                            <h1 className="heading1">JOIN US!</h1>
                        </div>
                        <div className="col3">
                            <form>
                                <h3 className="heading3" id="marginbot">Registration</h3>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail">Email</label>
                                        <input type="email" className="form-control" id="inputEmail" placeholder="Email"
                                            value={email}
                                            onChange={changeEmail}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputKTP">No.KTP</label>
                                        <input type="text" className="form-control" id="inputKTP" placeholder="ID Number"
                                            value={ktp}
                                            onChange={changeKtp}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputFullName">Fullname</label>
                                        <input type="text" className="form-control" id="inputFullname" placeholder="Fullname"
                                            value={fullname}
                                            onChange={changeFullname}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputNoHP">No.HP</label>
                                        <input type="text" className="form-control" id="inputNoHP" placeholder="Phone Number"
                                            value={phone}
                                            onChange={changePhone}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputUsername">Username</label>
                                        <input type="username" className="form-control" id="inputUsername" placeholder="Username"
                                            value={username}
                                            onChange={changeUsername}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputNoRek">No.Rekening</label>
                                        <input type="text" className="form-control" id="inputNoRek" placeholder="Bank Account Number"
                                            value={rekening}
                                            onChange={changeRekening}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword">Password</label>
                                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"
                                            value={password}
                                            onChange={changePassword}
                                        />
                                    </div>
                                    <div className="button col-md-6">
                                        <button className="btn btn-primary"
                                            onClick={klikRegister}
                                        >Register</button>
                                        <small className="form-text text-muted">
                                            Already have an account?
                                <Link to="/"> Sign in.</Link>
                                        </small>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                <footer className="page-footer font-small blue">
                    <div className="footer-copyright text-center py-3">
                        Copyright © FE-BE 07 2020
                    </div>
                </footer>
            </div>
        </Fragment>
    )
}
