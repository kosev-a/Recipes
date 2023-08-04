import classes from './CategoryList.module.scss';
import cn from 'classnames';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { trackWindowScroll } from 'react-lazy-load-image-component';

const CategoryList = ({ catalog = [], scrollPosition }) => {
    return (
        <div className={cn(classes.list, classes.wrap)}>
            {catalog.map((el) => (
                <CategoryItem
                    key={el.idCategory}
                    scrollPosition={scrollPosition}
                    {...el}
                />
            ))}
        </div>
    );
};

export default trackWindowScroll(CategoryList);