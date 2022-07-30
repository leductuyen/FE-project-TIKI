import axiosClient from './axiosClient';

const userApi = {
    getAll(params) {
        const url = '/categories';
        return axiosClient.get(url, { params: params });
    },
    // get(id) {
    //     const url = `/categories/${id}`;
    //     return axiosClient.get(url)
    // },
    async register(data) {
        const url = '/User/create';
        const response = await axiosClient.post(url, data);
    
        if (response?.success) {
            return response._user;
        }
        return null;
    },
    login(data) {
        const url = '/auth/local';
        return axiosClient.post(url, data);
    },
    // update(data) {
    //     const url = `/categories/${data.id}`;
    //     return axiosClient.patch(url, data)
    // },
    // remove(id) {
    //     const url =  `/categories/${id}`;
    //     return axiosClient.delete(url)
    // }
};
export default userApi;
