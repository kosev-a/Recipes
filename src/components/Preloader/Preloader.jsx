import classes from './Preloader.module.scss';

export const Preloader = () => {
    return (
        <div className={classes.preloader}>
            <img
                src='/img/loading.svg'
                height="70px"
                width="70px"
                alt="loading..."
            />
        </div>
    );
};