import classes from './CategoryList.module.scss';
import cn from 'classnames';
import { CategoryItem } from '../CategoryItem/CategoryItem';

export const CategoryList = ({ catalog = [] }) => {
    return (
        <div className={cn(classes.list, classes.wrap)}>
            {catalog.map((el) => (
                <CategoryItem key={el.idCategory} {...el} />
            ))}
        </div>
    );
};