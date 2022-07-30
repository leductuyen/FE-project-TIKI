import { format } from 'react-string-format';
import axiosClient from './axiosClient';

export const getUser = async () => {
    const response = await axiosClient.get('/User/users');
    console.log(response);

    if (response.status) {
        return response.data;
    }
    return [];
};

export const loginUser = async (formData) => {
    const response = await axiosClient.post('/Login/login', formData);
    
    if (response?.success) {
        return response;
    }
    return null;
};

export const getAllProduct = async () => {
    const response = await axiosClient.get('/Product/get');
    if (response.data?.success) return response.data.products;
    return [];
};

export const OtpAPI = async (phoneNumber) => {
    const response = await axiosClient.get(`/OTP/sendOpt/${phoneNumber}`);
    console.log(response);
    if (response?.success) return response?.OPTNumber;
    return null;
};

export const getProvices = async () => {
    // const response = await axiosClient.get('/api/OTP/sendOpt/${phoneNumber}', phoneNumber);
    const url = `/Province/Provinces`;
    const response = await axiosClient.get(url);

    if (response?.success) {
        return response?.Provinces;
    }
    return [];
};

export const getDistricts = async () => {
    // const response = await axiosClient.get('/api/OTP/sendOpt/${phoneNumber}', phoneNumber);
    const url = `/District/Districts`;
    const response = await axiosClient.get(url);
    console.log(response);
    if (response?.success) {
        return response?.Districts;
    }
    return [];
};

export const getWards = async () => {
    // const response = await axiosClient.get('/api/OTP/sendOpt/${phoneNumber}', phoneNumber);
    const url = `/Wards/Wards`;
    const response = await axiosClient.get(url);

    if (response?.success) {
        return response?.Wardss;
    }
    return [];
};
