import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DetailRadio from './DetailRadio';

const useStyles = makeStyles((theme) => ({
    ButtonClickOpen: {
        lineHeight: '24px',
    },
    DialogTitle: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
    },
    Title: {
        fontSize: '18px',
        marginTop: '10px',
    },
    CloseIcon: {
        top: '1px',
        right: '0px',
        padding: '2px 2px',
        position: 'absolute',
        borderRadius: '50%',
        cursor: 'pointer',
        backgroundColor: 'black',
        color: '#fff',
    },
    Box: {
        padding: '14px 30px',

        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    },
    Typography: {
        textAlign: 'center',
        lineHeight: 1.2,
    },
    TypographyStyle: {
        marginTop: '10px',
        textAlign: 'center',
        lineHeight: 1.2,
        fontSize: '14px',
        color: 'rgba(0,0,0,0,54)',
    },

    loginButton: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px',
    },

    loginButtonStyle: {
        cursor: 'pointer',
        width: '296px',
        height: '40px',
        padding: '0px',
        color: 'rgb(255, 255, 255)',
        fontSize: '13px',
        lineHeight: '38px',
        border: '1px rgb(26, 148, 255)',
        borderRadius: '4px',
        backgroundColor: 'rgb(26, 148, 255)',
        outline: 'none',
    },
    deliveryButton: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    deliveryButtonStyle: {
        cursor: 'pointer',
        width: '296px',
        height: '40px',
        color: 'rgb(255, 255, 255)',
        fontSize: '13px',
        lineHeight: '38px',
        fontWeight: '300',
        border: 'none',
        outline: 'none',
        borderRadius: '4px',
        backgroundColor: 'rgb(255, 66, 78)',
    },
}));

export default function DeliveryAddress() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Box>
                <Button className={classes.ButtonClickOpen} onClick={handleClickOpen}>
                    Đại Mỗ, Nam Từ Liêm, HN
                </Button>
                <Dialog open={open}>
                    <DialogTitle>
                        <Box className={classes.DialogTitle}>
                            <Typography className={classes.Title}>Địa chỉ giao hàng</Typography>

                            <Box borderRadius="50%">
                                <CloseIcon className={classes.CloseIcon} onClick={handleClose} />
                            </Box>
                        </Box>
                    </DialogTitle>

                    <Box className={classes.Box}>
                        <Typography className={classes.Typography}>
                            Hãy chọn địa chỉ nhận hàng để được dự báo thời gian giao hàng cùng phí đóng gói, vận chuyển
                            một cách chính xác nhất
                        </Typography>

                        <Box className={classes.loginButton}>
                            <Button>
                                <Typography className={classes.loginButtonStyle}>
                                    Đăng nhập để chọn địa chỉ giao hàng
                                </Typography>
                            </Button>
                        </Box>
                        <Typography className={classes.TypographyStyle}>Hoặc</Typography>
                        <DetailRadio />
                        <DialogContent></DialogContent>
                        <Box className={classes.deliveryButton}>
                            <Button autoFocus>
                                <Typography className={classes.deliveryButtonStyle}>Giao đến địa chỉ này</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Dialog>
            </Box>
        </div>
    );
}
