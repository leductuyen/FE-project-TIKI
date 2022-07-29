import React from 'react';
import { useContext } from 'react';
import { Context } from '../../../../Context/Context';
import Styles from './ProductResult.module.scss';

function ProductResult(props) {
    const { searchString } = useContext(Context);
    return (
        <div className={Styles.searchString}>
            <p>Kết quả tìm kiếm cho "{searchString}"</p>
        </div>
    );
}

export default ProductResult;
