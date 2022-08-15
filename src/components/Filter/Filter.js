import React from "react";
import PropTypes from 'prop-types';
import s from './Filter.module.css';


const Filter = ({ value, onFilter }) => {

 
    return <label className={s.Label}>
            Find contacts by name 
                <input className={s.Input}
          type="text"
          value={value}
          onChange = {e=> onFilter(e.currentTarget.value)}
                />
            </label>
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default Filter;