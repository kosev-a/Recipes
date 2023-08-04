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
                {/* <img src={strMealThumb} alt={strMeal} /> */}
                <LazyLoadImage
                    alt={strMeal}
                    // height={image.height}
                    // Make sure to pass down the scrollPosition,
                    // this will be used by the component to know
                    // whether it must track the scroll position or not
                    scrollPosition={scrollPosition}
                    src={strMealThumb}
                // width={image.width} 
                />
                <span>{strMeal}</span>
            </div>
            <Link to={`/meal/${idMeal}`} className={classes.card_btn}>
                Watch recipe
            </Link>
        </div>
    );
};