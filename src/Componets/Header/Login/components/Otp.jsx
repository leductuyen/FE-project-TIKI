import React, { useState } from 'react';

function Otp(props) {
    const { setType, success, getOtp } = props;
    const [otp, setOtp] = useState(new Array(6).fill(''));

   
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        getOtp(otp);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };
    return (
        <div className="otpp">
            <div id="otp-input">
                
                    <div className="col-left-header-otp">
                        <label>Nhập mã OTP</label>
                        <div className="text">Vui lòng nhập mã được gửi tới sđt </div>
                        <div className="otp-code">
                            {otp.map((data, index) => {
                                return (
                                    <input
                                        className="otp-field"
                                        type="text"
                                        name="otp"
                                        maxLength="1"
                                        key={index}
                                        value={data}
                                        onChange={(e) => handleChange(e.target, index)}
                                        onFocus={(e) => e.target.select()}
                                    />
                                );
                            })}
                        </div>
                        <button className="btn btn-danger" onClick={success}>
                            Xác minh
                        </button>
                        <div className="resend_otp">
                            Không nhận đc mã ?&nbsp;
                            <a href="!#" className="text-blue-600">
                                Resend OTP
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default Otp;
