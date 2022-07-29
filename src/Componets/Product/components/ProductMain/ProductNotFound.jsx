import React from 'react';
import { useContext } from 'react';
import { Context } from '../../../../Context/Context';
import Styles from './ProductNotFound.module.scss';

function ProductNotFound(props) {
    const { searchString } = useContext(Context);
    return (
        <div className={Styles.MainNotFound}>
            <div className={Styles.Title}>
                <p>Kết quả tìm kiếm cho "{searchString}"</p>
            </div>
            <div className={Styles.Content}>
                <p>Rất tiếc, không tìm thấy sản phẩm phù hợp với bạn</p>
                <div className={Styles.Image}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vYRnkcAzYsNAsbnJ4yZ6mzZ8MUeCEQBP0Q&usqp=CAU"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductNotFound;
