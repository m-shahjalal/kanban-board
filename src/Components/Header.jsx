import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToTheList } from '../store/slices/kanbanSlice';

const Header = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = () => {
        value && dispatch(addToTheList(value));
        setValue('');
    };

    return (
        <form className="header">
            <input
                value={value}
                onChange={handleChange}
                className="header-input"
                type="text"
                placeholder="write your task"
            />
            <button onClick={handleSubmit} className="header-button">
                Add
            </button>
        </form>
    );
};

export default Header;
