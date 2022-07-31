import React, { useContext, useEffect, useState } from 'react';
import productApi from '../../../../api/product';
import { Context } from '../../../../Context/Context';
import Product from '../Product';
import ProductSkeletonList from '../ProductSkeletonList';
import Styles from './ProductMain.module.scss';
import ProductNotFound from './ProductNotFound';

function ProductMain(props) {
    const { productList, setProductList, search } = useContext(Context);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState({
        _page: 1,
        _limit: 30,
    });

    useEffect(() => {
        const fetch = async () => {
            try {
                if (search) {
                    const { data } = await productApi.getBySearch({ inputSearch: search });
                    setProductList(data);
                } else {
                    const { data } = await productApi.getLazy(page._page, page._limit);
                    setProductList([...productList, ...data]);
                }
            } catch (error) {
                console.log('Failed', error);
            }
        };
        fetch();
    }, [page, search]);
    const handleClickButton = () => {
        setPage({ ...page, _page: page._page + 1 });
    };
    return (
        <div className={Styles.Main}>
            {loading ? (
                <ProductSkeletonList />
            ) : (
                <div className={Styles.LayOut}>
                    <div className={Styles.Container}>
                        {productList?.map((product) => (
                            <div className={Styles.Items} item key={product.ProductId}>
                                <Product product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {productList.length === 0 && <ProductNotFound />}
            <div className={Styles.ButtonLayOut}>
                <button className={Styles.ButtonStyles} onClick={handleClickButton}>
                    Xem Thêm
                </button>
            </div>
        </div>
    );
}

export default ProductMain;
