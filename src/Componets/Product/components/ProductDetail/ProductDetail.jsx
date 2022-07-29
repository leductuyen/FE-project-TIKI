import React from 'react';
import DetailBuy from './DetailBuy/DetailBuy';
import Styles from './ProductDetail.module.scss';
import HomeIcon from '@material-ui/icons/Home';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import detailApi from '../../../../api/detail';

function ProductDetail() {
    const [detailItems, setDetailItems] = useState([]);
    const {
        params: { deatailId },
    } = useRouteMatch();
    useEffect(() => {
        (async () => {
            try {
                const data = await detailApi.get(deatailId);
                setDetailItems(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [deatailId]);
    const detailImg = detailItems.detail?.product.ImageURL;
    return (
        <div className={Styles.Container}>
            <div className={Styles.BreadCrum}>
                <div className={Styles.ItemBreadCrum}>
                    <div className={Styles.Home}>
                        <div className={Styles.IconsHome}>
                            <HomeIcon />
                        </div>
                    </div>
                    <div className={Styles.IconText}> {detailItems.detail?.supplier.NameShop}</div>
                    <div className={Styles.Home}>
                        <div className={Styles.IconsHome}>
                            <GroupAddIcon />
                        </div>
                    </div>
                    <div className={Styles.IconText}> {detailItems.detail?.supplier.QuantityFollower}</div>
                    <div className={Styles.Home}>
                        <div className={Styles.IconsHome}>
                            <ChatBubbleOutlineIcon />
                        </div>
                    </div>
                    <div className={Styles.IconText}> {detailItems.detail?.supplier.PercentRepChat}</div>
                    <div className={Styles.Home}></div>
                    <div className={Styles.IconText}> Địa chỉ Shop : {detailItems.detail?.supplier.AddressShop}</div>
                </div>
            </div>
            <div className={Styles.Wrapper}>
                <div className={Styles.Left}>
                    <img src={detailImg} alt="" />
                </div>
                <div className={Styles.Bottom}></div>
                <div className={Styles.Right}>
                    <div className={Styles.Header}>
                        <h1>{detailItems.detail?.product.Name}</h1>
                    </div>
                    <div className={Styles.Body}>
                        <div className={Styles.BodyLeft}>
                            <div className={Styles.Price}>
                                <div>
                                    <div className={Styles.ProductPrice}>
                                        <div className={Styles.CurrentPrice}>
                                            {' '}
                                            {new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(detailItems.detail?.product.Price)}
                                        </div>

                                        <div className={Styles.DiscountRate}>
                                            {detailItems.detail?.product.Quantity > 0
                                                ? `-${detailItems.detail?.product.Quantity}%`
                                                : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.FreeShip}>
                                    <div className={Styles.Item}>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/2e/da/c9/4b9c0150392c753ccb65b2595500e9d6.png"
                                            alt=""
                                        />
                                    </div>
                                    <h1>Miễn phí vận chuyển</h1>
                                </div>
                            </div>
                            <div className={Styles.SizeChart}>
                                <button>Bảng kích thước</button>
                                <img
                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icon-right.svg"
                                    alt=""
                                />
                            </div>
                            <div>
                                <p className={Styles.P}>Màu</p>

                                <div className={Styles.Options}>
                                    <div className={Styles.Data}>
                                        <div className={Styles.Figure}>
                                            <picture>
                                                <img
                                                    className={Styles.Img}
                                                    src="https://salt.tikicdn.com/cache/100x100/ts/product/8e/9f/6d/46190791027a824ab90a91d513acc5e4.png.webp"
                                                    alt=""
                                                />
                                            </picture>
                                        </div>
                                        <span className={Styles.Span}>Trắng</span>
                                        <div>
                                            <img
                                                className={Styles.IconStyles}
                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <DetailBuy detailItems={detailItems} />
                        </div>
                        <div className={Styles.BodyRight}>
                            <div className={Styles.Title}>
                                <div className={Styles.Origin}>
                                    <div>
                                        <h1>Xuất xứ:</h1>
                                    </div>
                                    <div>
                                        <h1>{detailItems.detail?.product.Origin}</h1>
                                    </div>
                                </div>
                                <div className={Styles.Origin}>
                                    <div>
                                        <h1>Xuất xứ:</h1>
                                    </div>
                                    <div>
                                        <h1>{detailItems.detail?.product.OriginBrand}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.Size}>
                                <p>Size</p>
                                <div className={Styles.ListSize}>
                                    <button>2XL</button>
                                    <button>2XL</button>
                                    <button>2XL</button>
                                    <button>2XL</button>
                                    <button>2XL</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.Describe}>
                <h2>Mô tả sản phẩm</h2>
                <div className={Styles.ContentDescribe}>
                    <p>{detailItems.detail?.product.Description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
