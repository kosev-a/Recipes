import { useState } from 'react';
import classes from './Search.module.scss';
import cn from 'classnames';

export const Search = ({ cb = Function.prototype, placeholder }) => {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className={cn(classes.search, classes.wrap, classes.btn)}>
            <input
                type="search"
                id="search-field"
                onKeyDown={handleKey}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                placeholder={placeholder}
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
    );
};