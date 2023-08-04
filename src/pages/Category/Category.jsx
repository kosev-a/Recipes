import classes from './Category.module.scss';
import cn from 'classnames';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getFilteredCategory } from '../../api';
import { Preloader } from '../../components/Preloader';
import MealList from '../../components/MealList/MealList';
import { Search } from '../../components/Search';

export const Category = () => {
    const [meals, setMeals] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState([]);

    const { categoryName } = useParams();
    const { search } = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const handleSearch = (str) => {
        setFilteredCategory(
            meals.filter((item) =>
                item.strMeal.toLowerCase().includes(str.toLowerCase())
            )
        );
        navigate(`?search=${str}`);
    };

    useEffect(() => {
        getFilteredCategory(categoryName).then((data) => {
            setMeals(data.meals);
            setFilteredCategory(search ?
                data.meals.filter((item) =>
                    item.strMeal
                        .toLowerCase()
                        .includes(search.split('=')[1].toLowerCase())
                ) : data.meals
            );
        });
    }, [categoryName, search]);

    return (
        <section className={cn(classes.wrap, classes.category)}>
            <Search cb={handleSearch} placeholder='search recipe...' />
            <h3>List of recipes: {categoryName}</h3>
            {!meals.length ? <Preloader /> : <MealList meals={filteredCategory} />}
            <div className={classes.btn}>
                <button onClick={goBack}>Go back</button>
            </div>
        </section>
    );
};