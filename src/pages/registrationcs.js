import React, { Fragment, useState } from "react";
import logo from '../illustration/signup.svg';
import logo1 from '../illustration/logoBRI.png';
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


const RegistrationCustomerService = () => {

    const [realname, setRealname] = useState('');
    const [fakename, setFakename] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');

    const changeRealname = (r) => {
        const value = r.target.value
        setRealname(value)
    }
    const changeFakename = (f) => {
        const value = f.target.value
        setFakename(value)
    }
    const changePassword = (p) => {
        const value = p.target.value
        setPassword(value)
    }
    const changePhoto = (ph) => {
        const value = ph.target.value
        setPhoto(value)
    }

    const klikRegister = () => {
        const data = {
            realname: realname,
            fakename: fakename,
            password: password,
            photo: photo,
        }
        console.log(data)
        // // axios.post('http://localhost3000/registrationcostumerservice', data)
        // .then(result =>{
        //     console.log(result)
        // })
    }

    return (
        <Fragment>
            <div className="Regiscs">
                <nav className="navbar navbar-expand-lg navbar-dark" id="Navbar">
                    <Link to="/complaintpage" className="navbar-brand">
                        <img src={logo1} id="logoBRI" alt="Login"/>
                    </Link>
                </nav>
                <div className="container mt-5">
                    <form style={{ width: "100%" }}>
                        <div className="row">
                            <div className="col1">
                                <img src={logo} alt="ilustrasi login" id="imgregiscs" />
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <h3 className="heading3">Customer Service Registration</h3>
                                    <label htmlFor="RealName" id="margintop">Real Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="RealName"
                                        placeholder="Enter Real Name"
                                        value={realname}
                                        onChange={changeRealname}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="FakeName">Fake Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="FakeName"
                                        placeholder="Enter Fake Name"
                                        value={fakename}
                                        onChange={changeFakename}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="Password"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={changePassword}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="File1">Upload Real Photo</label>
                                    <input type="file" className="form-control-file" id="File1"
                                    value={photo}
                                    onChange={changePhoto}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="File2">Upload Fake Photo</label>
                                    <input type="file" className="form-control-file" id="File2"  />
                                </div>
                                <a className="btn btn-primary" onClick={klikRegister}>Register Now</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default RegistrationCustomerService