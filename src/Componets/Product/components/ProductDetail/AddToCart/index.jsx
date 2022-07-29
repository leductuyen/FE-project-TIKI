import React from 'react';
import { useForm } from 'react-hook-form';
import Styles from './AddToCart.module.scss';
import PropTypes from 'prop-types';
import QuantityField from '../../../../FormControl/QuantityField';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    StyleButton: {
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(255, 57, 69)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '190px',
        width: '100%',
        maxWidth: '220px',
        height: '48px',
        fontSize: '15px',
        lineHeight: '24px',
        fontWeight: '500',
        textTransform: 'capitalize',
        border: ' none',
        borderRadius: '4px',
        outline: 'none',
    },
}));
AddToCart.propTypes = {
    onSubmit: PropTypes.func,
};
function AddToCart({ onSubmit = null }) {
    const classes = useStyles();
    const form = useForm({
        defaultValues: {
            quantity: 1,
        },
    });
    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
    };

    return (
        <div className={Styles.AddToCart}>
            <div className={Styles.Quantity}>
                <div>
                    <p className={Styles.Label}>Số lượng</p>
                    <div className={Styles.GroupInput}></div>
                </div>
            </div>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <QuantityField name="quantity" label="Quantity" form={form} />
                <Button type="submit">
                    <Typography className={classes.StyleButton}>Chọn mua</Typography>
                </Button>
            </form>
        </div>
    );
}

export default AddToCart;
