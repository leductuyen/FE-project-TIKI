import React from 'react';
import Styles from './Cart.module.scss';
import PropTypes from 'prop-types';
Cart.propTypes = {
    ProductCartItems: PropTypes.array,
};
function Cart(props) {
    const { ProductCartItems } = props;

    console.log(ProductCartItems);
    return (
        <div className={Styles.ElementProduct}>
            <label>Tất cả</label>
            <span className={Styles.ElementProductSpan}>Đơn giá</span>
            <span className={Styles.ElementProductSpan}>Số lượng</span>
            <span className={Styles.ElementProductSpan}>Thành tiền</span>
        </div>
    );
}

export default Cart;
