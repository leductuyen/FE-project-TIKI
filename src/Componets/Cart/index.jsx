import React from 'react';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector, cartItemsTotalSelector, ProductcartItems } from './selectors';
import Styles from './Cart.module.scss';
import Cart from './Cart';
import ZaloPay from '../../Image/ZaloPay.png';
function CartProduct(props) {
    const ProductCartItems = useSelector(ProductcartItems);
    const CountCartItems = useSelector(cartItemsCountSelector);
    console.log('count', CountCartItems);
    const TotalCartItems = useSelector(cartItemsTotalSelector);
    console.log('total', TotalCartItems);
    return (
        <div className={Styles.MainCart}>
            <h4>Giỏ hàng</h4>

            <div className={Styles.Content}>
                <div className={Styles.Left}>
                    <Cart ProductCartItems={ProductCartItems} CountCartItems={CountCartItems} />
                </div>
                <div className={Styles.Right}>
                    <div className={Styles.RowTop}>
                        <div className={Styles.Voucher}>
                            <div className={Styles.TikiFree}>Tiki Khuyến mãi</div>
                            <div className={Styles.TikiQuantity}>Có thể chọn 2</div>
                        </div>
                        <div className={Styles.VoucherZalo}>
                            <div className={Styles.ZaloImg}>
                                <img src={ZaloPay} alt="" />
                            </div>
                            <div className={Styles.ZaloContentVoucher}>
                                <span className={Styles.ZaloContent}>Giảm 20k</span>
                                <span className={Styles.ZaloApply}>
                                    <button>Áp dụng</button>
                                </span>
                            </div>
                        </div>
                        <div className={Styles.OtherFree}>Chọn hoặc nhập mã khuyến mã khác</div>
                    </div>
                    <div className={Styles.TotalItems}>
                        <div className={Styles.Provisional}>
                            <span className={Styles.TotalTitle}>Tạm tính</span>
                            <span>
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                    TotalCartItems,
                                )}
                            </span>
                        </div>
                        <div className={Styles.Total}>
                            <span className={Styles.TotalTitle}>Tổng tiền</span>
                            <div>
                                <span className={Styles.TotalMoney}>
                                    {' '}
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                        TotalCartItems,
                                    )}
                                </span>
                                <div className={Styles.Vat}>(Đã bao gồm VAT nếu có)</div>
                            </div>
                        </div>
                    </div>
                    <button className={Styles.Purchase}>Mua hàng({CountCartItems})</button>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
