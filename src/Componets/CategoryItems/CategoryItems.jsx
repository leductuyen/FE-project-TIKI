import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import categoryApi from '../../api/category';
import Styles from './CategoryItems.module.scss';

function CategoryItems(props) {
    const [itemsCategory, setItemsCategory] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const listCategory = await categoryApi.get();

                setItemsCategory(listCategory);
            } catch (error) {
                console.log('category error', error);
            }
        })();
    }, []);

    return (
        <div className={Styles.Category}>
            {itemsCategory.categories?.map((items, index) => (
                <div className={Styles.Slider}>
                    <li key={items.CategoryId}>{items?.Name}</li>
                </div>
            ))}
        </div>
    );
}

export default CategoryItems;
