import React from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, IconButton, OutlinedInput } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    StyleInput: {
        width: '60px',
        height: '30px',
    },
}));
QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    dislabel: PropTypes.bool,
};

function QuantityField(props) {
    const classes = useStyles();
    const { form, name, label, dislabel } = props;
    const { errors, setValue } = form;
    return (
        <div>
            <FormControl>
                <Controller
                    name={name}
                    control={form.control}
                    render={({ field: { onChange, onBlur, value, name } }) => (
                        <Box>
                            <IconButton
                                onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}
                            >
                                <RemoveCircleOutline />
                            </IconButton>
                            <OutlinedInput
                                className={classes.StyleInput}
                                id={name}
                                type="number"
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                disabled={dislabel}
                            />
                            <IconButton
                                onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}
                            >
                                <AddCircleOutline />
                            </IconButton>
                        </Box>
                    )}
                />
            </FormControl>
        </div>
    );
}

export default QuantityField;
