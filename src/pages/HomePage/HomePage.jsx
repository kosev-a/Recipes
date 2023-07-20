import { useState, useEffect } from 'react';
import classes from './HomePage.module.scss';
import cn from 'classnames';
import { Preloader } from '../../components/Preloader';
import { getCategories } from '../../api';
import { CategoryList } from '../../components/CategoryList/CategoryList';

export const HomePage = () => {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getCategories().then(data => {
            setCatalog(data.categories);
        });
    }, []);

    return (
        <section className={classes.homepage}>
            <div className={classes.homepage_main}>
                <div className={cn(classes.homepage_main__info, classes.wrap)}>
                    <h1>Recipes for every day!</h1>
                </div>
            </div>
            {!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}
        </section>
    );
};