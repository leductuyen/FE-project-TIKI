import React from 'react';

function Otp(props) {
    const { setType, otp, handleChange, success } = props;
    return (
        <div className="otpp">
            <div id="otp-input">
                <div className="row">
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
        </div>
    );
}

export default Otp;
