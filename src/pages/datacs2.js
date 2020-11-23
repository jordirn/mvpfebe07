// import React, { Fragment, Component, ImageUpload,} from "react";
// import './pages.css';
// import logo from '../illustration/login.svg';
// import { Link } from "react-router-dom";


// class DataCS2 extends Component {
//         constructor(props) {
//           super(props);
//           this.state = {file: '',imagePreviewUrl: ''};
//         }

//         _handleSubmit(e) {
//           e.preventDefault();
//           // TODO: do something with -> this.state.file
//           console.log('handle uploading-', this.state.file);
//         }

//         _handleImageChange(e) {
//           e.preventDefault();

//           let reader = new FileReader();
//           let file = e.target.files[0];

//           reader.onloadend = () => {
//             this.setState({
//               file: file,
//               imagePreviewUrl: reader.result
//             });
//           }

//           reader.readAsDataURL(file)
//         }

//         render() {
//           let {imagePreviewUrl} = this.state;
//           let $imagePreview = null;
//           if (imagePreviewUrl) {
//             $imagePreview = (<img src={imagePreviewUrl} />);
//           } else {
//             $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
//           }

//           return (
//             <div className="previewComponent">
//               <form onSubmit={(e)=>this._handleSubmit(e)}>
//                 <input className="fileInput" 
//                   type="file" 
//                   onChange={(e)=>this._handleImageChange(e)} />
//                 <button className="submitButton" 
//                   type="submit" 
//                   onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
//               </form>
//               <div className="imgPreview">
//                 {$imagePreview}
//               </div>
//             </div>
//           )
//         }
//       }

//       ReactDOM.render(<ImageUpload/>, document.getElementById("mainApp"));

//   export default DataCS2;


// // export default function DataCS2() {

// //     // const [realname, setRealname] = useState('');
// //     // const [fakename, setFakename] = useState('');
// //     // const [password, setPassword] = useState('');
// //     // const [photo, setPhoto] = useState('');

// //     // const changeRealname = (r) => {
// //     //     const value = r.target.value
// //     //     setRealname(value)
// //     // }
// //     // const changeFakename = (f) => {
// //     //     const value = f.target.value
// //     //     setFakename(value)
// //     // }
// //     // const changePassword = (p) => {
// //     //     const value = p.target.value
// //     //     setPassword(value)
// //     // }
// //     // const changePhoto = (ph) => {
// //     //     const value = ph.target.value
// //     //     setPhoto(value)
// //     // }

// //     // const klikRegister = () => {
// //     //     const data = {
// //     //         realname: realname,
// //     //         fakename: fakename,
// //     //         password: password,
// //     //         photo: photo,
// //     //     }
// //     //     console.log(data)
// //     //     // // axios.post('http://localhost3000/registrationcostumerservice', data)
// //     //     // .then(result =>{
// //     //     //     console.log(result)
// //     //     // })
// //     // }

// //     return (
// //         <Fragment>
// //             <div className="Regiscs">
// //                 <nav className="navbar navbar-expand-lg navbar-dark" id="Navbar">
// //                     <Link to="/complaintpage" className="navbar-brand">
// //                         {/* <img src={logo1} id="logoBRI" alt="Login"/> */}
// //                     </Link>
// //                 </nav>
// //                 <div className="container mt-5">
// //                     <form style={{ width: "100%" }}>
// //                         <div className="row">
// //                             <div className="col1">
// //                                 <img src={logo} alt="ilustrasi login" id="imgregiscs" />
// //                             </div>
// //                             <div className="col">
// //                                 {/* <div className="form-group">
// //                                     <h3 className="heading3">Customer Service Registration</h3>
// //                                     <label htmlFor="RealName" id="margintop">Real Name</label>
// //                                     <input
// //                                         type="text"
// //                                         className="form-control"
// //                                         id="RealName"
// //                                         placeholder="Enter Real Name"
// //                                         value={realname}
// //                                         onChange={changeRealname}
// //                                     />
// //                                 </div>
// //                                 <div className="form-group">
// //                                     <label htmlFor="FakeName">Fake Name</label>
// //                                     <input
// //                                         type="text"
// //                                         className="form-control"
// //                                         id="FakeName"
// //                                         placeholder="Enter Fake Name"
// //                                         value={fakename}
// //                                         onChange={changeFakename}
// //                                     />
// //                                 </div>
// //                                 <div className="form-group">
// //                                     <label htmlFor="Password">Password</label>
// //                                     <input
// //                                         type="password"
// //                                         className="form-control"
// //                                         id="Password"
// //                                         placeholder="Enter Password"
// //                                         value={password}
// //                                         onChange={changePassword}
// //                                     />
// //                                 </div> */}
// //                                 <div className="form-group">
// //                                     <label htmlFor="File1">Upload Real Photo</label>
// //                                     <input type="file" className="form-control-file" id="File1"

// //                                     />
// //                                 </div>
// //                                 <div className="form-group">
// //                                     <label htmlFor="File2">Upload Fake Photo</label>
// //                                     <input type="file" className="form-control-file" id="File2"  />
// //                                 </div>
// //                                 {/* <a className="btn btn-primary" onClick={klikRegister}>Register Now</a> */}
// //                             </div>
// //                         </div>
// //                     </form>
// //                 </div>
// //             </div>
// //         </Fragment>
// //     )
// // }

import React, { Component } from 'react';
Image axios from 'axios';


class App extends Component{

    state = {
        file:null
    }

    handleFile(e){

        let file=e.target.files[0]

        this.setState({file: file})

    }

    handleUpload(e){

        let file = this.state.file

        let formdata =  new FormData()

        formdata.append('image', file)
        formdata.append('name', "Jordie")

        axios({
            url: '/some/api',
            method: "POST",
            headers:{
                authorization: 'your token'
            },
            data: formdata
        }).then((res)=>{

        },(err)=>{

        }
    )

    }

    render(){
        return(
            <div className="App">

            <h1>THE FORM</h1>

            <form>
            <div className="">
                <label>Select File</label>
                <input type="file" name="file" onChange={(e)=>this.handleFile(e)}/>
            </div>

            <br />

            <button type="button" onClick={(e)=>this.handleUpload(e)}>Upload</button>
            </form>
        </div>
        )
    }
}