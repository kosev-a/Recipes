import classes from './Header.module.scss';
import cn from 'classnames';

export const Header = () => {
    return (
        <header className={classes.header}>
            <div className={cn(classes.wrap, classes.flex_sb)}>
                <a href="/">
                    <img
                        src="/img/logo.svg"
                        height="120px"
                        width="160px"
                        alt="logo"
                    />
                </a>
                <p>g;ugu;hgoiuhoiuhguohguhgug</p>
            </div>
        </header>
    );
};
