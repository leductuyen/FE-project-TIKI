import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    WithdInput: {
        width: '300px',
    },
}));
InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    dislabled: PropTypes.bool,
};

function InputField(props) {
    const classes = useStyles();
    const { form, name, label, dislabled } = props;
    return (
        <div>
            <Controller
                name={name}
                control={form.control}
                render={({ field: { onChange, onBlur, value, name } }) => (
                    <TextField
                        className={classes.WithdInput}
                        onBlur={onBlur} // notify when input is touched
                        onChange={onChange} // send value to hook form
                        name={name}
                        value={value}
                        label={label}
                        disabled={dislabled}
                    />
                )}
            />
        </div>
    );
}

export default InputField;
