import classes from './Meal.module.scss';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Meal = (props) => {
    const {
        idMeal,
        strMeal,
        strMealThumb,
        scrollPosition
    } = props;

    return (
        <div className={classes.card}>
            <div className={classes.card_image}>
                <LazyLoadImage
                    alt={strMeal}
                    scrollPosition={scrollPosition}
                    src={strMealThumb}
                />
                <span>{strMeal}</span>
            </div>
            <Link to={`/meal/${idMeal}`} className={classes.card_btn}>
                Watch recipe
            </Link>
        </div>
    );
};