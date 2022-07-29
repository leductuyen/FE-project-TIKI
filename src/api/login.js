import Axios from 'axios';
const axiosClient = Axios.create({
    baseURL: 'https://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getUser = async () => {
    const response = await axiosClient.get('/User/users');
    console.log(response);

    if (response.status) {
        return response.data;
    }
    return [];
};

export const loginUser = async (formData) => {
    const value = await axiosClient.post('/Login/login', formData);
    return value;
};

export const getAllProduct = async () => {
    const response = await axiosClient.get('/Product/get');
    if (response.data?.success) return response.data.products;
    return [];
};
export const LoginAPI = async (user) => {
    const response = await axiosClient.post('/Login/login', user);

    if (response.data?.success) return response.data.token;
    return null;
};

export const OtpAPI = async (phoneNumber) => {
    debugger;
    const response = await axiosClient.get('/api/OTP/sendOpt/${phoneNumber}', phoneNumber);
    const url = `/api/OTP/sendOpt/${phoneNumber}`;
    return axiosClient.get(url);
};
