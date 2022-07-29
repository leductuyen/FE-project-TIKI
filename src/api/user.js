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
    register(data) {
        const url = '/auth/local/register';
        return axiosClient.post(url, data);
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
