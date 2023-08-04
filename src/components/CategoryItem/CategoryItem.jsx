import classes from './CategoryItem.module.scss';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const CategoryItem = (props) => {
    const {
        // idCategory,
        strCategory,
        strCategoryThumb,
        strCategoryDescription,
        scrollPosition
    } = props;

    return (
        <div className={classes.card}>
            <div className={classes.card_image}>
                {/* <img src={strCategoryThumb} alt={strCategory} /> */}
                <LazyLoadImage
                    alt={strCategory}
                    // height={image.height}
                    // Make sure to pass down the scrollPosition,
                    // this will be used by the component to know
                    // whether it must track the scroll position or not
                    scrollPosition={scrollPosition}
                    src={strCategoryThumb}
                // width={image.width} 
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