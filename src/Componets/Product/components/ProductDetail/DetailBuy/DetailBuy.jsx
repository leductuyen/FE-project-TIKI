import React from 'react';
import Styles from './DetailBuy.module.scss';
import AddToCart from '../AddToCart';
import DeliveryAddress from './DeliveryAddress';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../Cart/cartSlice';

function DetailBuy({ detailItems }) {
    const dispatch = useDispatch();
    const handleAddToCart = (formValues) => {
        const action = addToCart({
            id: detailItems.detail?.product.ProductId,
            detailItems,
            quantity: formValues.quantity,
        });
        console.log('action', action);
        dispatch(action);
    };
    return (
        <div className={Styles.DiscountCode}>
            <div className={Styles.Text}>9 mã giảm giá</div>
            <div className={Styles.Tags}>
                <div className={Styles.CouponTag}>Giảm 10k</div>
                <div className={Styles.CouponTag}>Giảm 10k</div>
                <div className={Styles.CouponTag}>Giảm 10k</div>
                <img src="https://salt.tikicdn.com/ts/upload/63/43/b6/472934eece91531f0855b86a00a3b1a1.png" alt="" />
            </div>
            <div className={Styles.DeliveryZone}>
                <div className={Styles.DataviewId}>
                    <div className={Styles.Address}>
                        <div className={Styles.StylesSpan}>
                            <span>Giao đến</span>
                        </div>
                        <span>
                            <DeliveryAddress />
                        </span>
                        <div className={Styles.StylesSpan}>
                            <span className={Styles.AddressChange}>Đổi địa chỉ</span>
                        </div>
                    </div>
                </div>
                <div className={Styles.DeliveryZoneInner}>
                    <div className={Styles.InfoHeader}>
                        <div className={Styles.HeaderLogo}>
                            <img
                                src="https://salt.tikicdn.com/ts/upload/32/47/d7/5798c9bee17003cf7995c37930f0eeac.png"
                                alt=""
                            />
                        </div>
                        <div className={Styles.HeaderHighlight}>Thứ 3 ngày 5/7</div>
                    </div>
                    <div className={Styles.InfoNote}>17.000đ (Freeship 30k đh 149k)</div>
                </div>
                <div className={Styles.Buy}>
                    <div className={Styles.Quantity}></div>
                    <div className={Styles.Button}></div>
                </div>
            </div>

            <AddToCart onSubmit={handleAddToCart} />
        </div>
    );
}

export default DetailBuy;
