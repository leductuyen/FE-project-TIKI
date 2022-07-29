import React from 'react';
import PropTypes from 'prop-types';
import RecoverPassWordForm from '../RecoverPassWordForm';

RecoverPassWord.propTypes = { closeForm: PropTypes.func };

function RecoverPassWord(props) {
    const { closeForm } = props;
    const handleSubmit = (values) => {
        console.log('values', values);
    };
    return (
        <div>
            <RecoverPassWordForm onSubmit={handleSubmit} closeForm={closeForm} />
        </div>
    );
}

export default RecoverPassWord;
