import classes from './Meal.module.scss';
import { Link } from 'react-router-dom';

export const Meal = (props) => {
    const {
        idMeal,
        strMeal,
        strMealThumb
    } = props;

    return (
        <div className={classes.card}>
            <div className={classes.card_image}>
                <img src={strMealThumb} alt={strMeal} />
                <span>{strMeal}</span>
            </div>
            <Link to={`/meal/${idMeal}`} className={classes.card_btn}>
                Watch recipe
            </Link>
        </div>
    );
};