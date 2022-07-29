import axiosClient from './axiosClient';

const productApi = {
    async getAll(params) {
        // const result = await axiosClient.get(`/Product/get/${params._page}/${params._limit}`);
        const result = await axiosClient.get('/Product/all/');

        return {
            data: result?.products || [],
            // pagination: {
            //     page: params._page,
            //     limit: params._limit,
            //     total: result?.pageTotal,
            // },
        };
    },
    async getLazy(_page, _limit) {
        const result = await axiosClient.get(`/Product/get/${_page}/${_limit}`);
        return {
            data: result?.products || [],
        };
    },
    async getBySearch(params) {
        const result = await axiosClient.post('/Product/search', params);

        return {
            data: result?.products || [],
        };
    },
};
export default productApi;
