import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import classes from './HomePage.module.scss';
import cn from 'classnames';
import { Preloader } from '../../components/Preloader';
import { getCategories } from '../../api';
import CategoryList from '../../components/CategoryList/CategoryList';
import { Search } from '../../components/Search';

export const HomePage = () => {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const { search } = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
        navigate(`?search=${str}`);
    };

    useEffect(() => {
        getCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog(search ?
                data.categories.filter((item) =>
                    item.strCategory
                        .toLowerCase()
                        .includes(search.split('=')[1].toLowerCase())
                ) : data.categories
            );
        });
    }, [search]);

    return (
        <section className={classes.homepage}>
            <div className={classes.homepage_main}>
                <div className={cn(classes.homepage_main__info, classes.wrap)}>
                    <h1>Recipes for every day!</h1>
                </div>
            </div>
            <Search cb={handleSearch} placeholder='search category...' />
            {!catalog.length ? <Preloader /> : <CategoryList catalog={filteredCatalog} />}
        </section>
    );
};