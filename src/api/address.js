import axiosClient from './axiosClient';

const addressApi = {
    getAll(params) {
        const url = '/Province/Provinces';
        return axiosClient.get(url, { params: params });
    },
    get(id) {
        const url = `/Category/categories`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/Category/categories';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/Category/categories/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/Category/categories/${id}`;
        return axiosClient.delete(url);
    },
};
export default addressApi;
