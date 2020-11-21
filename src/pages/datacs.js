import React, { Fragment, } from "react";
import './pages.css';
import logo from '../illustration/login.svg';
import { Link } from "react-router-dom";

export default function DataCS() {


    // const [email, setEmail] = useState('');
    // const [ktp, setKtp] = useState('');
    // const [fullname, setFullname] = useState('');
    // const [phone, setPhone] = useState('');
    // const [username, setUsername] = useState('');
    // const [rekening, setRekening] = useState('');
    // const [password, setPassword] = useState('');

    // const changeEmail = (e) => {
    //     const value = e.target.value
    //     setEmail(value)
    // }
    // const changeKtp = (k) => {
    //     const value = k.target.value
    //     setKtp(value)
    // }
    // const changeFullname = (f) => {
    //     const value = f.target.value
    //     setFullname(value)
    // }
    // const changePhone = (ph) => {
    //     const value = ph.target.value
    //     setPhone(value)
    // }
    // const changeUsername = (u) => {
    //     const value = u.target.value
    //     setUsername(value)
    // }
    // const changeRekening = (r) => {
    //     const value = r.target.value
    //     setRekening(value)
    // }
    // const changePassword = (pw) => {
    //     const value = pw.target.value
    //     setPassword(value)
    // }

    // const klikRegister = () => {
    //     const data = {
    //         email: email,
    //         ktp: ktp,
    //         fullname: fullname,
    //         phone: phone,
    //         username: username,
    //         rekening: rekening,
    //         password: password,
    //     }
    //     console.log(data)
    //     // // axios.post('http://localhost3000/registrationcostumerservice', data)
    //     // .then(result =>{
    //     //     console.log(result)
    //     // })
    // }

    return (
        <Fragment>
            <div className="datacs">
                <div className="container">
                    <div className="row">
                        <div className="card-group">
                            <div className="card-text-center">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item disabled">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value="ID Customer Service"
                                        />
                                    </li>
                                    <li className="list-group-item disabled">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value="Nama Customer Service"
                                        />
                                    </li>
                                    <li className="list-group-item disabled">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value="Status"
                                        />
                                    </li>
                                    <li className="list-group-item disabled">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value="Rating"
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="card-group">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item disabled">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value=""
                                        />
                                    </li>
                                    <li className="list-group-item">
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </li>
                                    <li className="list-group-item disabled">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value="Active/Non-Active"
                                        />
                                    </li>
                                    <li className="list-group-item disabled">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value="Rating"
                                        />
                                    </li>
                                </ul>
                            </div>

                            <div className="col7">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Foto Profile</h5>
                                    <img src={logo} width="300px" />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <input class="btn btn-success" type="button" value="Active" />
                    <input class="btn btn-danger" type="button" value="Non-Active" />
                    <input class="btn btn-dark" type="button" value="Delete Account" />
                    <input class="btn btn-primary" type="submit" value="Save" />
                </div>
            </div>
        </Fragment>
    )
}
