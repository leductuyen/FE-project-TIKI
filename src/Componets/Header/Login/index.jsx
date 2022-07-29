// import React, { useState, useEffect } from 'react';

// import { Route, useHistory } from 'react-router-dom';

// import { AiFillCloseCircle } from 'react-icons/ai';

// // import ProductList from "src/Componets/Product/components/ProductList";
// // import { useNavigate } from "react-router-dom";

// import { Redirect } from 'react-router-dom';
// import { getUser, loginUser } from '../../../api/login';

// function Login() {
//     const [check, setCheck] = useState(true);
//     const [phonenumber, setphonenumber] = useState('');
//     const [password, setpassword] = useState('');
//     const [phonenumberError, setphonenumberError] = useState('');

//     const handleValidation = (event) => {
//         let formIsValid = true;
//         if (!phonenumber.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/)) {
//             formIsValid = false;
//             setphonenumberError('Wrong PhoneNumber format');
//             return false;
//         } else {
//             setphonenumberError('');
//             formIsValid = true;
//         }

//         return formIsValid;
//     };
//     useEffect(() => {
//         const fetch = async () => {
//             const data = await getUser;
//         };
//         fetch();
//     }, []);
//     const loginSubmit = (e) => {
//         e.preventDefault();
//         handleValidation();
//     };
//     const handleCheckLogin = () => {
//         if (!check) {
//             setCheck(true);
//         }
//     };

//     const handleCheckRes = () => {
//         if (check) {
//             setCheck(false);
//         }
//     };
//     // let navigate = useNavigate();

//     //   const goHome = () => {
//     //     navigate("/");
//     //   };

//     const history = useHistory();
//     const login = async (formData) => {
//         const getData = await loginUser(formData);
//         console.log(getData.data.token);
//         // let history = useHistory();
//         // history.push("/");
//         // if(getData.status === 200) return history.push("/home")
//         // <Redirect to='/home'  />
//     };
//     function handleClick() {
//         history.push('/home');
//     }
//     const loginbyphonenumber = () => {
//         const formData = JSON.stringify({
//             phoneNumber: phonenumber,
//             password: password,
//         });
//         //  login(formData);
//         handleClick();
//     };

//     const regbyphonenumber = () => {
//         history.push('/otp');
//     };

//     return (
//         <div className="wrap">
//             <AiFillCloseCircle className="icon__close" />
//             <div className="container">
//                 <div className="col-left">
//                     <div className="col-left-header">
//                         <button className="login" onClick={handleCheckLogin}>
//                             Dang nhap
//                         </button>
//                         <button className="register" onClick={handleCheckRes}>
//                             Dang ky
//                         </button>
//                     </div>

//                     <div className="col-left-body">
//                         {check ? (
//                             <form id="loginform" onSubmit={loginSubmit}>
//                                 <div className="form-group">
//                                     <label>Số Điện Thoại</label>
//                                     <input
//                                         type="phone number"
//                                         className="form-control"
//                                         id="exampleInputPhoneNumber1"
//                                         placeholder="Nhập số điện thoại"
//                                         onChange={(event) => setphonenumber(event.target.value)}
//                                     />
//                                     <label>Password</label>
//                                     <input
//                                         type="password"
//                                         className="form-control"
//                                         id="exampleInputPhoneNumber1"
//                                         placeholder="Nhập password"
//                                         onChange={(event) => setpassword(event.target.value)}
//                                     />
//                                     <small id="phonenumbererror" className="text-danger form-text">
//                                         {phonenumberError}
//                                     </small>
//                                 </div>
//                                 <div className="form-group form-check">
//                                     <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//                                     <label className="form-check-label">Check me out</label>
//                                 </div>
//                                 <button type="submit" onClick={loginbyphonenumber} className="btn btn-danger">
//                                     Tiep Tuc
//                                 </button>
//                                 <div className="gglogin">Hoac dang nhap bang</div>
//                             </form>
//                         ) : (
//                             <form id="registerform" onSubmit={loginSubmit}>
//                                 <div className="form-group">
//                                     <label>Phone Number</label>
//                                     <input
//                                         type="phone number"
//                                         className="form-control"
//                                         id="exampleInputPhonenumber1"
//                                         placeholder="Phone Number"
//                                         onChange={(event) => setphonenumber(event.target.value)}
//                                     />
//                                     <small id="phonenumbererror" className="text-danger form-text">
//                                         {phonenumberError}
//                                     </small>
//                                 </div>

//                                 <button type="submit" className="btn btn-danger button2" onClick={regbyphonenumber}>
//                                     Đăng ký
//                                 </button>
//                                 <div className="ggregister">Hoac dang ky bang</div>
//                             </form>
//                         )}
//                     </div>
//                 </div>
//                 <div className="col-right"></div>
//             </div>
//         </div>
//     );
// }
// export default Login;
