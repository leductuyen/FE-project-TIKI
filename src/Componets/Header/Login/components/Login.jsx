import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import '../../../Header/Login/Login.css';
// import RegForm from './components/RegForm/RegForm';
import { getUser, loginUser } from '../../../../api/login';


function Login(props) {
    const {setUserName,setType, handleClick} = props
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
    
    const login = async (formData) => {
        const user = await loginUser(formData);

        if (user?.token) {
            window.localStorage.setItem('USER', user.name);
            setUserName(user.name);
            props.handleClose();
        }
    };

    const loginbyphonenumber = async () => {
        const formData = {
            phoneNumber: phoneNumber,
            password: password,
        };
        console.log(formData);
        await login(formData);
        handleClick();
    };

    return (
        <div className="col-left-body">
            <form id="loginform" onSubmit={loginSubmit}>
                <div className="form-group">
                    <label>Số Điện Thoại</label>
                    <input
                        type="phone number"
                        className="form-control"
                        id="exampleInputPhoneNumber1"
                        placeholder="Nhập số điện thoại"
                        onChange={(event) => setphonenumber(event.target.value)}
                    />
                    <label>Mật Khẩu</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPhoneNumber1"
                        placeholder="Nhập password"
                        onChange={(event) => setpassword(event.target.value)}
                    />
                    <small id="phonenumbererror" className="text-danger form-text">
                        {phonenumberError}
                    </small>
                </div>
                <div className="form-group form-check">
                    <a className="text-blue-600" onClick={() => setType('forgot')}>
                        Quên mật khẩu?
                    </a>
                </div>
                <button type="submit" onClick={loginbyphonenumber} className="btn btn-danger">
                    Tiếp Tục
                </button>
                <div className="gglogin">Hoặc đăng nhập bằng</div>
            </form>
        </div>
    );
}

export default Login;
