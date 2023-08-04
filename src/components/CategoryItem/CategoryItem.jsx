import classes from './CategoryItem.module.scss';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const CategoryItem = (props) => {
    const {
        strCategory,
        strCategoryThumb,
        strCategoryDescription,
        scrollPosition
    } = props;

    return (
        <div className={classes.card}>
            <div className={classes.card_image}>
                <LazyLoadImage
                    alt={strCategory}
                    scrollPosition={scrollPosition}
                    src={strCategoryThumb}
                />
                <span>{strCategory}</span>
            </div>
            <div className={classes.card_description}>
                <p>{strCategoryDescription}</p>
            </div>
            <Link to={`/category/${strCategory}`} className={classes.card_btn}>
                Watch category
            </Link>
        </div>
    );

};