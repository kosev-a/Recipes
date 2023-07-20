import classes from './Category.module.scss';
import cn from 'classnames';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../../api';
import { Preloader } from '../../components/Preloader';
import { MealList } from '../../components/MealList';

export const Category = () => {
    const [meals, setMeals] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        getFilteredCategory(categoryName).then((data) => setMeals(data.meals));
    }, [categoryName]);

    return (
        <section className={cn(classes.wrap, classes.category)}>
            <h3>Список рецептов для продукта {categoryName}</h3>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </section>
    );
};