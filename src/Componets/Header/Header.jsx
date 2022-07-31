import React, { useContext, useState } from 'react';
import { useRef } from 'react';
import { Context } from '../../Context/Context';
import Logo from '../../Image/logo.png';
import Search from '../../Image/search.png';
import DialogLogin from './Dialog';
import Styles from './Header.module.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector } from '../Cart/selectors';
import { useHistory } from 'react-router-dom';
function Header(props) {
    const cartItemsCount = useSelector(cartItemsCountSelector);

    const history = useHistory();
    const inputRef = useRef();
    const { setSearch, searchString, setSearchString } = useContext(Context);
    const handleOnChange = (e) => {
        setSearchString(e.target.value);
    };
    const handleSearchClick = () => {
        setSearch(searchString);
        setSearchString('');
        inputRef.current.focus();
    };
    const handleCartClickOpen = () => {
        history.push('/cart');
    };
    const handleClickBackHome = () => {
        history.push('/');
    };
    return (
        <div className={Styles.Main}>
            <div className={Styles.Wrapper}>
                <div className={Styles.Header}>
                    <div className={Styles.Middle}>
                        <div className={Styles.Logo}>
                            <button onClick={handleClickBackHome} className={Styles.ButtonClickHomeBack}>
                                <img src={Logo} alt="logo" />
                                <div className={Styles.FreeTiki}>
                                    <img
                                        src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
                                        alt=""
                                    />
                                </div>
                            </button>
                        </div>
                        <div className={Styles.FormSearch}>
                            <div className={Styles.Search}>
                                <input
                                    ref={inputRef}
                                    className={Styles.Input}
                                    type="text"
                                    placeholder="Tìm kiếm sản phẩm"
                                    value={searchString}
                                    onChange={handleOnChange}
                                    onKeyDown={(e) => {
                                        if (e.code === 'Enter') {
                                            setSearch(searchString);
                                        }
                                    }}
                                />
                                <button className={Styles.Button} onClick={handleSearchClick}>
                                    <img src={Search} alt="serach" />
                                    Tìm kiếm
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.User}>
                        <img
                            className={Styles.ProfileIcon}
                            src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                            alt=""
                        />

                        <span className={Styles.UserStyles}>
                            <DialogLogin />
                        </span>

                        <span className={Styles.UserStyles}>
                            <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleCartClickOpen}>
                                <Badge badgeContent={cartItemsCount} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </span>
                        <span className={Styles.UserStyles}>Giỏ hàng</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
