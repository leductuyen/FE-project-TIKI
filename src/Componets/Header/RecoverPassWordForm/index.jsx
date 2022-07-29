import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../../FormControl/InputField';
import { useForm } from 'react-hook-form';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
RecoverPassWordForm.propTypes = {
    onSubmit: PropTypes.func,
    closeForm: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
    TitleP: {
        margin: 0,
        fontSize: '13px',
    },
    ButtonRecoverPassWord: {
        margin: '50px 0px 10px',
        borderRadius: '4px',
        background: 'rgb(255, 66, 78)',
        cursor: 'pointer',
        padding: '13px 0px',
        fontSize: '18px',
    },
    RecoverPassWordStyles: {
        color: 'rgb(255, 255, 255)',
        marginLeft: '75px',
    },
    BoxTITLE: { textAlign: 'center' },
    Img: {
        width: '40px',
        textAlign: 'center',
    },
    SizeTITLE: {
        fontSize: '14px',
        textAlign: 'center',
        padding: '0px 20px',
        margin: '20px 0px',
        lineHeight: '20px',
        fontWeight: '300',
    },
    ButtonTITLE: {
        color: 'rgb(13, 92, 182)',
        border: '1px solid rgb(13, 92, 182)',
        borderRadius: ' 4px',
        padding: '10px 0px',
        fontSize: '18px',
        outline: 'none',
        background: 'transparent',
        width: '100%',
        fontWeight: '300',
        cursor: 'pointer',
    },
    StylesText: {
        color: 'black',
    },
}));
const MODE = {
    RECOVER: 'recover',
    TITLE: 'title',
};
function RecoverPassWordForm(props) {
    const { closeForm } = props;
    const [changeForm, setChangeForm] = useState(MODE.RECOVER);
    const [text, setText] = useState([]);

    const classes = useStyles();
    const form = useForm({
        defaultValues: {
            email: '',
        },
    });
    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    };

    return (
        <div>
            {changeForm === MODE.RECOVER && (
                <>
                    <form onSubmit={form.handleSubmit(handleSubmit)} onChange={(e) => setText(e.target.value)}>
                        <Typography className={classes.TitleP}>
                            Vui lòng nhập thông tin tài khoản để lấy lại mật khẩu
                        </Typography>
                        <InputField name="email" label="Số điện thoại/Email" form={form} />
                        <Box className={classes.ButtonRecoverPassWord}>
                            <Button type="submit" onClick={() => setChangeForm(MODE.TITLE)}>
                                <Typography className={classes.RecoverPassWordStyles}>Lấy lại mật khẩu</Typography>
                            </Button>
                        </Box>
                    </form>
                </>
            )}
            {changeForm === MODE.TITLE && (
                <>
                    <Box className={classes.BoxTITLE}>
                        <img
                            className={classes.Img}
                            src="https://salt.tikicdn.com/ts/upload/d6/21/75/6a9b5426723f04be8f111c1b2afb5af3.png"
                            alt=""
                        />
                        <Typography className={classes.SizeTITLE}>
                            Link lấy lại mật khẩu vừa được gửi tới
                            <Typography className={classes.StylesText}>{text}</Typography> vui lòng kiểm tra tin nhắn
                        </Typography>
                        <Button className={classes.ButtonTITLE} onClick={closeForm}>
                            <Typography>ĐÓNG</Typography>
                        </Button>
                    </Box>
                </>
            )}
        </div>
    );
}

export default RecoverPassWordForm;
