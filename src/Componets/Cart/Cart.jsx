import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PropTypes from 'prop-types';
import { default as React } from 'react';
import Styles from './Cart.module.scss';
import freeship from '../../Image/freeship.png';
Cart.propTypes = {
    ProductCartItems: PropTypes.array,
    CountCartItems: PropTypes.number,
};
const useStyles = makeStyles((theme) => ({
    rootMain: {
        width: 550,
        paddingLeft: '15px',
        paddingRight: '15px',
        display: 'flex',
    },
    rootMain1: {
        width: 550,
        paddingLeft: '15px',
        paddingRight: '15px',
        display: 'flex',
    },
    margin: {
        height: theme.spacing(3),
    },
    Slider1: {
        color: 'rgb(235,235,240)',
    },
    Slider2: {
        color: 'rgb(8, 145, 72);',
    },
}));

const marks = [
    {
        value: 0,
        label: 'Mua',
    },
    {
        value: 50,
        label: '149k',
    },

    {
        value: 100,
        label: '299k',
    },
];

function Cart(props) {
    const classes = useStyles();
    const { ProductCartItems, CountCartItems } = props;

    console.log(ProductCartItems);
    return (
        <div>
            <div className={Styles.ElementProduct}>
                <label>Tất cả({CountCartItems} sản phẩm)</label>
                <span className={Styles.ElementProductSpan}>Đơn giá</span>
                <span className={Styles.ElementProductSpan}>Số lượng</span>
                <span className={Styles.ElementProductSpan}>Thành tiền</span>
            </div>
            <div className={Styles.Seller}>
                <div className={Styles.Store}>
                    <div className={Styles.LayOutStore}>
                        <StorefrontIcon />
                    </div>
                    <div className={Styles.LayOutStore}>DDHCM STORE</div>
                </div>
                <div className={classes.rootMain}>
                    <div className={classes.margin} />

                    <Slider className={classes.Slider1} defaultValue={[50, 100]} marks={marks} />
                    <div className={Styles.FreeShip}>
                        <img src={freeship} alt="" />
                    </div>
                </div>
                <div className={Styles.CodeFree}>
                    <div className={Styles.Title}>Để nhận FreeShip 10k</div>
                    <span className={Styles.CodeFreeSpan}>Mua thêm 149k</span>
                </div>
                {ProductCartItems.map((items) => (
                    <div className={Styles.ProductMain}>
                        <div className={Styles.Col1}>
                            <div className={Styles.ProductImage}>
                                <img src={items?.detailItems.detail.product.ImageURL} alt="" />
                            </div>
                            <div className={Styles.ProductName}>{items?.detailItems.detail.product.Name}</div>
                        </div>

                        <div className={Styles.Col2}>
                            <div className={Styles.Price}>
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                    items?.detailItems.detail.product.Price,
                                )}
                            </div>

                            <div className={Styles.Quantity}>
                                {items?.detailItems.detail.product.Quantity > 0
                                    ? `-${items?.detailItems.detail.product.Quantity}%`
                                    : ''}
                            </div>
                        </div>
                        <div className={Styles.Col3}>{items?.quantity}</div>
                        <div className={Styles.Col4}>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                items?.detailItems.detail.product.Price,
                            )}
                        </div>
                    </div>
                ))}
                <div className={Styles.ProductMain}>
                    <div className={Styles.Col1Free}>
                        <div className={Styles.ProductImage}>
                            <img
                                src="https://salt.tikicdn.com/cache/w78/ts/product/93/f2/45/7699d787850e4185fb61bef7b4a1a229.jpg.webp"
                                alt=""
                            />
                        </div>
                        <div className={Styles.ProductName}>
                            <div className={Styles.StylesCodeFreeSpan}>
                                <span className={Styles.CodeFreeSpan}>Quà tặng</span>
                            </div>
                            Kẹp Dán Cố định Dây cáp, Dây sạc điện thoại ...
                        </div>
                    </div>
                    <div className={Styles.Col2}>
                        <div className={Styles.PriceFree}>Miễn phí</div>
                    </div>
                    <div className={Styles.Col3Free}>Số lượng : 1</div>
                    <div className={Styles.Col4Free}>
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(0)}
                    </div>
                </div>
            </div>
            <div className={Styles.Seller}>
                <div className={Styles.Store}>
                    <div className={Styles.LayOutStore}>
                        <StorefrontIcon />
                    </div>
                    <div className={Styles.LayOutStore}>Tiki Trading</div>
                </div>
                <div className={classes.rootMain1}>
                    <div className={classes.margin} />

                    <Slider className={classes.Slider2} defaultValue={[50, 100]} marks={marks} />
                </div>
                <div className={Styles.Yay}>Yay!Bạn đã được FreeShip 20k</div>

                <div className={Styles.ProductMain}>
                    <div className={Styles.Col1}>
                        <div className={Styles.ProductImage}>
                            <img
                                src="https://salt.tikicdn.com/cache/w78/ts/product/f4/60/cc/da5384b960bae1effd0b79682c35bb2c.jpg.webp"
                                alt=""
                            />
                        </div>
                        <div className={Styles.ProductName}>Apple iphone 13 pro 128gb </div>
                    </div>

                    <div className={Styles.Col2}>
                        <div className={Styles.Price}>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(24000000)}
                        </div>

                        <div className={Styles.Quantity}></div>
                    </div>
                    <div className={Styles.Col3}>1</div>
                    <div className={Styles.Col4}>
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(24000000)}
                    </div>
                </div>
                <div className={Styles.ProductMain}>
                    <div className={Styles.Col1}>
                        <div className={Styles.ProductImage}>
                            <img
                                src="https://salt.tikicdn.com/cache/w78/ts/product/84/67/ae/517d626c834c7f31c6377df4cd14c71b.jpg.webp"
                                alt=""
                            />
                        </div>
                        <div className={Styles.ProductName}>Apple iphone 11 64gb </div>
                    </div>

                    <div className={Styles.Col2}>
                        <div className={Styles.Price}>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(12000000)}
                        </div>

                        <div className={Styles.Quantity}></div>
                    </div>
                    <div className={Styles.Col3}>1</div>
                    <div className={Styles.Col4}>
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(12000000)}
                    </div>
                </div>
                <div className={Styles.ProductMain}>
                    <div className={Styles.Col1}>
                        <div className={Styles.ProductImage}>
                            <img
                                src="https://salt.tikicdn.com/cache/w78/ts/product/56/59/a8/96e2ea1400e08736be7467323e45287e.jpg.webp"
                                alt=""
                            />
                        </div>
                        <div className={Styles.ProductName}>Apple iphone 13 pro 128gb xanh</div>
                    </div>

                    <div className={Styles.Col2}>
                        <div className={Styles.Price}>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(33000000)}
                        </div>

                        <div className={Styles.Quantity}></div>
                    </div>
                    <div className={Styles.Col3}>1</div>
                    <div className={Styles.Col4}>
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(33000000)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
