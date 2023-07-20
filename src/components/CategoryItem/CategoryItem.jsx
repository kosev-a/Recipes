import classes from './CategoryItem.module.scss';
import { Link } from 'react-router-dom';

export const CategoryItem = (props) => {
    const {
        // idCategory,
        strCategory,
        strCategoryThumb,
        strCategoryDescription
    } = props;

    return (
        <div className={classes.card}>
            <div className={classes.card_image}>
                <img src={strCategoryThumb} alt={strCategory} />
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