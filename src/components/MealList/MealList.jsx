import classes from './MealList.module.scss';
import cn from 'classnames';
import { Meal } from '../Meal/Meal';
import { trackWindowScroll } from 'react-lazy-load-image-component';

const MealList = ({ meals = [], scrollPosition }) => {
    return (
        <div className={cn(classes.list, classes.wrap)}>
            {meals.map((el) => (
                <Meal
                    key={el.idMeal}
                    scrollPosition={scrollPosition}
                    {...el}
                />
            ))}
        </div>
    );
};

export default trackWindowScroll(MealList);