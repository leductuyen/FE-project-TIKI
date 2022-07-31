import React, { useState } from 'react';
import { OtpAPI } from '../../../../api/login';

function Register(props) {
    const {setType, setRegistration, setIsOtp} = props
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
    const handleCheckRes = () => {
        setType("register")

    };
    const registration = async () => {
        const data = await OtpAPI(phoneNumber);
        console.log(data);
        if (data !== null) {
            setType("otp");
            setIsOtp(true);
        }
        
    };
    const success = () => {
        setRegistration(true);
        // props.isRegistration = true;
        props.parentCallback(true);
        // handleClose();
    };

    return (
        <div id="phoneNumber-input">
            <div className="form-group">
                <label>Số Điện Thoại</label>
                <input
                    type="phone number"
                    className="form-control"
                    id="exampleInputPhonenumber1"
                    placeholder="Phone Number"
                    onChange={(event) => setphonenumber(event.target.value)}
                />
                <small id="phonenumbererror" className="text-danger form-text">
                    {phonenumberError}
                </small>
            </div>

            <button type="submit" className="btn btn-danger button2" onClick={() => registration()}>
                Đăng ký
            </button>
            <div className="ggregister">Hoặc đăng ký bằng</div>
        </div>
    );
}

export default Register;
