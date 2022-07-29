import React from 'react';
import { useSelector } from 'react-redux';
import { ProductcartItems } from './selectors';
import Styles from './Cart.module.scss';
import Cart from './Cart';

function CartProduct(props) {
    const ProductCartItems = useSelector(ProductcartItems);

    return (
        <div className={Styles.MainCart}>
            <h4>Giỏ hàng</h4>

            <div className={Styles.Content}>
                <div className={Styles.Left}>
                    <Cart ProductCartItems={ProductCartItems} />
                </div>
                <div className={Styles.Right}>Right</div>
            </div>
        </div>
    );
}

export default CartProduct;
