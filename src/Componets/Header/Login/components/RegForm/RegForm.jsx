import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDistricts, getProvices, getWards } from '../../../../../api/login';
import userApi from '../../../../../api/user';
import img from '../../../../../Image/Tiki.jpg';
import './RegForm.css';
// import Select from 'react-select';
const RegForm = (props) => {
    const { handleClose } = props;
    const [value, setValue] = React.useState('meat');

    const [address, setAddress] = React.useState({
        districts: [],
        provinces: [],
        wards: [],
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (formData) => {
        const data = await userApi.register(formData);
        if (data) {
            window.localStorage.setItem('USER',data?.Name)
            toast.success('Đăng ký thành công', { position: toast.POSITION.TOP_RIGHT });
            setTimeout(() => handleClose(), 1500);
        } else {
            toast.error('Đăng ký that bai! Xin hay thu lai', { position: toast.POSITION.TOP_RIGHT });
        }
    };

    useEffect(() => {
        getAddresses();
    }, []);

    const getAddresses = async () => {
        const provinces = await getProvices();

        const districts = await getDistricts();
        const wards = await getWards();

        setAddress({ wards: wards, districts: districts, provinces: provinces });
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // const getCity = async () => {
    //     const options = await CityAPI();
    //     setCity(options.data?.Provinces);
    // };

    // getCities();

    // const options = [
    //     { label: 'Fruit', value: 'fruit' },
    //     { label: 'Vegetable', value: 'vegetable' },
    //     { label: 'Meat', value: 'meat' },
    // ];

    return (
        <div className="Reg_container">
            <div className="left-col">
                <h5>Đăng ký thành công</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="name_section">
                        <label className="row">Họ và tên</label>
                        <input
                            type="text"
                            placeholder="Nhập họ và tên"
                            {...register('name', { required: true })}
                            // onChange={onChangeFullName}
                        />
                        {/* "userId": "string",
  "wardsID": "string",
  "name": "string",
  "password": "string",
  "typeAccount": "string",
  "phoneNumber": "string",
  "address": "string",
  "gmail": "string" */}
                    </div>
                    {errors?.fullName?.type === 'required' && <span className="valid-msg">Vui lòng nhập họ tên</span>}
                    {/* <p className="valid-msg">{validMsg.fullName}</p> */}

                    <div className="phonenumber_section">
                        <label className="row">Số điện thoại</label>
                        <input
                            type="text"
                            placeholder="Nhập số điện thoại"
                            // onChange={onChangePhone}
                            {...register('phoneNumber', {
                                required: true,
                                pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                            })}
                        />
                    </div>
                    {/* <p className="valid-msg">{validMsg.phone}</p> */}
                    {errors?.phoneNumber?.type === 'required' && (
                        <span className="valid-msg">Vui lòng nhập số điện thoại</span>
                    )}
                    {errors?.phoneNumber?.type === 'pattern' && (
                        <span className="valid-msg">Số điện thoại không hợp lệ</span>
                    )}

                    <div className="address_section">
                        <label className="row">Địa chỉ</label>
                        <input
                            type="text"
                            placeholder="Nhập dia chi"
                            // onChange={onChangeAddress}
                            {...register('address', { required: true })}
                        />
                    </div>
                    {/* <p className="valid-msg">{validMsg.address}</p> */}
                    {errors?.address?.type === 'required' && <span className="valid-msg">Vui lòng nhập địa chỉ</span>}
                    <div className="address_section">
                        <label className="row">Gmail</label>
                        <input
                            type="text"
                            placeholder="example@gmail.com"
                            // onChange={onChangeAddress}
                            {...register('gmail', { required: true })}
                        />
                    </div>
                    {/* <p className="valid-msg">{validMsg.address}</p> */}
                    {errors?.address?.type === 'required' && <span className="valid-msg">Vui lòng nhập địa chỉ</span>}
                    <div className="address_section">
                        <label className="row">Password</label>
                        <input
                            type="text"
                            placeholder="example@gmail.com"
                            // onChange={onChangeAddress}
                            {...register('password', { required: true })}
                        />
                    </div>
                    {/* <p className="valid-msg">{validMsg.address}</p> */}
                    {errors?.address?.type === 'required' && <span className="valid-msg">Vui lòng nhập địa chỉ</span>}

                    <div className="city_section">
                        <div className="city">
                            <label className="row">Tỉnh</label>
                            {/* className="option" {...register('city', { required: true })} */}
                            <select value="city">
                                <option value="" disabled selected>
                                    Vui lòng chọn thành phố
                                </option>
                                {address.provinces?.map((option) => (
                                    <option value={option.ProvinceId}>{option.NameProvince}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {errors?.city?.type === 'required' && <span className="valid-msg">Vui lòng chọn thành phố</span>}
                    <div className="district_section">
                        <div className="district">
                            <label className="row">Quận/Huyện</label>
                            <select className="option" {...register('district', { required: true })}>
                                <option value="" disabled selected>
                                    Vui lòng chọn quận, huyện
                                </option>
                                {address.districts?.map((option) => (
                                    <option value={option.DistrictId}>{option.NameDistrict}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {errors?.district?.type === 'required' && (
                        <span className="valid-msg">Vui lòng chọn quận, huyện</span>
                    )}
                    <div className="ward_section">
                        <div className="ward">
                            <label className="row">Phường/Xã</label>
                            <select className="option" {...register('wardsID', { required: true })}>
                                <option value="" disabled selected>
                                    Vui lòng chọn phường, xã
                                </option>
                                {address.wards?.map((option) => (
                                    <option value={option.WardsId}>{option.NameWards}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {errors?.ward?.type === 'required' && <span className="valid-msg">Vui lòng chọn phường, xã</span>}
                    <div className="regbutton">
                        <div className="cancel_button">
                            <button type="button" className="btn btn-secondary">
                                Bỏ qua
                            </button>
                        </div>
                        <div className="reg_button">
                            <button
                                type="submit"
                                className="btn btn-danger"
                                // onClick={onSubmitReg}
                            >
                                <ToastContainer
                                    position="top-right"
                                    autoClose={1000}
                                    hideProgressBar={true}
                                    closeOnClick
                                    draggable
                                />
                                Đăng Ký
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="right-col">
                <img src={img} className="tiki__img" alt=""></img>
            </div>
        </div>
        // </div>
    );
};

export default RegForm;
