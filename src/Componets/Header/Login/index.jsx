import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import imgTiki from '../../../Image/Tiki.jpg';
import '../../Header/Login/Login.css';
// import RegForm from './components/RegForm/RegForm';
import { getUser, loginUser, OtpAPI } from '../../../api/login';
import { Context } from '../../../Context/Context';
import RecoverPassWord from '../RecoverPassWord';
import Login from './components/Login';
import Register from './components/Register';
import Otp from './components/Otp';
import RecoverPassWordForm from '../RecoverPassWordForm';

function LoRes(props) {
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const { setUserName } = useContext(Context);
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };
    const [check, setCheck] = useState(true);
    const [isOtp, setIsOtp] = useState(false);
    const [isValidOtp, setisValidOtp] = useState(false);
    const [isRegistration, setRegistration] = useState(false);
    const [isLogin, setLogin] = useState(false);
    const [bodyForm, setBodyForm] = useState();
    const [type, setType] = useState('login');

    const [phoneNumber, setphonenumber] = useState('');
    const [password, setpassword] = useState('');
    const [phonenumberError, setphonenumberError] = useState('');

    const handleValidation = (event) => {
        let formIsValid = true;
        if (!phoneNumber.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/)) {
            formIsValid = false;
            setphonenumberError('Wrong PhoneNumber format');
            return false;
        } else {
            setphonenumberError('');
            formIsValid = true;
        }

        return formIsValid;
    };
    useEffect(() => {
        const fetch = async () => {
            const data = await getUser;
        };
        fetch();
    }, []);
    const loginSubmit = (e) => {
        e.preventDefault();
        handleValidation();
    };
    const handleCheckLogin = () => {
        if (!check) {
            setCheck(true);
        }
    };

    const handleCheckRes = () => {
        setType('register');
        if (check) {
            setCheck(false);
        }
    };

    const history = useHistory();

    const login = async (formData) => {
        const user = await loginUser(formData);

        if (user?.token) {
            window.localStorage.setItem('USER', user.name);
            setUserName(user.name);
            props.handleClose();
        }
    };

    function handleClick() {
        history.push('/');
    }
    const loginbyphonenumber = async () => {
        const formData = {
            phoneNumber: phoneNumber,
            password: password,
        };
        console.log(formData);
        await login(formData);
        handleClick();
    };

    const registration = async () => {
        const data = await OtpAPI(phoneNumber);
        console.log(data);
        if (data !== null) {
            setIsOtp(true);
        }
    };

    const success = () => {
        setRegistration(true);
        // props.isRegistration = true;
        props.parentCallback(true);
        // handleClose();
    };

    //     const {
    //       register,
    //       handleSubmit,
    //       formState: { errors },
    //     } = useForm();
    //     const onSubmit = (data) => console.log(data);
    useEffect(() => {
        switch (type) {
            case 'login': {
                setBodyForm(
                    <Login setType={setType} setUserName={setUserName} handleClose={props.handleClose}></Login>,
                );
                break;
            }
            case 'register': {
                setBodyForm(
                    <Register setType={setType} setIsOtp={setIsOtp} setRegistration={setRegistration}></Register>,
                );
                break;
            }
            case 'otp': {
                setBodyForm(<Otp setType={setType} otp={otp} handleChange={handleChange} success={success}></Otp>);
                break;
            }
            case 'forgot': {
                setBodyForm(<RecoverPassWordForm></RecoverPassWordForm>);
                break;
            }
            default: {
                setBodyForm(<p>Unknown</p>);
            }
        }
    }, [type]);
    // const renderotp = () => {
    //     if (isValidOtp) {
    //         // return(<RegForm></RegForm>)
    //       return (
    //       <form className='CssReg' onSubmit={handleSubmit(onSubmit)}>
    //       <h6>Đăng ký thành công</h6>
    //       <div className="name_section">
    //         <label className="reg_row">Ho va ten</label>
    //         <input
    //           type="text"
    //           placeholder="Nhập họ và tên"
    //           {...register("fullName", { required: true })}
    //           // onChange={onChangeFullName}
    //         />
    //       </div>
    //       {errors?.fullName?.type === "required" && (
    //         <span className="valid-msg">Vui lòng nhập họ tên</span>
    //       )}
    //       {/* <p className="valid-msg">{validMsg.fullName}</p> */}

    //       <div className="phonenumber_section">
    //         <label className="reg_row">Số điện thoại</label>
    //         <input
    //           type="text"
    //           placeholder="Nhập số điện thoại"
    //           // onChange={onChangePhone}
    //           {...register("phoneNumber", {
    //             required: true,
    //             pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
    //           })}
    //         />
    //       </div>
    //       {/* <p className="valid-msg">{validMsg.phone}</p> */}
    //       {errors?.phoneNumber?.type === "required" && (
    //         <span className="valid-msg">Vui lòng nhập số điện thoại</span>
    //       )}
    //       {errors?.phoneNumber?.type === "pattern" && (
    //         <span className="valid-msg">Số điện thoại không hợp lệ</span>
    //       )}

    //       <div className="address_section">
    //         <label className="reg_row">Dia chi</label>
    //         <input
    //           type="text"
    //           placeholder="Nhập dia chi"
    //           // onChange={onChangeAddress}
    //           {...register("address", { required: true })}
    //         />
    //       </div>
    //       {/* <p className="valid-msg">{validMsg.address}</p> */}
    //       {errors?.address?.type === "required" && (
    //         <span className="valid-msg">Vui lòng nhập địa chỉ</span>
    //       )}

    //       <div className="city_section">
    //         <div className="city">
    //           <label className="reg_row">Tinh</label>
    //           <select
    //             className="option"
    //             {...register("city", { required: true })}
    //           >
    //             <option value="" disabled selected>
    //               Choose your option
    //             </option>
    //             <option value="1">Option 1</option>
    //             <option value="2">Option 2</option>
    //             <option value="3">Option 3</option>
    //           </select>
    //         </div>
    //       </div>
    //       {errors?.city?.type === "required" && (
    //         <span className="valid-msg">Vui lòng chọn thành phố</span>
    //       )}
    //       <div className="district_section">
    //         <div className="district">
    //           <label className="reg_row">Quan/Huyen</label>
    //           <select
    //             className="option"
    //             {...register("district", { required: true })}
    //           >
    //             <option value="" disabled selected>
    //               Choose your option
    //             </option>
    //             <option value="1">Option 1</option>
    //             <option value="2">Option 2</option>
    //             <option value="3">Option 3</option>
    //           </select>
    //         </div>
    //       </div>
    //       {errors?.district?.type === "required" && (
    //         <span className="valid-msg">Vui lòng chọn quận, huyện</span>
    //       )}
    //       <div className="ward_section">
    //         <div className="ward">
    //           <label className="reg_row">Phuong/xa</label>
    //           <select
    //             className="option"
    //             {...register("ward", { required: true })}
    //           >
    //             <option value="" disabled selected>
    //               Choose your option
    //             </option>
    //             <option value="1">Option 1</option>
    //             <option value="2">Option 2</option>
    //             <option value="3">Option 3</option>
    //           </select>
    //         </div>
    //       </div>
    //       {errors?.ward?.type === "required" && (
    //         <span className="valid-msg">Vui lòng chọn phường, xã</span>
    //       )}
    //       <div className="regbutton">
    //         <div className="cancel_button">
    //           <button type="button" className="btn btn-secondary">
    //             Cancel
    //           </button>
    //         </div>
    //         <div className="reg_button">
    //           <button
    //             type="submit"
    //             className="btn btn-danger"
    //             // onClick={onSubmitReg}
    //           >
    //             Dang ky
    //           </button>
    //         </div>
    //       </div>
    //     </form>);
    //     } else {
    //         return(
    //         <div className="otpp">
    //         <div id="otp-input">
    //             <div className="row">
    //                 <div className="col-left-header-otp">
    //                     <label>Nhập mã OTP</label>
    //                     <div className="text">Vui lòng nhập mã được gửi tới sđt </div>
    //                     <div className="otp-code">
    //                         {otp.map((data, index) => {
    //                             return (
    //                                 <input
    //                                     className="otp-field"
    //                                     type="text"
    //                                     name="otp"
    //                                     maxLength="1"
    //                                     key={index}
    //                                     value={data}
    //                                     onChange={(e) => handleChange(e.target, index)}
    //                                     onFocus={(e) => e.target.select()}
    //                                 />
    //                             );
    //                         })}
    //                     </div>
    //                     <button
    //                         className="btn btn-danger"
    //                         onClick={success}
    //                     >
    //                         Xác minh
    //                     </button>
    //                     <div className="resend_otp">
    //                         Không nhận đc mã ?&nbsp;
    //                         <a href="!#" className="text-blue-600">
    //                             Resend OTP
    //                         </a>
    //                     </div>
    //                 </div>
    //             </div>
    //             </div>
    //         </div>);
    //     }
    //   }

    return (
        <div className="wrapLogin">
            <div className="containerLogin">
                <div className="col-leftLogin">
                    <div className="col-left-header">
                        <button className="login" onClick={() => setType('login')}>
                            Đăng nhập
                        </button>
                        <button className="register" onClick={() => setType('register')}>
                            Đăng ký
                        </button>
                    </div>
                    <p>{bodyForm}</p>
                </div>
                <div className="col-right">
                    <img className="col-rightImg" src={imgTiki} alt=""></img>
                </div>

                {/* <Dialog open={isRegistration}>
                    <RegForm></RegForm>
                </Dialog> */}
            </div>
        </div>
    );
}
export default LoRes;
