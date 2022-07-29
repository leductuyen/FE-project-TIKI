import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Styles from './DetailBuy.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useEffect } from 'react';
import addressApi from '../../../../../api/address';
import { useState } from 'react';

const currencies = [
    {
        value: 'Hà Nội',
        label: 'Hà Nội',
    },
    {
        value: 'Thái Bình',
        label: 'Thái Bình',
    },
    {
        value: 'TP Hồ Chí Minh',
        label: 'TP Hồ Chí Minh',
    },
    {
        value: 'Đà Nẵng',
        label: 'Đà Nẵng',
    },
];
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            width: '250px',
        },
    },
}));
export default function DetailRadio() {
    const classes = useStyles();
    const [value, setValue] = React.useState('selection');

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log('value', value);
    };

    const handleTextFieldChange = (event) => {
        console.log('textfield', event.target.value);
    };
    const [addRess, setAddRess] = useState([]);
    console.log('address', addRess);
    useEffect(() => {
        (async () => {
            try {
                const data = await addressApi.getAll();
                setAddRess(data);
            } catch (error) {
                console.log('Field address', error);
            }
        })();
    }, []);
    return (
        <FormControl>
            <RadioGroup value={value} onChange={handleChange}>
                <FormControlLabel value="selection" control={<Radio />} label="Đại Mỗ, Nam Từ Liêm, HN" />
                <FormControlLabel value="address" control={<Radio />} label="Chọn khu vực giao hàng khác " />
                {value === 'address' && (
                    <div className={Styles.LocaltionModal}>
                        <div className={Styles.Row}>
                            <p className={Styles.LocalType}>Tỉnh/Thành phố</p>
                            <div className={Styles.LocalContainer}>
                                <form className={classes.root}>
                                    <div>
                                        <TextField
                                            id="outlined-select-currency-native"
                                            select
                                            label="Tỉnh/Thành Phố"
                                            onChange={handleTextFieldChange}
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="outlined"
                                        >
                                            {addRess.Provinces?.map((option) => (
                                                <option key={option.ProvinceId}>{option.NameProvince}</option>
                                            ))}
                                        </TextField>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </RadioGroup>
        </FormControl>
    );
}
