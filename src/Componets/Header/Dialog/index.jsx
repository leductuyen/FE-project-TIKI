import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography } from '@material-ui/core';
import RecoverPassWord from '../RecoverPassWord';
import Login from '../Login';
import RegForm from '../Login/components/RegForm/RegForm';
import DialogActions from '@mui/material/DialogActions';
import Close from '@material-ui/icons/Close';

import { green } from '@mui/material/colors';
import { useEffect } from 'react';
import { set } from 'react-hook-form';
import { Context } from '../../../Context/Context';
const useStyles = makeStyles((theme) => ({
    Main: {
        background: 'rgb(248, 248, 248)',
        display: 'flex',
        width: '100%',
        borderRadius: '20px',
    },
    ButtonClickOpen: {
        overflow: ' hidden',
        textTransform: 'capitalize',
        fontSize: '13px',
        lineHeight: '16px',
        color: 'rgb(255, 255, 255)',
    },

    CloseIcon: {
        top: '1px',
        right: '0px',
        padding: '2px 2px',
        position: 'absolute',
        borderRadius: '50%',
        cursor: 'pointer',
        backgroundColor: 'red',
        color: '#fff',
    },
    CloseButton: {
        position: 'absolute',
        top: theme.spacing(0.5),
        right: theme.spacing(1),
    },
    Left: {
        width: '500px',
        padding: '40px 45px 24px',
        background: 'rgb(255, 255, 255)',
        borderRadius: '20px 0px 0px 20px',
    },
    LeftStyles: {
        marginBottom: '30px',
    },
    BtnAction: {
        cursor: 'pointer',
        padding: '0px',
        margin: '0px 0px 20px -20px',
        background: 'transparent',
    },
    BtnActionImg: {
        width: '21px',
    },
    Heading: {
        marginBottom: '20px',
    },
    Title: {
        margin: '0px 0px 10px',
        fontSize: '24px',
        fontWeight: '500',
    },
    Right: {
        background: 'linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%)',
        width: '300px',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0px 20px 20px 0px',
    },
    ImgRight: {
        width: '160px',
    },
    Content: {
        margin: '30px 0px 0px',
        textAlign: 'center',
    },
    h4: {
        margin: '0px 0px 5px',
        color: 'rgb(11, 116, 229)',
        fontSize: '17px',
        fontWeight: '500',
    },
    p: {
        fontSize: '13px',
        color: 'rgb(11, 116, 229)',
        fontWeight: '500',
    },
}));

export default function DialogLogin() {
    const classes = useStyles();
    const { userName, setUserName } = useContext(Context);
    const [open, setOpen] = React.useState(false);
    const [isRegistration, setRegistration] = React.useState(false);
    const [isLogin, setLogin] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const callbackFunction = (isRegistration) => {
        console.log(isRegistration);
        setRegistration(isRegistration);
        // setState({ message: childData });
    };

    const callbackLogin = (isLogin) => {
        console.log(isLogin);
        setLogin(isLogin);
        // setState({ message: childData });
    };
    const handleLogOut = () => {
        window.localStorage.removeItem('USER');
        setUserName(null);
        // setState({ message: childData });
    };

    return (
        <div>
            <Box>
                {userName ? (
                    <>
                        <p className={classes.ButtonClickOpen}>{userName}</p>
                        <Button className={classes.ButtonClickOpen} onClick={() => handleLogOut()}>
                            Dang xuat
                        </Button>
                    </>
                ) : (
                    <Button className={classes.ButtonClickOpen} onClick={handleClickOpen}>
                        Đăng nhập/Đăng kí
                    </Button>
                )}
                <Dialog open={open}>
                    {isRegistration ? (
                        <RegForm handleClose={handleClose} isRegistration={isRegistration}></RegForm>
                    ) : (
                        <Login
                            handleClose={handleClose}
                            parentCallback={callbackFunction}
                            isRegistration="{isRegistration}"
                        />
                    )}

                    <IconButton className={classes.CloseButton} onClick={handleClose}>
                        <Close />
                    </IconButton>
                    {/* <Box className={classes.Main}>
                        <CloseIcon className={classes.CloseIcon} onClick={handleClose} />
                        <Box className={classes.Left}>
                            <Box className={classes.LeftStyles}>
                                <Box>
                                    <Button className={classes.BtnAction}>
                                        <img
                                            className={classes.BtnActionImg}
                                            src="https://salt.tikicdn.com/ts/upload/0b/43/2f/7c7435e82bce322554bee648e748c82a.png"
                                            alt=""
                                        />
                                    </Button>
                                </Box>
                                <Box className={classes.Heading}>
                                    <Typography className={classes.Title}>Quên mật khẩu ?</Typography>
                                </Box>
                                <Box>
                                    <Box className={classes.Heading}>
                                        <RecoverPassWord closeForm={handleClose} />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.Right}>
                            <img
                                className={classes.ImgRight}
                                src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
                                alt=""
                            />
                            <Box className={classes.Content}>
                                <Typography className={classes.h4}>Mua sắm tại Tiki</Typography>
                                <Typography className={classes.p}>Siêu ưu đãi mỗi ngày</Typography>
                            </Box>
                        </Box>
                    </Box> */}
                </Dialog>
            </Box>
        </div>
    );
}
