import React from 'react';
import Styles from './Product.module.scss';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    const history = useHistory();
    const handleDetailPageClick = () => {
        history.push(`detail/${product.ProductId}`);
    };
    const ImageUrl = product.ImageURL;

    return (
        <div className={Styles.Click} onClick={handleDetailPageClick}>
            <div className={Styles.Thumbnail}>
                <img src={ImageUrl} alt="" width="250px" height="250px" />
            </div>
            <div className={Styles.Info}>{product.Name}</div>
            <div className={Styles.Price}>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.Price)}
                {product.Quantity > 0 ? `-${product.Quantity}%` : ''}
            </div>
        </div>
    );
}

export default Product;
