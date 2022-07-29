import React from 'react';
import Styles from './Banner.module.scss';

import Right from '../../Image/Right.png';
import { Carousel } from 'react-carousel-minimal';
const data = [
    {
        image: 'https://salt.tikicdn.com/cache/w1080/ts/banner/0d/b0/82/811380729910e04d8ed1ba3b88b3793a.png.webp',
    },
    {
        image: 'https://salt.tikicdn.com/cache/w1080/ts/banner/20/e9/72/b57831e754eded3c11a09361b9f5721f.png.webp',
    },
    {
        image: 'https://salt.tikicdn.com/cache/w1080/ts/banner/98/c3/31/14eaa7d74236a023d92e171751f23d1d.png.webp',
    },
    {
        image: 'https://salt.tikicdn.com/cache/w1080/ts/banner/40/b7/17/86f31c4f4a4877560b1b633f161452c1.png.webp',
    },
    {
        image: 'https://salt.tikicdn.com/cache/w1080/ts/banner/fa/88/0f/2769654f65982e4b262270209047c044.png.webp',
    },
    {
        image: 'https://salt.tikicdn.com/cache/w1080/ts/banner/20/e9/72/b57831e754eded3c11a09361b9f5721f.png.webp',
    },
    {
        image: 'https://salt.tikicdn.com/cache/w1080/ts/banner/38/5a/a9/d42ec0b3f062dd2a26a1d81f49a2bc97.png.webp',
    },
    {
        image: 'https://salt.tikicdn.com/cache/w1080/ts/banner/8c/9e/b2/20f7586b0ff0e78d7666177150fafb31.png.webp',
    },
    {
        image: 'https://salt.tikicdn.com/cache/w1080/ts/banner/0c/80/f4/5778ac9265740800dcceee730734a7de.png.webp',
    },
];
function Banner(props) {
    return (
        <div className={Styles.Banner}>
            <div className={Styles.Styles}>
                <div className={Styles.Left}>
                    <Carousel data={data} time={2000} automatic={true} width="824px" height="272px" />
                </div>
                <div className={Styles.Right}>
                    <img src={Right} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
