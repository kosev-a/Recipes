import classes from './Header.module.scss';
import cn from 'classnames';

import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { getCategories } from '../../api';

export const Header = () => {
    const container = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (e) => {
        if (container.current && !container.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        getCategories().then(data => {
            setCategories(data.categories);
        });
    }, []);

    return (
        <header className={classes.header}>
            <div className={cn(classes.wrap, classes.flex_sb)}>
                <Link to="/">
                    <img
                        src="/img/logo.svg"
                        height="120px"
                        width="160px"
                        alt="logo"
                    />
                </Link>
                <div className={classes.container} ref={container}>
                    <button
                        type="button"
                        onClick={handleDropdownClick}
                    >
                        CATEGORIES
                        <img
                            src="/img/burger-menu.svg"
                            height="60px"
                            alt=""
                        />
                    </button>
                    {isOpen && (
                        <nav className={classes.container_dropdown}>
                            <ul>
                                {categories.map((item) => (
                                    <li key={item.idCategory}>
                                        <Link to={`/category/${item.strCategory}`}>
                                            {item.strCategory}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </header >
    );
};
