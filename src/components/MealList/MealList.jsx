import classes from './MealList.module.scss';
import cn from 'classnames';
import { Meal } from '../Meal/Meal';

export const MealList = ({ meals = [] }) => {
    return (
        <div className={cn(classes.list, classes.wrap)}>
            {meals.map((el) => (
                <Meal key={el.idMeal} {...el} />
            ))}
        </div>
    );
};